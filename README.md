# Shri Sai CHS PWA

A working frontend PWA prototype for Shri Sai CHS.

## Included
- Installable PWA with service-worker offline shell
- Mobile-first society dashboard
- Maintenance ledger and payment UX
- Notices/document repository UX
- Complaint workflow
- Redevelopment dashboard
- Member profile
- Role/audit-first architecture placeholders

## Run
Serve this folder over HTTP/HTTPS (service workers do not work reliably from file://):

`python3 -m http.server 8080`

Then open `http://localhost:8080`.

For production, connect authentication, PostgreSQL, object storage, payment gateway webhooks, notification provider and immutable audit logging.
