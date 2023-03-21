import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/imageMasonryGallery.css"

export default function ImageMasonry({ albumName }) {
  const [lightBox, setLightboxImg] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (scrollPosition !== 0) {
      window.scrollTo(0, scrollPosition)
    }
  })

  const showLightbox = image => {
    setScrollPosition(window.pageYOffset)
    setLightboxImg(image)
  }

  const hideLightbox = () => {
    setLightboxImg(false)
  }

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
  let newDataSet = data2.allContentfulAlbum.edges.filter(
    x => x.node.nameOfAlbum == albumName
  )
  return (
    <>
      {lightBox ? (
        <div className={`lightBoxBg ${lightBox ? "noScroll" : ""}`}>
          <div className="lightBox" onClick={() => hideLightbox()}>
            <GatsbyImage image={lightBox} alt="" className="lightBoxImg" />
          </div>
        </div>
      ) : (
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
    )}
    </>
  )
}
