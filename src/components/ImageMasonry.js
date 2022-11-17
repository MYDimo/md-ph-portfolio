import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import '../styles/imageMasonryGallery.css'


export default function ImageMasonry() {
  const [lightBox, setLigthBoxImage] = useState(false);
  const data = useStaticQuery(graphql`
  query {
    bezbogPhotos: allFile {
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

  const lightBoxHandler= (image) => {
    console.log(image);
    setLigthBoxImage(image);
  }

  return (
    <>
    <div className="imageMasonryGallery">
      {data.bezbogPhotos.edges.map(image => (
        <div className="masonryImage" onClick={() => lightBoxHandler(image.node.childImageSharp.gatsbyImageData)} key={image.node.id}>
          <GatsbyImage 
            image={image.node.childImageSharp.gatsbyImageData}
            alt={image.node.relativePath}
          />
        </div>
      ))}
      <div>images here</div>
    </div>
      {lightBox &&
        <div className="lightBox">
          <GatsbyImage 
            image={lightBox}
            alt=""
          />
        </div>
      }
    </>
  )
}
