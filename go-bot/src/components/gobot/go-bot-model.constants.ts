/**
 * The 3D Go-Bot asset — owned by this repository.
 *
 * Provenance: AI multi-view reconstruction (Meshy via Higgsfield) from four
 * 4K views of the prototype (front/back renders + generated left/right
 * profiles), 300k triangles, PBR material maps, enforced symmetry.
 * Approved by ENGAGE GLOBAL 2026-08-01 as the interactive representation.
 *
 * Known texture nits (accepted at ship time; swap the file to upgrade):
 * some rear-panel detail baked onto the chest, faint speckle noise, plain
 * strap webbing. Replacing this file upgrades every surface — no code
 * changes.
 */
export const GOBOT_MODEL_URL = '/assets/models/go-bot.glb';

/** Rigged variant (humanoid skeleton, standard mesh) — reserved for future animation. */
export const GOBOT_RIGGED_MODEL_URL =
	'https://d3u0tzju9qaucj.cloudfront.net/7d051b5a-7bfe-49fe-a484-24e7b3a9458a/d1fb2741-a1d5-4b2f-b1da-7825918abecb.glb';
