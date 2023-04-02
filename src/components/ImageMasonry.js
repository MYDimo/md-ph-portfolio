import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/imageMasonryGallery.css"

export default function ImageMasonry({ albumName }) {
  const [lightBox, setLightboxImg] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  // const [lightBoxIdx, setIdx] = useState(null)

  let lightBoxIdx = useRef(null)

  useEffect(() => {
    if (scrollPosition !== 0) {
      window.scrollTo(0, scrollPosition)
    }
  })

  const showLightbox = (image, index) => {
    setScrollPosition(window.pageYOffset)
    setLightboxImg(image)
    lightBoxIdx.current = index
  }

  const hideLightbox = () => {
    setLightboxImg(false)
    lightBoxIdx.current = null
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true)
  }, [])

  const handleKeyDown = event => {
    if (lightBoxIdx.current !== null) {
      let gatsbyObjLeft, gatsbyObjRight;
      if (lightBoxIdx.current == 0) {
        gatsbyObjLeft = newDataSet[0].node.album[newDataSet[0].node.album.length - 1]
        gatsbyObjRight = newDataSet[0].node.album[lightBoxIdx.current + 1]
      } else if (lightBoxIdx.current == newDataSet[0].node.album.length - 1) {
        gatsbyObjLeft = newDataSet[0].node.album[lightBoxIdx.current - 1]
        gatsbyObjRight = newDataSet[0].node.album[0]
      } else {
        gatsbyObjLeft = newDataSet[0].node.album[lightBoxIdx.current - 1]
        gatsbyObjRight = newDataSet[0].node.album[lightBoxIdx.current + 1]
      }
      if (event.key == "ArrowLeft") {
        setLightboxImg(gatsbyObjLeft.gatsbyImageData)
        if (lightBoxIdx.current == 0) {
          lightBoxIdx.current = newDataSet[0].node.album.length - 1
        } else {
          lightBoxIdx.current--
        }
      } else if (event.key == "ArrowRight") {
        setLightboxImg(gatsbyObjRight.gatsbyImageData)
        if (lightBoxIdx.current == newDataSet[0].node.album.length - 1) {
          lightBoxIdx.current = 0
        } else {
          lightBoxIdx.current++
        }
      } else {
        hideLightbox()
      }
    }
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
        <div
          tabIndex={-1}
          className={`lightBoxBg ${lightBox ? "noScroll" : ""}`}
          onKeyDown={() => handleKeyDown}
        >
          <div className="lightBox" onClick={() => hideLightbox()}>
            <GatsbyImage image={lightBox} alt={``} className="lightBoxImg" />
          </div>
        </div>
      ) : (
        <div className="imageMasonryGallery">
          {newDataSet[0].node.album.map((image, index) => (
            <div
              className="masonryImage"
              onClick={() => showLightbox(image.gatsbyImageData, index)}
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
