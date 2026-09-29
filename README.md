# श्री साई CHS PWA v0.4

Mobile-first Marathi society management PWA prototype.

## Included
- Dashboard shows only **52 members**; flat numbers are shown inside individual member details.
- 52 dummy member records with flat numbers 5-A-01…5-A-26 and 5-B-01…5-B-26.
- Member profile with owner/tenant, NOC and required document statuses.
- ₹1,000 monthly maintenance demo and Marathi Shri Sai CHS receipt.
- Monthly notification demo for the 1st of every month (production SMS requires backend scheduler + SMS provider).
- Committee members, committee meetings, AGM, MOM and attendee records.
- Maharashtra Co-operative Societies Act section references explicitly supported by the uploaded registration certificate: sections 9(1), 12(1) and Rule 10(1).
- Penalty and legal-action tracking for defaulters.
- Complaint registration with committee notification state.
- Feedback / concerns.
- Water timings.
- Caretaker record: Vitthal Sarode, ₹8,000/month, duties and attendance.
- Existing redevelopment placeholder section and audit log.

## Society certificate source
The uploaded registration certificate is represented in the UI as the basis for society name/classification/registration references. The certificate image is the source for the registration details.

## Run
Serve over HTTP/HTTPS:
`python3 -m http.server 8080`

This is a frontend demo. For production use, add authentication, PostgreSQL, secure document/object storage, SMS/WhatsApp provider, payment gateway webhooks, server-side scheduling, RBAC and immutable audit logging.
