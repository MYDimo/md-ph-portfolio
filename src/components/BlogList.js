import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function BlogList() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
  )
  return (
  <div className="postsWrapper">
      <ul>
        {allMarkdownRemark.edges.map((item, i) => (
          <li key={i}>
            <Link to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
  </div>
  )
}
