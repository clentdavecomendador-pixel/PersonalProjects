create table if not exists public.contact_messages (
    id uuid primary key default gen_random_uuid(),
    name text not null check (char_length(btrim(name)) between 1 and 120),
    email text not null check (char_length(email) between 3 and 320),
    message text not null check (char_length(btrim(message)) between 1 and 5000),
    created_at timestamptz not null default now(),
    is_read boolean not null default false
);

alter table public.contact_messages enable row level security;

grant insert on public.contact_messages to anon;

create policy "Anyone can submit contact messages"
    on public.contact_messages
    for insert
    to anon
    with check (is_read = false);
