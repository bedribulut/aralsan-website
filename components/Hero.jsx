import Image from "next/image"
import Link from "next/link"

import aralsanLogo from "../images/aralsan-logo.png"

function Hero() {
  return (
    <div className="px-6 pt-3 lg:px-8">
        <Image src={aralsanLogo} width={800} className="m-auto" />
        <div className="m-auto max-w-2xl py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                daha iyi bir gelecek inşa etmek için durmaksızın çalışıyoruz.
            </h1>
            <p className="mt-6 text-lg leading-6 text-gray-600">
                ARALSAN İnşaat ve Mühendislik A.Ş. olarak faaliyetlerimize 2015 yılında başladık. Bugün ülkemizin her bölgesinde, altyapıdan üstyapıya çeşitli projeleri, çok değerli çalışma arkadaşımızla birlikte hayata geçirmek için yorulmadan çalışıyoruz.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Projelerimiz
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Hakkımızda <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero