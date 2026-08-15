# API Reference

*Planned — Version 3.*

The public Go-Bot API will live under `src/app/api` with request/response
contracts defined in `src/types` and documented here. Planned surfaces:

- **Skills API** — register and invoke Go-Bot skills
- **Presence API** — query companion state (with owner consent)
- **Events API** — subscribe to household events

Design constraints already fixed: typed contracts shared between server and
clients, versioned routes (`/api/v1/…`), and privacy-scoped tokens.
