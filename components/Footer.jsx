"use client";

import { Typography } from "@material-tailwind/react";

import Image from "next/image"; 
import logo from "../images/aralsan-logo.png"

export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto  g-gradient-to-tr from-[#112e66] to-[#d8e0f0] border-t-2 p-8">
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between md:flex-row">
        <Image src={logo} alt="logo-ct"  width={300} height={500} />
        <ul className="flex flex-col flex-wrap items-center gap-y-2 gap-x-8 md:flex-row">
          <li>
            <Typography
              as="a"
              href="/"
              className="font-normal text-blueBedri transition-colors dark:text-gray-300 hover:text-blue-500 focus:text-indigo-500"
            >
              Ana Sayfa
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/about"
              className="font-normal text-blueBedri transition-colors dark:text-gray-300 hover:text-blue-500 focus:text-indigo-500"
            >
              Hakkımızda
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/projects"
              className="font-normal text-blueBedri transition-colors dark:text-gray-300 hover:text-blue-500 focus:text-indigo-500"
            >
              Projeler
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/references"
              className="font-normal text-blueBedri transition-colors dark:text-gray-300 hover:text-blue-500 focus:text-indigo-500"
            >
              Referanslar
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contact"
              className="font-normal text-blueBedri transition-colors dark:text-gray-300 hover:text-blue-500 focus:text-indigo-500"
            >
              İletişim
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Aralsan İnşaat ve Mühendislik A.Ş. <br/>
        Tüm Hakları Saklıdır.
      </Typography >
      <Typography color="blue-gray" className="text-center font-normal">
        designed and developed by <a href="https://github.com/bedribulut" target="_blank" className="text-blueBedri">bedribulut</a> 
    </Typography>
    </footer>
  );
}