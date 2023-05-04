"use client";

import aralsanLogo from "../../images/aralsan-logo.png"
import tokiLogo from "../../images/corporate-logo/logo-toki.jpg"


import Image from "next/image"
import Link from "next/link";

import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const ongoingProjects = [
  {
    name: 'Trabzon İli Vakfıkebir İlçesi Millet Bahçesi ve Millet Bahçesine Ait Sosyal Donatılar İnşaatları ile Altyapı ve Çevre Düzenlemesi İşi',
    projectDetail: <ul className="list-disc">
      <li>150m2 mescit binası</li>
      <li>270m2 giriş kapıları</li>
      <li>190m2 millet kıraathanesi</li>
      <li>640m2 ekmek müzesi</li>
      <li>130m2 su deposu</li>
      <li>31.330m2 açık alan inşaatı</li>
    </ul>,
    author: 'TOKİ',
    year: '2021',
    id: '1',
    logo: tokiLogo,
    imagePath: '/projects/trabzon'
  },
  {
    name: 'Konya İli Meram İlçesi Mahmuriye Mahallesi Millet Bahçesi ve Millet Bahçesine Ait Sosyal Donatılar İnşaatları İle Altyapı ve Çevre Düzenlemesi İşi',
    projectDetail: <ul className="list-disc">
      <li>292m2 kütüphane binası</li>
      <li>912m2 millet kıraathanesi</li>
      <li>2.710m2 restaurant binası</li>
      <li>151m2 seyir köşkü</li>
      <li>13.226m3 açık alan inşaatı</li>
    </ul>,
    author: 'TOKİ',
    year: '2022',
    id: '2',
    logo: tokiLogo,
    imagePath: '/projects/konya',
  },
  {
    name: 'Rize İli, İyidere İlçesi Millet Bahçesi ve Millet Bahçesine Ait Sosyal Donatılar İnşaatları İle Altyapı Ve Çevre Düzenlemesi İşi',
    projectDetail: <ul className="list-disc">
      <li>180 ton çelik yapı imalatı</li>
      <li>260m2 kütüphane binası</li>
      <li>885m2 millet kıraathanesi</li>
      <li>90m2 satış birimleri binası</li>
      <li>90m2 su deposu</li>
    </ul>,
    author: 'TOKİ',
    year: '2023',
    id: '3',
    logo: tokiLogo,
    imagePath: '/projects/rize',
  },
  {
    name: 'Karabağlar (İzmir) Kentsel Dönüşüm Alanı Yol-İçmesuyu-Kanalizasyon-Yağmursuyu İnşaatı Yapım İşi',
    projectDetail: <ul className="list-disc">
      <li>56.000m2 BSK imalatı</li>
      <li>120.000m3 toprak işleri</li>
      <li>4.000m atıksu hattı</li>
      <li>1.300m yağmursuyu hattı</li>
      <li>5.200m içmesuyu hattı</li>
      <li>2.000ton su deposu</li>
    </ul>,
    author: 'İLBANK',
    year: '2022',
    id: '4',
    logo: tokiLogo,
    imagePath: '/projects/karabaglar',
  },
]

function Projects() {
  return (
    <div className="flex flex-col items-stretch px-3 justify-between mb-6 md:grid md:gap-4 md:grid-cols-2 md:grid-rows-2 md:px-6">
      {ongoingProjects.map((project) => (
        <div key={project.id} className="relative flex flex-col mt-6 items-center justify-between w-full h-screen bg-gradient-to-tr from-blueBedri to-white opacity-70 rounded-lg hover:bg-white overflow-auto">
          <div className="flex flex-col items-center text-black/70 px-6 py-3 mt-3">
            <h2 className=" text-xl font-bold z-40 leading-relaxed">{project.name}</h2>
            <div className="mt-10 text-xl">{project.projectDetail}</div>
          </div>
          
          <div className="flex flex-col items-center">
            <Link href={project.imagePath} className="mb-5 bg-white/30 p-3 rounded-xl hover:bg-white hover:text-xl">proje fotoğrafları <BsFillArrowUpRightSquareFill className="inline-block" /></Link>
            <div className="flex flex-col text-black/70 items-center justify-center z-40 mb-3 rounded-full w-24 h-24 bg-white/30">
              <p className="">{project.year}</p>
              <h3 className="text-center">{project.author}</h3>
            </div>
            <Image className="z-40 mb-6 opacity-70 rounded-2xl" src={project.logo} alt="toki" width={150}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects