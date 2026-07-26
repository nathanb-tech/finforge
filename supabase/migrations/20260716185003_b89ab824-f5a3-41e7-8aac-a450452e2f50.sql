-- ============================================================
-- FINVERSE AI — Supabase schema
-- ============================================================

-- 1. PROFILES ------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  organization text,
  created_at timestamptz not null default now()
);

grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;

alter table public.profiles enable row level security;

drop policy if exists "profiles self read"   on public.profiles;
drop policy if exists "profiles self insert" on public.profiles;
drop policy if exists "profiles self update" on public.profiles;

create policy "profiles self read"   on public.profiles for select using (auth.uid() = id);
create policy "profiles self insert" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles self update" on public.profiles for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 2. MSME PROFILES -------------------------------------------
create table if not exists public.msme_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  business_name text not null,
  sector text not null,
  monthly_revenue numeric not null default 0,
  monthly_expenses numeric not null default 0,
  cash_balance numeric not null default 0,
  existing_loans numeric not null default 0,
  employees integer not null default 1,
  created_at timestamptz not null default now()
);

grant select, insert, update, delete on public.msme_profiles to authenticated;
grant all on public.msme_profiles to service_role;

alter table public.msme_profiles enable row level security;

drop policy if exists "msme owner all" on public.msme_profiles;
create policy "msme owner all" on public.msme_profiles
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 3. SIMULATIONS ---------------------------------------------
create table if not exists public.simulations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  msme_id uuid not null references public.msme_profiles(id) on delete cascade,
  ffcs_score numeric not null,
  base_survival numeric not null,
  stress_survival numeric not null,
  crisis_survival numeric not null,
  recommendation text not null,
  ai_summary text not null,
  created_at timestamptz not null default now()
);

grant select, insert, delete on public.simulations to authenticated;
grant all on public.simulations to service_role;

alter table public.simulations enable row level security;

drop policy if exists "sim owner all" on public.simulations;
create policy "sim owner all" on public.simulations
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create index if not exists simulations_user_created_idx
  on public.simulations (user_id, created_at desc);
