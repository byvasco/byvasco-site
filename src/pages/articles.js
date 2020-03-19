import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

export const pageQuery = graphql`
  query {
    allMarkdownRemark (
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

const Articles = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { totalCount: count } = data.allMarkdownRemark

  return (
    <Layout pageName="articles">
      <section class="articles">
        <div className="container grid">
          {
            count ?
              posts.map(({ node: post }) => (
                <article className="article-preview" key={post.id}>
                  <Link to={post.frontmatter.path} className="article-title body-large">{post.frontmatter.title}</Link>
                  <time className="article-title label">{post.frontmatter.date}</time>
                </article>
              ))
            :
              <p class="text-lighter">Nothing here yet!</p>
          }
        </div>
      </section>
    </Layout>
  )
}

export default Articles