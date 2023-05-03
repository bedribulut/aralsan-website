"use client";
import Image from "next/image";
import Link from "next/link";

import image1 from "./photos/k1.JPG"
import image2 from "./photos/k2.JPG"
import image3 from "./photos/k3.JPG"
import image4 from "./photos/k4.JPG"
import image5 from "./photos/k5.JPG"
import image6 from "./photos/k6.JPG"
import image7 from "./photos/k7.JPG"
import image8 from "./photos/k8.JPG"

const images = [
  {
    path: image1
  },
  {
    path: image2
  },
  {
    path: image3
  },
  {
    path: image4
  },
  {
    path: image5
  },
  {
    path: image6
  },
  {
    path: image7
  },
  {
    path: image8
  },
]
function KonyaImageGallery() {
  return (
    <>
      <button className="mt-2 text-white rounded-xl block text-xl p-6 m-auto bg-blueBedri">
        <Link href="/projects">&lt;--geri dön</Link>
      </button>
      <div className="flex items-center mx-auto p-3 space-y-6 justify-center flex-wrap">
        {images.map((image) => (
          <Image src={image.path} width={900} height={700} className="rounded-2xl"/>
        ))}
      </div>
    </>
  )
}

export default KonyaImageGallery