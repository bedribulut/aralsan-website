"use client";

import aralsanLogo from "../../images/aralsan-logo.png"
import tokiLogo from "../../images/corporate-logo/logo-toki.jpg"
import ilbankLogo from "../../images/corporate-logo/logo-ilbank.jpg"
import antepLogo from "../../images/corporate-logo/logo-antep.png"


import Image from "next/image"
import Link from "next/link";

import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const ongoingProjects = [
  {
    name: 'Trabzon İli Vakfıkebir İlçesi Millet Bahçesi ve Millet Bahçesine Ait Sosyal Donatılar İnşaatları ile Altyapı ve Çevre Düzenlemesi İşi',
    projectDetail: <ul className="list-disc">
      <li>MESCİT BİNASI 150 m2</li>
      <li>GİRİŞ KAPILARI 270 m2</li>
      <li>MİLLET KIRAATHANESİ 190 m2 </li>
      <li>EKMEK MÜZESİ 640 m2</li>
      <li>SU DEPOSU 300 ton</li>
      <li>AÇIK ALAN İNŞAATI 31.330 m2</li>
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
      <li>KÜTÜPHANE BİNASI 292 m2</li>
      <li>MİLLET KIRAATHANESİ 912 m2</li>
      <li>RESTAURANT BİNASI 2.710 m2</li>
      <li>SEYİR KÖŞKÜ 151 m2</li>
      <li>AÇIK ALAN İNŞAATI 13.226 m2</li>
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
      <li>ÇELİK YAPI İMALATI 180 TON</li>
      <li>KÜTÜPHANE BİNASI 260 m2</li>
      <li>MİLLET KIRAATHANESİ 885 m2</li>
      <li>SATIŞ BİRİMLERİ BİNASI 90 m2</li>
      <li>SU DEPOSU 150 ton</li>
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
      <li>BSK İMALATI 56.000 m2</li>
      <li>TOPRAK İŞLERİ 120.000 m3</li>
      <li>ATIKSU HATTI İNŞAATI</li>
      <li>YAĞMURSUYU HATTI İNŞAATI</li>
      <li>İÇMESUYU HATTI İNŞAATI</li>
      <li>SU DEPOSU 2.000 TON</li>
    </ul>,
    author: 'İLBANK',
    year: '2022',
    id: '4',
    logo: ilbankLogo,
    imagePath: '/projects/karabaglar',
  },
  {
    name: 'Perilikaya Spor Salonu ve Aşevi Yapım İşi',
    projectDetail: <ul className="list-disc">
      <li>1 Adet Spor Salonu ve Aşevi Yapımı</li>
    </ul>,
    author: 'Gaziantep B.B.',
    year: '2022',
    id: '4',
    logo: antepLogo,
    imagePath: '/projects/antep',
  },
]

function Projects() {
  return (
    <div className="flex flex-col items-stretch px-3 justify-between mb-6 md:grid md:gap-4 md:grid-cols-2 md:grid-rows-2 md:px-6">
      {ongoingProjects.map((project) => (
        <div key={project.id} className="relative flex flex-col mt-6 items-center justify-between w-full h-screen bg-gradient-to-tr from-blueBedri to-white opacity-70 rounded-lg hover:bg-white overflow-auto">
          <div className="flex flex-col items-center text-black/70 px-6 py-3 mt-3">
            <h2 className=" text-xl font-bold z-40 leading-relaxed">{project.name}</h2>
            <div className="mt-10 text-xl md:text-2xl">{project.projectDetail}</div>
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