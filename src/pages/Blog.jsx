import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getAllPosts, formatDate } from '../lib/blog'

export default function Blog() {
  const posts = getAllPosts()

  useEffect(() => {
    document.title = 'Blog — Talkeasy'
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold font-heading text-teal mb-4">Blog</h1>
            <p className="text-xl sm:text-2xl text-teal leading-relaxed">
              Stories, updates and lessons from building Talkeasy. Written in plain words, for everyone.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <p className="text-lg text-teal">No posts yet. Check back soon.</p>
            ) : (
              <ul className="space-y-8">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <article className="group relative bg-cream rounded-2xl overflow-hidden border border-cream hover:border-orange focus-within:ring-4 focus-within:ring-coral/40 transition">
                      {post.cover && (
                        <img
                          src={post.cover}
                          alt={post.coverAlt}
                          className="w-full h-56 object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="p-6 sm:p-8">
                        <p className="text-base text-teal mb-2">
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                          <span aria-hidden="true"> · </span>
                          {post.minutes} min read
                          {post.draft && (
                            <span className="ml-3 px-2 py-0.5 rounded-full bg-peach text-teal-dark text-sm font-semibold">
                              Draft
                            </span>
                          )}
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-teal mb-3">
                          <Link
                            to={`/blog/${post.slug}`}
                            className="outline-none after:absolute after:inset-0 group-hover:text-coral-dark"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        {post.excerpt && (
                          <p className="text-lg text-teal leading-relaxed mb-4">{post.excerpt}</p>
                        )}
                        <span className="inline-flex items-center gap-2 text-lg font-semibold text-coral-dark underline underline-offset-4">
                          Read the story <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
