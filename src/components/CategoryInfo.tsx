"use client";
import React from "react";
import { plusJakartaSans, barlowCondensed } from "@/app/fonts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CategoryInfo() {
  return (
    <main className={`${barlowCondensed.className} flex flex-col`}>
      <div className="relative w-full h-64 text-center mix-blend-luminosity">
        <Image
          className="object-cover object-center brightness-50"
          src="/bannerEvent.jpeg"
          alt="Running Event"
          layout="fill"
          objectFit="cover"
          draggable="false"
        />
        <h1 className="absolute w-full bottom-5 left-1/2 transform -translate-x-1/2 text-[#FFFFFF] text-6xl md:text-8xl font-bold">
          INFORMASI ACARA
        </h1>
      </div>

      <div className="relative bg-[#F3E7D7] min-h-screen flex flex-col md:flex-row p-auto items-center justify-center text-center py-52 gap-64 ">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mountbg.png"
            alt="Mountain Background"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            draggable="false"
          />
        </div>

        <Card className="relative z-10 bg-[#0A483380] w-[385px] h-[348px] rounded-[20px] border-none shadow-[0_0_15px_1px_#000000] items-center justify-center flex">
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2">
            <Image
              src="/mount1.png"
              alt="Mountain"
              width={272}
              height={120}
              className="mx-auto"
              draggable="false"
            />
            <div className="relative w-[272px] h-[135px]">
              <div className="absolute -top-0.5 inset-0 w-full h-full bg-[#0A4833] rounded-b-full flex items-center justify-center">
                <div className="text-[32px] leading-10 text-[#F3E7D7] w-[179px] h-[57px] shadow-[0_0_10px_0_#000000] mb-10 items-center justify-center flex italic">
                  Trail Run
                </div>
              </div>
            </div>
          </div>
          <CardContent className="flex flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2 gap-5">
            <CardHeader className="flex flex-col items-center gap-7">
              <div className="w-32 h-2 bg-[#0A4833] rounded-full"></div>
              <div className="w-60 h-[2px] bg-[#0A4833] rounded-full"></div>
            </CardHeader>
            <CardFooter className="flex justify-center gap-3 mb-6">
              <div className="bg-[#0A4833] w-[165px] h-[154px] rounded-xl border-none text-center flex flex-col items-center justify-center gap-4">
                <div className="bg-[#F3E7D7] w-24 rounded-md text-[28px]">
                  <p className="text-[#0A4833]">Pria</p>
                </div>
                <div className={`${plusJakartaSans.className} text-xl leading-5 text-[#F3E7D7] space-y-3`}>
                  <p>21 Km</p>
                  <p>17-50 Tahun</p>
                </div>
              </div>
              <div className="bg-[#0A4833] w-[165px] h-[154px] rounded-xl border-none text-center flex flex-col items-center justify-center gap-4">
                <div className="bg-[#F3E7D7] w-24 rounded-md text-[28px]">
                  <p className="text-[#0A4833]">Wanita</p>
                </div>
                <div className={`${plusJakartaSans.className} text-xl leading-5 text-[#F3E7D7] space-y-3`}>
                  <p>21 Km</p>
                  <p>17-50 Tahun</p>
                </div>
              </div>
            </CardFooter>
          </CardContent>
        </Card>

        <Card className="relative z-10 bg-[#0A483380] w-[385px] h-[348px] rounded-[20px] border-none shadow-[0_0_15px_1px_#000000]  items-center justify-center flex">
          <div className="absolute -top-[184px] left-1/2 transform -translate-x-1/2">
            <Image
              src="/mount2.png"
              alt="Mountain"
              width={272}
              height={120}
              className="mx-auto"
              draggable="false"
            />
            <div className="relative w-[272px] h-[135px]">
              <div className="absolute -top-0.5 inset-0 w-full h-full bg-[#0A4833] rounded-b-full flex items-center justify-center">
                <div className="text-[32px] leading-10 text-[#F3E7D7] w-[179px] h-[57px] shadow-[0_0_10px_0_#000000] mb-10 items-center justify-center flex italic">
                  Fun Run
                </div>
              </div>
            </div>
          </div>
          <CardContent className="flex flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2 gap-5">
            <CardHeader className="flex flex-col items-center gap-7">
              <div className="w-32 h-2 bg-[#0A4833] rounded-full"></div>
              <div className="w-60 h-[2px] bg-[#0A4833] rounded-full"></div>
            </CardHeader>
            <CardFooter className="flex flex-col justify-end items-center h-full gap-3">
              <div className="flex justify-center gap-3 mb-6">
                <div className="bg-[#0A4833] w-[240px] h-[154px] rounded-xl border-none text-center flex flex-col items-center justify-center gap-4">
                  <div className="bg-[#F3E7D7] w-48 rounded-md text-[28px]">
                    <p className="text-[#0A4833]">Pria dan Wanita</p>
                  </div>
                  <div className={`${plusJakartaSans.className} text-xl leading-5 text-[#F3E7D7] space-y-3`}>
                    <p>8 Km</p>
                    <p>Umum</p>
                  </div>
                </div>
              </div>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
