# Talkeasy — Brand Context for Landing Page Update

## What changed
The product formerly known as **VoiceLink** has been renamed to **Talkeasy**. This doc gives you everything needed to update the landing page copy, styling, and assets to reflect the new brand.

Find/replace across the codebase: `VoiceLink` → `Talkeasy` (check casing variants: `voicelink`, `VOICELINK`, `voice-link`, `voice_link` in slugs, env vars, meta tags, package names, etc.)

---

## Product summary

Talkeasy is a voice-first, open-source AI assistant for elderly and digitally-excluded users. It helps people navigate hand-held devices without needing written-English literacy or a reliable internet connection. Berlin-based.

**One-line pitch:** Talkeasy helps anyone — regardless of age, literacy, or tech experience — use their phone with just their voice.

**Origin story (useful for hero copy):** Talkeasy is built for the founder's grandmother, Emaye (Fantaye), 76. She moved from Ethiopia to Alexandria, Virginia, 19 years ago to be near her son, and has family all over the world. She doesn't speak or read English, but she's capable and independent: she learned the bus routes and built a life in a new country, and she loves WhatsApp. Her phone is what defeats her. One wrong tap mutes it and she can't call her children. She dismisses her medication reminder because she can't read it fast enough. A YouTube update hides her favourite show, and she waits alone until a grandchild can come and fix it. The device meant to connect her isolates her. The problem is the interface, not her ability: technology was designed for people like the engineers who built it. Talkeasy asks "what if all she had to do was speak?" — "She just wants to call her daughter." The full first-person version is on the About page (`src/pages/About.jsx`, Origin Story section). Source: the founder's pitch decks.

---

## Mission / Vision / Values

**Vision:** A world where senior citizens and the digitally illiterate have ease of navigation to the full capabilities of hand-held devices.

**Mission:**
- Help users navigate technology without assuming written English literacy (language inclusion)
- Help users navigate technology without needing an internet connection (reliable, offline-first)

**Core values:**
- **Inclusion** — accessible regardless of language, literacy, or digital experience
- **Empowerment** — gives users agency over their own digital lives
- **Simplicity** — reduces complexity, never adds it
- **Privacy** — sensitive data stays on-device
- **Open Source** — built in public, contributes back to the community

**Guiding product principles:**
- Does not add new functionality to existing device features
- Makes it easier to navigate modern technology through existing accessibility tools, empowered by AI

**Target users:** Senior citizens (in care centers, living alone, or with family), digitally illiterate persons.
**Secondary stakeholders:** Care providers, family members.

---

## Brand voice & tone
Helpful, warm, friendly, human. Not techy, not corporate, not sci-fi. Copy should read like a kind person explaining something patiently — never jargon-heavy, never condescending. Short sentences. Plain words. Speak to the user's independence and dignity, not their limitations.

---

## Visual identity

**Logo:** Speech bubble + sound-wave icon, paired with the "Talkeasy" wordmark.
- Editable Canva source: https://www.canva.com/d/FjSyYiD3UgzGeef
- Export as transparent PNG/SVG from Canva before implementing (Share → Download)

**Canva Brand Kit:** "talkeasy" (kit id `kAHOIPvPsLY`) — colors, fonts, and logo are stored there as the source of truth.

### Color palette
| Role | Hex | Usage |
|---|---|---|
| Primary — Coral | `#E2634B` | Primary buttons, key accents, links |
| Secondary — Orange | `#F2965C` | Secondary accents, hover states, icons |
| Accent — Peach | `#F8DBAB` | Subtle highlights, backgrounds for callouts |
| Neutral — Warm Cream | `#F5E6D0` | Page background |
| Text — Slate Teal | `#4E6B69` | Body text, headings, wordmark color |

Avoid harsh neon, cold blues, or high-contrast "tech" palettes — the whole point is to feel warm and approachable, especially to an older, less tech-confident audience.

### Typography
- **Headings / wordmark style:** Poppins (bold) — rounded, friendly, highly legible
- **Body copy:** Nunito — rounded terminals to match the friendly tone
- Font sizes should skew larger than typical SaaS landing pages — this audience benefits from higher legibility (consider a baseline body size of 18–20px instead of 16px)

### Design principles for the page
- Clean, uncluttered layouts — generous whitespace, no visual noise
- Rounded corners on UI elements (buttons, cards, images) to match the soft/friendly logo language
- High color contrast for text readability (important for older users / accessibility)
- No sharp/angular or "sci-fi AI" visual motifs — avoid circuit-board patterns, glowing neon gradients, robot iconography
- Speech-bubble and sound-wave motifs can be reused as supporting illustration elements throughout the page

---

## Suggested landing page copy anchors
(For Claude Code to use as a starting point — not final copy)

- **Hero headline direction:** something around ease + connection, e.g. "Technology that finally talks your language" or "Just talk. Talkeasy does the rest."
- **Subhead:** should mention voice-first, no internet required, no reading required
- **Sections to include:** Mission/why we exist, how it works (voice-first demo), privacy/on-device promise, open-source note, testimonials/impact goal (KPI: happy user testimonials on social media), call to action (early access / donate / accelerator-facing CTA depending on current page goal)

---

## Accessibility note
This is a product *for* accessibility — the landing page itself should model that: large tap targets, high contrast text, readable font sizes, alt text on all images, and avoid relying on color alone to convey meaning.