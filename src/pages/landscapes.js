import React, { useEffect } from "react"
import ImageMasonry from "../components/ImageMasonry"
import Layout from "../components/Layout"

export default function Landscapes() {
    // const [lightBox, setLightboxImg] = useState(false);
    // const [scrollPosition, setScrollPosition] = useState(0);
  
    // useEffect(() => {
    //   if (scrollPosition !== 0) {
    //     window.scrollTo(0, scrollPosition);
    //   }
    // })
  
    // const showLightbox = (image) => {
    //   setScrollPosition(window.pageYOffset);
    //   setLightboxImg(image);
    // }
  
    // const hideLightbox = () => {
    //   setLightboxImg(false);
    // }
  
  
    // return (
    //   <Layout lightBox={lightBox} hideLightbox={hideLightbox}>
    //     <ImageMasonry showLightbox={showLightbox} albumName={"Livigno"}
    //     />
    //   </Layout>
    // )
    return (
      <Layout>
        <ImageMasonry albumName={"Livigno"}
        />
      </Layout>
    )
}
