"use client";
import Image from "next/image";
import Link from "next/link";

import image1 from "./photos/k1.jpg"
import image2 from "./photos/k2.jpg"
import image3 from "./photos/k3.jpg"
import image4 from "./photos/k4.jpg"
import image5 from "./photos/k5.jpg"
import image6 from "./photos/k6.jpg"
import image7 from "./photos/k7.jpg"
import image8 from "./photos/k8.jpg"
import image9 from "./photos/k9.jpg"
import image10 from "./photos/k10.jpg"
import image11 from "./photos/k11.jpg"
import image12 from "./photos/k12.jpg"
import image13 from "./photos/k13.jpg"
import image14 from "./photos/k14.jpg"
import image15 from "./photos/k15.jpg"
import image16 from "./photos/k16.jpg"
import image18 from "./photos/k18.jpg"
import image19 from "./photos/k19.jpg"
import image20 from "./photos/k20.jpg"
import image21 from "./photos/k21.jpg"
import image22 from "./photos/k22.jpg"
import image23 from "./photos/k23.jpg"
import image24 from "./photos/k24.jpg"
import image26 from "./photos/k26.jpg"
import image27 from "./photos/k27.jpg"
import image28 from "./photos/k28.jpg"
import image29 from "./photos/k29.jpg"
import image30 from "./photos/k30.jpg"

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
  {
    path: image9
  },
  {
    path: image10
  },
  {
    path: image11
  },
  {
    path: image12
  },
  {
    path: image13
  },
  {
    path: image14
  },
  {
    path: image15
  },
  {
    path: image16
  },
  {
    path: image18
  },
  {
    path: image19
  },
  {
    path: image20
  },
  {
    path: image21
  },
  {
    path: image22
  },
  {
    path: image23
  },
  {
    path: image24
  },
  {
    path: image26
  },
  {
    path: image27
  },
  {
    path: image28
  },
  {
    path: image29
  },
  {
    path: image30
  },
]
function KarabaglarImageGallery() {
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

export default KarabaglarImageGallery