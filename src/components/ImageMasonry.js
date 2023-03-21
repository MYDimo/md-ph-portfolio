import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/imageMasonryGallery.css"

export default function ImageMasonry({ showLightbox, albumName }) {

  const data2 = useStaticQuery(graphql`
    query {
      allContentfulAlbum {
        edges {
          node {
            id
            nameOfAlbum
            album {
              gatsbyImageData
              id
            }
          }
        }
      }
    }
  `)
  let newDataSet = data2.allContentfulAlbum.edges.filter(x => x.node.nameOfAlbum == albumName)
  return (
    <>
      <div className="imageMasonryGallery">
        {newDataSet[0].node.album.map(image => (
          <div
            className="masonryImage"
            onClick={() => showLightbox(image.gatsbyImageData)}
            key={image.id}
          >
            <GatsbyImage image={image.gatsbyImageData} alt={image.id} />
          </div>
        ))}
        <div>images here</div>
      </div>
    </>
  )
}
