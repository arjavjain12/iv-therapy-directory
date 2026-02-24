/**
 * generate-images.mjs
 *
 * Generates all site images using Replicate's bytedance/seedream-5-lite model.
 * Saves to public/images/
 *
 * Usage: REPLICATE_API_TOKEN=r8_... node scripts/generate-images.mjs
 */

import Replicate from 'replicate'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'public', 'images')

await mkdir(OUT_DIR, { recursive: true })

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

const STYLE = 'professional medical photography, photorealistic, high quality, soft natural lighting, clean modern aesthetic, sky blue and white tones, luxury wellness'

const IMAGES = [
  // ── Hero / General ──────────────────────────────────────────────────────────
  {
    file: 'hero-homepage.png',
    prompt: `Person relaxing comfortably in a modern IV therapy lounge chair, wellness clinic interior, soft blue ambient lighting, clean medical aesthetic, calm and luxurious atmosphere, IV drip in background, ${STYLE}`,
    aspect_ratio: '16:9',
  },
  {
    file: 'hero-city.png',
    prompt: `Modern IV therapy clinic reception with sleek blue and white decor, comfortable lounge chairs, professional medical setting, inviting and serene atmosphere, ${STYLE}`,
    aspect_ratio: '16:9',
  },
  {
    file: 'hero-mobile.png',
    prompt: `Professional nurse in scrubs arriving at a modern home with medical bag, mobile healthcare concept, friendly smile, bright modern interior, ${STYLE}`,
    aspect_ratio: '16:9',
  },

  // ── Category pages ──────────────────────────────────────────────────────────
  {
    file: 'category-hangover.png',
    prompt: `Person looking refreshed and revitalized, bright morning hotel room, feeling energetic after recovery, wellness concept, soft morning light, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-athletic.png',
    prompt: `Athletic person relaxing and recovering after exercise, sports recovery concept, active lifestyle, professional wellness setting, post-workout relaxation, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-immune.png',
    prompt: `Person looking vibrant and healthy, strong immunity concept, natural supplements and fresh citrus fruits, bright natural lighting, wellness lifestyle, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-antiaging.png',
    prompt: `Elegant woman with radiant glowing skin, anti-aging wellness concept, luxury spa ambiance, serene and sophisticated, beauty and vitality, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-beauty.png',
    prompt: `Close-up of person with luminous glowing skin, beauty wellness concept, soft diffused lighting, radiant complexion, luxury beauty treatment, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-hydration.png',
    prompt: `Crystal clear water with ice, hydration concept, refreshing and clean aesthetic, blue tones, wellness and vitality, pure hydration, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-mobile.png',
    prompt: `Comfortable home setting with a person relaxing on a couch receiving wellness treatment, mobile service concept, modern living room, convenient healthcare, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-coldflu.png',
    prompt: `Person wrapped in a cozy blanket with hot tea, cold and flu recovery concept, warm and comforting atmosphere, getting better concept, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-weightloss.png',
    prompt: `Active healthy lifestyle concept, person in athletic wear feeling energetic, metabolism and wellness, bright sunny outdoors, vitality and health, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-migraine.png',
    prompt: `Person experiencing relief from headache, calm serene expression, migraine relief concept, soft dim soothing lighting, peaceful relaxation, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'category-energy.png',
    prompt: `Energetic person stretching arms wide in bright sunlight, energy and vitality concept, feeling revitalized and alive, outdoor morning light, ${STYLE}`,
    aspect_ratio: '3:2',
  },

  // ── Drip type pages ─────────────────────────────────────────────────────────
  {
    file: 'drip-hydration.png',
    prompt: `Crystal clear saline IV bag with water droplets, hydration concept, clinical yet beautiful, blue tones, clean medical aesthetic, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-myers.png',
    prompt: `Array of colorful vitamin supplements and minerals, Myers cocktail concept, vitamins B12 magnesium vitamin C, beautiful medical flat lay, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-nad.png',
    prompt: `Glowing DNA double helix with cellular energy concept, NAD+ longevity and anti-aging, futuristic medical science visualization, blue bioluminescent tones, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-vitaminc.png',
    prompt: `Vibrant orange slices and citrus fruits with vitamin C concept, immune boost, colorful and fresh, high-dose vitamin C antioxidant concept, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-immunity.png',
    prompt: `Shield concept with glowing immune cells, immunity protection visualization, blue and white medical aesthetic, protective health concept, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-hangover.png',
    prompt: `Person looking refreshed drinking water, hangover recovery concept, morning light, feeling better and revitalized, clean and bright atmosphere, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-beauty.png',
    prompt: `Glutathione serum concept, glowing skin beauty treatment, luxury beauty products, radiant skin close-up, collagen and antioxidant concept, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-athletic.png',
    prompt: `Athlete in motion, sports performance and recovery, dynamic energy concept, professional athlete training, vitality and strength, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-b12.png',
    prompt: `Red blood cells and neural energy concept, vitamin B12 brain and nerve health, vibrant red and blue medical visualization, energy metabolism concept, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-vitamind.png',
    prompt: `Golden sunlight streaming through a window, vitamin D sunshine concept, warm golden rays, wellness and mood elevation, natural light therapy, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-ozone.png',
    prompt: `Blue oxygen molecules and cellular regeneration concept, ozone therapy visualization, clean oxygen-rich atmosphere, medical science aesthetic, ${STYLE}`,
    aspect_ratio: '3:2',
  },
  {
    file: 'drip-detox.png',
    prompt: `Green detox concept with fresh leafy greens and liver cleanse imagery, detoxification wellness, natural and clean aesthetic, glutathione concept, ${STYLE}`,
    aspect_ratio: '3:2',
  },

  // ── Content pages ────────────────────────────────────────────────────────────
  {
    file: 'content-benefits.png',
    prompt: `Person feeling energetic and healthy after wellness treatment, vitality and wellbeing concept, bright and positive lifestyle, IV therapy benefits, ${STYLE}`,
    aspect_ratio: '16:9',
  },
  {
    file: 'content-cost.png',
    prompt: `Clean medical pricing concept, wellness investment, calculator and health symbols, transparent healthcare pricing, professional medical aesthetic, ${STYLE}`,
    aspect_ratio: '16:9',
  },
  {
    file: 'content-howlong.png',
    prompt: `Person comfortably relaxing in wellness chair with tablet, reading during treatment, peaceful 45 minutes session concept, cozy clinic atmosphere, ${STYLE}`,
    aspect_ratio: '16:9',
  },
  {
    file: 'content-safe.png',
    prompt: `Licensed nurse in professional scrubs preparing medical treatment with care, safety and professionalism, sterile medical environment, trust and expertise, ${STYLE}`,
    aspect_ratio: '16:9',
  },
]

async function generateImage(item) {
  const outPath = path.join(OUT_DIR, item.file)
  if (existsSync(outPath)) {
    console.log(`⏭️  Skipping ${item.file} (already exists)`)
    return
  }

  console.log(`🎨  Generating ${item.file}…`)
  try {
    const output = await replicate.run('bytedance/seedream-5-lite', {
      input: {
        prompt: item.prompt,
        size: '2K',
        aspect_ratio: item.aspect_ratio || '3:2',
        output_format: 'png',
      },
    })

    const url = Array.isArray(output) ? output[0]?.url?.() ?? output[0] : output?.url?.() ?? output
    const urlStr = typeof url === 'string' ? url : url.toString()

    const res = await fetch(urlStr)
    const buffer = Buffer.from(await res.arrayBuffer())
    await writeFile(outPath, buffer)
    console.log(`✅  Saved ${item.file} (${Math.round(buffer.length / 1024)}KB)`)
  } catch (err) {
    console.error(`❌  Failed ${item.file}: ${err.message}`)
  }
}

console.log(`🚀  Generating ${IMAGES.length} images with Seedream 5 Lite…\n`)
for (const item of IMAGES) {
  await generateImage(item)
}
console.log(`\n🎉  Done! Images saved to public/images/`)
