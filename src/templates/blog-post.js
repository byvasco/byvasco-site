import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query (
    $path: String!
  ) {
    markdownRemark (
      frontmatter: {
        path: {
          eq: $path
        }
      }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export default BlogPost