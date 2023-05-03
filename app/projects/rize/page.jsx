"use client";
import Image from "next/image";
import Link from "next/link";

function RizeImageGallery() {
  return (
    <>
      <button className="mt-2 text-white rounded-xl block text-xl p-6 m-auto bg-blueBedri">
        <Link href="/projects">&lt;--geri dön</Link>
      </button>
      <div className="flex items-center mx-auto p-3 space-y-6 justify-center flex-wrap">
        <h2>fotoğraflar yakında yüklenecektir.</h2>
      </div>
    </>
  )
}

export default RizeImageGallery