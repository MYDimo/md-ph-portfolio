import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ImageMasonry() {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            id
            relativePath
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allFile.edges.map(item => (
        <img key={item.node.id} src={`src/${item.node.relativePath}`} alt={item.node.relativePath}/>
      ))}
      <div>images here</div>
    </>
  )
}
