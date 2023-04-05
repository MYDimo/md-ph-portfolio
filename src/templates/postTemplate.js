import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  console.log(data)
  const { mdx } = data
  const { frontmatter } = mdx
  return (
    <Layout>
      <div className="blogPostWrapper">
        <h1>{frontmatter.title}</h1>
        <div>Author: {frontmatter.author}</div>
        <div>Publish date: {frontmatter.date}</div>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        author
        date
      }
    }
  }
`
