# Render Recipes

Reusable prompts for the Go-Bot concept renders. Each recipe records the exact
engine settings and prompt text that produced a published asset, so a render can
be reproduced or extended without rediscovering the settings.

Renders are **concept work**. Anything featuring a real person or licensed
character ships with a "shown as a concept for partnerships" line in its
`robo-swag.ts` description.

## Shared settings

Every lineup below uses the same engine and the same reference element.

| | |
| --- | --- |
| Model | `nano_banana_2` (resolves server-side to `nano_banana_flash`) |
| Aspect ratio | `21:9` |
| Resolution | `2k` — renders at 3168 × 1344 |
| Reference element | `gobot-real` · `b96b54ee-658b-425d-ad79-db58530e4c35` |

The reference element is embedded by wrapping its id in triple angle brackets
inside the prompt text. The backend swaps in the image and rewrites the token to
`@gobot-real`.

> **On the model name:** `nano_banana_flash` was retired from the public model
> catalog and passing it directly now errors. `nano_banana_2` is the same
> engine — submitted jobs come back stamped `nano_banana_flash`. Use
> `nano_banana_2` and expect the old name in the job record.

## The load-bearing paragraphs

Two blocks do most of the work and should be carried into any new lineup
unchanged:

- **PROPORTIONS** — without it the figure drifts toward a tall humanoid android
  or a bloated barrel. It pins the build to the reference in both directions:
  short and small, but trim and finely articulated.
- **THE BACKPACK STRAPS** — the straps are the product tell (he *is* a
  backpack), and they vanish from front views unless the prompt insists their
  padded edges break the silhouette.

## Wardrobe lineup

The celebrity wardrobe from `src/data/robo-swag.ts`, ten across: the house
colorway anchors the row, followed by all nine personas. Straps worn over the
outfits.

```text
Studio product photography lineup: ten <<<b96b54ee-658b-425d-ad79-db58530e4c35>>> robots standing in one straight row facing the camera head-on, evenly spaced with clear gaps so no robot overlaps another, full body, seamless light grey backdrop, soft even studio lighting, gentle contact shadows.

PROPORTIONS - copy the reference exactly. A small stout toy-like collectible robot figure, roughly three and a half heads tall. The rounded dome head is LARGE, about thirty percent of the entire body height. Short compact torso, SHORT stubby ball-jointed arms and legs. NOT a humanoid android, NOT adult human proportions, NOT tall or long-legged or slender. Equally NOT fat, NOT bloated, NOT a puffy barrel - trim and finely articulated like the reference, just short and small. Every robot in the row is the same height and the same build - the clothing changes, the body never does.

THE BACKPACK STRAPS MUST BE CLEARLY VISIBLE FROM THE FRONT ON EVERY ROBOT, WORN OVER THE OUTFIT: two THICK, WIDE, PADDED backpack straps of dense dark webbing with bright orange contrast stitching along both long edges and a squared orange adjuster buckle. The straps are mounted on the robot's BACK and worn over whatever garment, jersey, coat, robe or armor that robot is wearing - never underneath it. They are substantial enough that from this front view their padded outer edges stand clearly out past the silhouette on both sides - visible rising over the tops of both shoulders and running down along the outer sides of the torso, with the orange stitching and the orange buckles readable at the sides. They are NOT thin cables or cords. The straps stay on the back and around the sides only - NO strap crosses the chest, so each outfit's chest detail stays fully readable.

FACE - identical on all ten: a glossy black visor face panel with two glowing mango-orange oval eyes.

FOOTWEAR - every robot wears mango-orange footwear in the form its outfit calls for: low slip-ons, sneakers, cleats or boots, always solid matte mango-orange with a black treaded sole, covering only the foot. The ankle and lower leg above the shoe stay body-colored or covered by the outfit. Never tall rain boots, never chrome or metallic shoes.

THE TEN OUTFITS, left to right in this exact order:

1. HOUSE COLORWAY - no costume. Bare satin black shell, mango-orange fingertips, nothing but the straps.
2. THE SUIT - powder-blue tailored two-piece suit over a cream polo, mango-orange loafers.
3. THE COAT - oversized cream faux-fur coat worn open over a white tank, silver cross chain.
4. THE FIT - brown fleece sweatshirt, tan cargo trousers, cream bucket hat, thick gold rope chain.
5. THE VOICE - royal-blue wool varsity jacket with double white shoulder stripes, honey-blonde dreadlocks under a black GO-BOT snapback, black denim, and his signature THE VOICE pendant on layered cuban links: a large iced-out rectangular plaque, pave-diamond face with a raised diamond border, raised block letters spelling THE over VOICE fully encrusted in diamonds, hung from a boxy pave bail.
6. MO-BOT - pristine white kandura with a knotted collar tassel, white ghutra draped over the shoulders with a black double-coiled agal, and a sheer black bisht with gold-embroidered trim worn open.
7. THE KING - royal-blue basketball jersey reading KING-BOT 23 with red-and-white stitched trim, matching striped shorts, white compression sleeve on one arm, a leather basketball on the hip.
8. BRADY BOT - white shell, navy american-football jersey reading BRADY-BOT 12 with silver shoulder yokes and red piping, black long-sleeve base layer, silver game pants, a silver helmet with a red facemask carried under one arm.
9. SPEED-BOT-7 - wild crown of black freeform twists, crimson soccer kit with gold trim and a large number 7 on the chest, green shorts with a gold 7, white socks, one foot resting on a match ball.
10. IRON-BOT - rounded matte-crimson and polished-gold armor shaped to his own shell language, a red-and-gold helmet framing the black visor, and a glowing mango-orange mark on the chest plate.

Photorealistic industrial design product render, commercial catalog photography, sharp detail.
```

### Review checklist

At ten across, each figure is roughly 300px wide. Check these before publishing:

- **Straps over draped and armored outfits** — the faux-fur coat, the bisht, and
  Iron-Bot's armor are where "worn over, never underneath" is most likely to
  read as forced.
- **Jersey lettering** — `KING-BOT 23` and `BRADY-BOT 12` are near the limit of
  what the engine renders cleanly at this scale.
- **Proportion drift** across ten distinct costumes.

### Deliberate simplification

The Bad Bunny drops and The Voice each carry a live equalizer visor in their
`robo-swag.ts` entries. The lineup gives all ten the standard mango-orange oval
eyes instead: at lineup scale the equalizer detail does not resolve, and varying
it breaks the row's read. Use the individual persona renders when the visor
treatment matters.

## Color lineup

The same scaffold with shell colors in place of costumes — satin black, white,
rust red, cobalt, orange, violet, champagne gold, sunflower, chrome, emerald,
left to right. It keeps two clauses the wardrobe lineup drops, because there is
no costume to conflict with them:

- Chest and stomach stay bare and unbroken — no emblem, lens, logo, or text.
- Every bot wears flat matte mango-orange shoes, **including** the chrome and
  gold ones, which otherwise render metallic footwear.
