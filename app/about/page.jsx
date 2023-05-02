"use client"

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-blueBedri sm:text-4xl">Hakkımızda</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Daha modern ve müreffeh bir Türkiye'nin inşası için durmaksızın çalışıyoruz.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1677798458976-09428e2e12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Yönetim Kurulu Başkanımız sayın Seval ARAL tarafından 2015 yılında başta kamu taahhüt projelerini gerçekleştirmek amacıyla kurulan ARALSAN İnşaat ve Mühendislik A.Ş. Türkiye çapında bir mühendislik ve inşaat firmasıdır. Merkezi Ankara’da bulunan şirketimiz, bugüne kadar Türkiye'nin 7 bölgesinde yüklendiği çok sayıdaki kamu taahhüt projelerini başarıyla gerçekleştirmiştir.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-blueBedri">VİZYON</strong> Tüm projelerimizde sözümüzü tutar, işimizi iyi yapar ve itibarımızı sürekli yükseltiriz. Projelerimizi fark yaratacak bir biçimde gerçekleştirmeye gayret ederiz. ARALSAN İnşaat ve Mühendislik başladığı her projeyi bitirme azmi gösteren, açık, saydam, bilgi işleyerek karar veren, yenilikçi, estetik tutum sergileyen bir şirkettir. Faaliyet gösterdiği bölgelerin tarihine, geleneklerine, örf ve âdetlerine ve doğasına saygılıdır, duyarlıdır.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-blueBedri">MİSYON</strong> ARALSAN İnşaat ve Mühendislik üstlenmiş olduğu projelerin tamamında, Türkiye’nin kalkınmasını, müşterilerinin, çalışanlarının, ortaklarının memnuniyetini ve şirket değerlerini en ön planda gözetir. ARALSAN İnşaat ve Mühendislik, faaliyetlerini ilkesel ve kurumsal değerlere uygun şekilde sürdürme sorumluluğunda olduğunun bilincindedir. Yüklendiği her projede ülke çapında saygın olma hedefinin bilinciyle çalışır ve bu hedefine ulaşır. ARALSAN İnşaat ve Mühendislik, yüklendiği tüm işleri ve tüm faaliyetlerini, net artı değer üretecek ve fark yaratacak biçimde gerçekleştirir.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
