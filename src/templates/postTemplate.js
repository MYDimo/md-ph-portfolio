import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ImageMasonry from "../components/ImageMasonry"
import "../styles/blogPost.css"

// const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  console.log(data)
  const { contentfulBlogPost } = data
  console.log(contentfulBlogPost.title)
  return (
    <Layout>
      <div className="blogPostWrapper">
        <div className="blogPostCopy">
          <div
            dangerouslySetInnerHTML={{
              __html: contentfulBlogPost.postBody.childMarkdownRemark.html,
            }}
          />
        </div>
        {contentfulBlogPost.albumName && (
          <ImageMasonry albumName={contentfulBlogPost.albumName} />
        )}
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query ($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         slug
//         title
//         author
//         date
//         albumName
//       }
//     }
//   }
// `

export const query = graphql`
  query ($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      dateOfCreation
      id
      slug
      abstract {
        abstract
      }
      postBody {
        childMarkdownRemark {
          html
        }
      }
      albumName
    }
  }
`
