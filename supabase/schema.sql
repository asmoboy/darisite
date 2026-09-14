-- kreisel: Datenbank-Schema für Supabase
-- Im Supabase-Dashboard unter "SQL Editor" einfügen und ausführen.

-- Welche Nutzer welchen Communities beigetreten sind
create table if not exists public.memberships (
  user_id      uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  community_id integer     not null,
  created_at   timestamptz not null default now(),
  primary key (user_id, community_id)
);

alter table public.memberships enable row level security;

-- Jede Person sieht und ändert nur ihre eigenen Mitgliedschaften
drop policy if exists "Eigene Mitgliedschaften lesen" on public.memberships;
create policy "Eigene Mitgliedschaften lesen" on public.memberships
  for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "Eigene Mitgliedschaften anlegen" on public.memberships;
create policy "Eigene Mitgliedschaften anlegen" on public.memberships
  for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "Eigene Mitgliedschaften löschen" on public.memberships;
create policy "Eigene Mitgliedschaften löschen" on public.memberships
  for delete to authenticated using ((select auth.uid()) = user_id);
