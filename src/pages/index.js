import React from "react"
import ImageMasonry from "../components/ImageMasonry"
import Layout from "../components/Layout"
import { useState } from "react";

export default function Home() {
  const [lightBox, setLightboxImg] = useState(false);

  const showLightbox = (image) => {
    setLightboxImg(image);
  }

  return (
    <Layout lightBox={lightBox}>
      <ImageMasonry showLightbox={showLightbox}
      />
    </Layout>
  )
}
