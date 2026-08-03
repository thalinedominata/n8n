/**
 * The 3D Go-Bot asset.
 *
 * Provenance: AI multi-view reconstruction (Meshy via Higgsfield) from
 * three clean prototype renders (front, back with straps, side profile),
 * 300k quad topology, PBR material maps, enforced symmetry. Textures
 * post-processed for the matte soft-touch finish: despeckled color maps
 * (edge-preserving median) and attenuated normal map so flat panels read
 * smooth like the reference renders. Measured surface grain: 4.6/4.0
 * (front/back) vs 5.2/4.9 on the previous mesh; reference photo is 3.7.
 *
 * Served from the ENGAGE media CDN (CORS-open); the `v` query pins the
 * cache to the current texture pass. The previous mesh remains in the
 * repo at /assets/models/go-bot.glb as a fallback.
 */
export const GOBOT_MODEL_URL =
	'https://d2ol7oe51mr4n9.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/14ca18f1-7bf0-42f4-9589-236ba3c59234.glb?v=2';

/** Rigged variant (humanoid skeleton, standard mesh) — reserved for future animation. */
export const GOBOT_RIGGED_MODEL_URL =
	'https://d3u0tzju9qaucj.cloudfront.net/7d051b5a-7bfe-49fe-a484-24e7b3a9458a/d1fb2741-a1d5-4b2f-b1da-7825918abecb.glb';
