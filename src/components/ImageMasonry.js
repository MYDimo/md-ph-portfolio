import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/imageMasonryGallery.css"

export default function ImageMasonry({showLightbox}) {
  const data = useStaticQuery(graphql`
    query {
      bezbogPhotos: allFile(
        filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "bezbog"}}
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              gatsbyImageData(quality: 100, formats: WEBP, tracedSVGOptions: {})
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="imageMasonryGallery">
        {data.bezbogPhotos.edges.map(image => (
          <div
            className="masonryImage"
            onClick={() =>
              showLightbox(image.node.childImageSharp.gatsbyImageData)
            }
            key={image.node.id}
          >
            <GatsbyImage
              image={image.node.childImageSharp.gatsbyImageData}
              alt={image.node.relativePath}
            />
          </div>
        ))}
        <div>images here</div>
      </div>
    </>
  )
}
