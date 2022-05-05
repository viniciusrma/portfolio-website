import React from 'react'
import fs from 'fs'
import path from 'path'

import {
  NewBlogWrapper,
  BlogHeader,
  BlogIndexContainer
} from '../../styles/blogStyles'
import matter from 'gray-matter'
import Post from '../../components/Post'
import { sortByDate } from '../../utils/sorter'
import { Layout } from '../../layout/Layout'


export default function Blog({ posts }) {
  return (
    <Layout>
      <BlogIndexContainer>
        <BlogHeader>
          <div className="title_blog">
            <h1>Blog</h1>
          </div>
        </BlogHeader>
        <NewBlogWrapper>
          <section className="postsContainer">
            {posts.map((post, index) => (
              <Post post={post} key={index} className="post" />
            ))}
          </section>
        </NewBlogWrapper>
      </BlogIndexContainer>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join('_posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('_posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
