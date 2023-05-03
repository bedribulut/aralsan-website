"use client";
import Image from "next/image";
import Link from "next/link";

import image1 from "./photos/t1.JPG"
import image2 from "./photos/t2.JPG"
import image3 from "./photos/t3.JPG"
import image4 from "./photos/t4.JPG"

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
]
function TrabzonImageGallery() {
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

export default TrabzonImageGallery