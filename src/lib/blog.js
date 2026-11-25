import { marked } from 'marked'

// Every Markdown file in src/content/blog becomes a post.
// The file name (without .md) is the URL slug: /blog/<slug>
const files = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Reads the simple `key: value` block between the two `---` lines at the top of a post.
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (/^(['"]).*\1$/.test(value)) value = value.slice(1, -1)
    data[key] = value
  }
  return { data, body: match[2] }
}

function readingMinutes(text) {
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

const posts = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const { data, body } = parseFrontmatter(raw)
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      author: data.author || 'The Talkeasy team',
      excerpt: data.excerpt || '',
      cover: data.cover || '',
      coverAlt: data.coverAlt || '',
      draft: data.draft === 'true',
      minutes: readingMinutes(body),
      html: marked.parse(body),
    }
  })
  // Drafts show up in `yarn dev` and on Vercel preview deployments, never on the live site.
  .filter((post) => import.meta.env.DEV || __SHOW_DRAFTS__ || !post.draft)
  .sort((a, b) => b.date.localeCompare(a.date))

export function getAllPosts() {
  return posts
}

export function getPost(slug) {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(iso) {
  if (!iso) return ''
  const date = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
