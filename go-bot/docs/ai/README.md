# AI System

Documentation for Go-Bot's intelligence layer (see
[architecture overview](../architecture/overview.md) — Intelligence Layer).

## Principles

- **On-device first.** Perception is processed locally; the cloud extends,
  never replaces, on-device intelligence.
- **Warmth is a requirement.** Conversational behavior is tuned for patience
  and empathy, evaluated as rigorously as accuracy.
- **Explainable actions.** Go-Bot can always say why he did something.

## Planned docs

- Perception pipeline (V2)
- Conversation system & personality model (V3 — powers the web-embedded
  conversational Go-Bot)
- Safety & alignment guarantees
- Learning & personalization model
