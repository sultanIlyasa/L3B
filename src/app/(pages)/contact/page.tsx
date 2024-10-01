"use client";
import Image from "next/image";
import React from "react";
import { plusJakartaSans } from "@/app/fonts";
import WhatsAppLink from "@/components/whatsapp-link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  return (
    <main className={`${plusJakartaSans.className} min-h-screen `}>
      <div className="flex flex-col bg-[#F3E7D7] md:flex-row md:h-screen">
        {/* Left column */}
        <div className="w-full md:w-1/2 relative p-8 md:p-0 ">
          <div className="w-full md:w-[239px] mx-auto md:ml-32 md:absolute md:top-1/2 md:-translate-y-1/2">
            <h2 className="pt-12 mt-12 text-xl md:text-2xl font-medium text-center ">
              Dinaungi Oleh
            </h2>
            <Image
              src="/bemf.png"
              alt="BEM Logo"
              width={239}
              height={208}
              quality={100}
              className="mx-auto mt-0 pt-0"
            />
          </div>
        </div>
        {/* Right column - Visible on both mobile and desktop */}
        <div className="w-full md:w-1/2 relative h-[423px] md:h-auto mt-36 md:mt-0">
          <Image
            className="object-cover object-right md:object-right brightness-50"
            src="/contact-img1.jpeg"
            alt="Running Event"
            layout="fill"
          />
        </div>
      </div>

      {/* Center Column */}
      <Card className="bg-[#0A4833] border-none rounded-none m-auto items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 text-white px-6 py-8 md:px-10 md:py-20 w-[352px] md:w-[490px] h-fit ">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl md:text-[32px] md:leading-[38px]">
            Kesempatan
            <br />
            Bekerja Sama
            <br />
            dengan L3B Unpad
          </CardTitle>
        </CardHeader>
        <CardContent className="py-6 md:py-12">
          <p className="text-sm md:text-base font-light leading-5 text-justify">
            Untuk informasi lebih lanjut mengenai kesempatan bekerja sama
            seputar sponsorship, media partner, dan community partner dalam
            Lomba Lintas Lembah dan Bukit, silakan hubungi kami di
            <span>l3b2024@gmail.com</span>.
          </p>
        </CardContent>
        <CardFooter>
          <ul className="space-y-2 leading-4 font-bold text-sm md:text-base">
            <WhatsAppLink />
          </ul>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Contact;
