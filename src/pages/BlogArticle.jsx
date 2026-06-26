import { useParams, Link } from 'react-router-dom'
import { getPost } from '../data/blogs.js'
import clubs from '../data/clubs.js'
import Media from '../components/Media.jsx'
import Icon from '../components/Icon.jsx'
import './BlogArticle.css'

function prettify(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogArticle() {
  const { slug } = useParams()

  // 1) A real blog post, 2) a club write-up, or 3) a generic placeholder.
  const post = getPost(slug)
  const club = clubs.find((c) => c.slug === slug)

  const article = post
    ? {
        category: 'Article',
        title: post.title,
        meta: `${formatDate(post.date)} · ${post.readTime}`,
        tags: post.tags,
        cover: post.cover,
        body: post.body,
        backTo: '/blog',
        backLabel: 'All posts',
      }
    : club
      ? {
          category: 'Club Activity',
          title: club.title,
          meta: 'Write-up coming soon',
          tags: club.tags,
          cover: club.media,
          body: [
            club.description,
            'This is a placeholder article for this club activity. Replace it with the full story — what the club is about, what you did, and a few highlights worth remembering.',
          ],
          backTo: '/clubs',
          backLabel: 'All clubs',
        }
      : {
          category: 'Article',
          title: prettify(slug),
          meta: 'Coming soon',
          tags: [],
          cover: { type: 'image' },
          body: [
            'This article has not been written yet. Check back soon!',
          ],
          backTo: '/blog',
          backLabel: 'All posts',
        }

  return (
    <article className="article">
      <div className="container article-narrow">
        <Link to={article.backTo} className="article-back">
          <Icon name="arrowRight" size={16} className="flip" /> {article.backLabel}
        </Link>

        <span className="eyebrow">{article.category}</span>
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">{article.meta}</div>

        {article.tags?.length > 0 && (
          <div className="article-tags">
            {article.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="container article-narrow">
        <div className="article-cover">
          <Media media={article.cover} label={article.title} />
        </div>

        <div className="article-body">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="article-foot">
          <Link to={article.backTo} className="btn btn-outline">
            <Icon name="arrowRight" size={16} className="flip" /> {article.backLabel}
          </Link>
        </div>
      </div>
    </article>
  )
}
