import { Link } from 'react-router-dom'
import { posts } from '../data/blogs.js'
import Media from '../components/Media.jsx'
import Icon from '../components/Icon.jsx'
import './Blogs.css'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blogs() {
  const [featured, ...rest] = posts

  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Thoughts & Blogs</span>
          <h1>Writing & notes</h1>
          <p>
            Essays and short notes on engineering, learning, and whatever else I'm thinking about.
            These are placeholders for now.
          </p>
        </div>
      </header>

      <section className="section-pad">
        <div className="container">
          {/* Featured post */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="blog-featured">
              <div className="blog-featured-media">
                <Media media={featured.cover} label={featured.title} />
              </div>
              <div className="blog-featured-body">
                <span className="blog-badge">Latest</span>
                <div className="blog-meta">
                  <span>{formatDate(featured.date)}</span>
                  <span className="dot">·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="blog-tags">
                  {featured.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="blog-readmore">
                  Read article <Icon name="arrowRight" size={16} />
                </span>
              </div>
            </Link>
          )}

          {/* Grid of remaining posts */}
          <div className="blog-grid">
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card card">
                <div className="blog-card-media">
                  <Media media={post.cover} label={post.title} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span>{formatDate(post.date)}</span>
                    <span className="dot">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
