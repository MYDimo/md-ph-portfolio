import Layout from "../components/Layout"
import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function Template({ data }) {
  console.log(data)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blogPostWrapper">
        <h1>{frontmatter.title}</h1>
        <div>Author: {frontmatter.author}</div>
        <div>Publish date: {frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
