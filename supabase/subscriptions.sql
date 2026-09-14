-- kreisel: Abos / freigeschaltete Pläne
-- Im Supabase-Dashboard unter "SQL Editor" einfügen und ausführen.
-- Befüllt wird die Tabelle ausschließlich von der Edge Function "stripe-webhook".

create table if not exists public.subscriptions (
  stripe_subscription_id text        primary key,
  stripe_customer_id     text,
  email                  text        not null,
  user_id                uuid        references auth.users (id) on delete set null,
  plan                   text        not null,
  billing                text        not null,
  status                 text        not null,
  cancel_at_period_end   boolean     not null default false,
  current_period_end     timestamptz,
  updated_at             timestamptz not null default now()
);

create index if not exists subscriptions_email_idx on public.subscriptions (lower(email));

alter table public.subscriptions enable row level security;

-- Angemeldete Nutzer sehen nur ihre eigenen Abos (per Konto-ID oder gleicher E-Mail).
-- Schreiben darf nur der Webhook (Service Role umgeht RLS).
drop policy if exists "Eigene Abos lesen" on public.subscriptions;
create policy "Eigene Abos lesen" on public.subscriptions
  for select to authenticated
  using (
    user_id = (select auth.uid())
    or lower(email) = lower((select auth.jwt() ->> 'email'))
  );
