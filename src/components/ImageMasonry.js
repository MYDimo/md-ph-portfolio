import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/imageMasonryGallery.css"

export default function ImageMasonry({showLightbox}) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     bezbogPhotos: allFile(
  //       filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "bezbog"}}
  //     ) {
  //       edges {
  //         node {
  //           id
  //           relativePath
  //           childImageSharp {
  //             gatsbyImageData(quality: 100, formats: WEBP, tracedSVGOptions: {})
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const data2 = useStaticQuery(graphql`
    query {
      allContentfulAlbum(filter: {nameOfAlbum: {eq: "Bezbog"}}) {
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
  `);
  console.log(data2);
  return (
    // <>
    //   <div className="imageMasonryGallery">
    //     {data.bezbogPhotos.edges.map(image => (
    //       <div
    //         className="masonryImage"
    //         onClick={() =>
    //           showLightbox(image.node.childImageSharp.gatsbyImageData)
    //         }
    //         key={image.node.id}
    //       >
    //         <GatsbyImage
    //           image={image.node.childImageSharp.gatsbyImageData}
    //           alt={image.node.relativePath}
    //         />
    //       </div>
    //     ))}
    //     <div>images here</div>
    //   </div>
    // </>
    // <>
    <>
    <div className="imageMasonryGallery">
      {data2.allContentfulAlbum.edges[0].node.album.map(image => (
        <div
          className="masonryImage"
          onClick={() =>
            showLightbox(image.gatsbyImageData)
          }
          key={image.id}
        >
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.id}
          />
        </div>
      ))}
      <div>images here</div>
    </div>
  </>
  )
}
