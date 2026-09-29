# Shri Sai CHS PWA v0.7

## Access
- Member mode is View Only and can see the same society data available to Admin.
- Admin mode requires PIN `9870`.

## Real SMS
This package includes a Vercel serverless SMS integration using Twilio.

Set these Vercel environment variables:
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FROM_NUMBER`
- `ADMIN_PHONE=9594595867`
- `MEMBERS_JSON` containing the member mobile numbers and monthly maintenance.

`POST /api/send-sms` sends one SMS.
`POST /api/notify-admin` sends a real-time admin alert to `ADMIN_PHONE`.
`GET/POST /api/monthly-maintenance` sends monthly maintenance reminders.

Vercel Cron is configured for the 1st of every month. Twilio account/SMS sender approval and sufficient balance are required for real delivery.


## v0.8
Unified Admin/Member portal with RBAC. Admin can mutate; Member is view-only. Demo Admin PIN: 9870. Firebase FCM hook included; actual push requires Firebase configuration. Production authorization must be enforced server-side.
