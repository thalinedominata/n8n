/**
 * The 3D Go-Bot asset.
 *
 * Provenance: AI multi-view reconstruction (Meshy via Higgsfield) from the
 * two canonical prototype renders, 4K-enhanced, with PBR texturing guided
 * to the brand palette. Approved by ENGAGE GLOBAL as the interactive
 * representation of the prototype.
 *
 * Currently served from the generation CDN. When the file is committed to
 * the repo, point this at `/assets/models/go-bot.glb` instead — nothing
 * else changes. A separate rigged variant exists for future animation
 * (see docs/roadmap.md).
 */
/** Hero display mesh: 100k triangles, PBR material maps (metallic/roughness/normal). */
export const GOBOT_MODEL_URL =
	'https://d3u0tzju9qaucj.cloudfront.net/7d051b5a-7bfe-49fe-a484-24e7b3a9458a/a823946b-4597-42bf-ac49-0e0be34404ea.glb';

/** Rigged variant (humanoid skeleton, standard mesh) — reserved for future animation. */
export const GOBOT_RIGGED_MODEL_URL =
	'https://d3u0tzju9qaucj.cloudfront.net/7d051b5a-7bfe-49fe-a484-24e7b3a9458a/d1fb2741-a1d5-4b2f-b1da-7825918abecb.glb';
