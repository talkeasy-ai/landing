import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getPost, formatDate } from '../lib/blog'

function BackLink() {
  return (
    <Link
      to="/blog"
      className="inline-flex items-center gap-2 text-lg font-semibold text-teal underline underline-offset-4 hover:text-coral-dark transition py-2"
    >
      <span aria-hidden="true">←</span> All posts
    </Link>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  useEffect(() => {
    document.title = post ? `${post.title} — Talkeasy` : 'Post not found — Talkeasy'
    window.scrollTo(0, 0)
  }, [post])

  if (!post) {
    return (
      <>
        <Header />
        <main className="py-24 bg-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold font-heading text-teal mb-4">We couldn't find that post</h1>
            <p className="text-lg text-teal mb-6">It may have moved, or the link may have a typo.</p>
            <BackLink />
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <article>
          <header className="py-16 sm:py-20 bg-cream">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <BackLink />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-heading text-teal leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-teal">
                {post.author}
                <span aria-hidden="true"> · </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true"> · </span>
                {post.minutes} min read
              </p>
            </div>
          </header>

          {post.cover && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
              <img src={post.cover} alt={post.coverAlt} className="w-full rounded-2xl shadow-sm" />
            </div>
          )}

          <div className="py-12 sm:py-16 bg-white">
            <div
              className="blog-prose max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </article>

        <section className="py-12 bg-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <BackLink />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
