import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ImageMasonry() {
  const data = useStaticQuery(graphql`
  query {
    bezbogPhotos: allFile {
        edges {
          node {
            id
            childImageSharp {
                gatsbyImageData(width: 600, quality: 100, formats: WEBP, tracedSVGOptions: {})  
            }
          }
        }
      }
    }
  `)

  console.log(data);

  return (
    <>
      {data.bezbogPhotos.edges.map(image => (
        <GatsbyImage key={image.node.id} image={image.node.childImageSharp.gatsbyImageData} alt={image.node.base}/>
      ))}
      <div>images here</div>
    </>
  )
}
