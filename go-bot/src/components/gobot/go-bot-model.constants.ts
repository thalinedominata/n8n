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
 * Vendored in the repo (current texture pass); the previous mesh lives
 * in git history.
 */
export const GOBOT_MODEL_URL = '/assets/models/go-bot.glb?v=2';
