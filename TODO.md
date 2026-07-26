# Fix Errors - In Progress

## Plan

### Step 1: Fix build - Reinstall dependencies

- [x] Delete `node_modules/` and `package-lock.json`
- [ ] Run `npm install` to get fresh native bindings
  - **BLOCKED**: Disk is full (C: drive shows 0 bytes free). Need to free up disk space first.

### Step 2: Restructure `src/routes/api/simulate.ts`

- [x] Changed to use proper `server: { handlers: { POST: ... } }` pattern
- [x] Removed `@ts-ignore` comment

### Step 3: Run TypeScript check

- [ ] Run `npx tsc --noEmit` to check remaining type errors
  - **BLOCKED**: Requires `node_modules` installed first.

### Step 4: Verify build

- [ ] Run `npm run build` to verify everything works
  - **BLOCKED**: Requires `node_modules` installed first.

## Summary of Code Fixes Applied

### `src/routes/api/simulate.ts`

- ✅ Restructured from `createFileRoute(...)({ POST: async ... })` to `createFileRoute(...)({ server: { handlers: { POST: async ... } } })`
- ✅ Removed `@ts-ignore` comment (no longer needed with proper server.handlers pattern)
- ✅ All existing fixes preserved: Zod v4 `.issues`, consistent number formatting, etc.

### `src/integrations/supabase/auth-middleware.ts` (previously fixed)

- ✅ Fixed `getClaims()` → `getUser()`
- ✅ Fixed `data.claims.sub` → `data.user.id`

### Build Issue

- **Problem**: C: drive is full (0 bytes free). The corrupted rolldown native binding in the previous `node_modules` has been deleted, but re-installation fails due to disk space.
- **Solution**: Free up disk space on C: drive, then run `npm install`.
