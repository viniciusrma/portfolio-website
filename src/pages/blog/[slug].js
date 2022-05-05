import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { PostWrapper } from '../../styles/blogStyles'
import { Layout } from '../../layout/Layout'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content
}) {
  return (
    <Layout>
      <PostWrapper>
        <Link href="/blog">
          <a className="btn btn-back">Go back</a>
        </Link>
        <div className="card card-page">
          <h1 className="post-title">{title}</h1>
          <div className="post-date">Posted on {date}</div>
          <div className="post-img">
            <img src={cover_image} alt=""></img>
          </div>

          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </PostWrapper>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('_posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('_posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: { frontmatter, slug, content }
  }
}
