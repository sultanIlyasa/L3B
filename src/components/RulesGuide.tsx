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

export function RulesGuide() {
  return (
    <main
      className={`${barlowCondensed.className} flex flex-col bg-[#0A4833] h-screen`}
    >
      <h1 className="text-6xl font-bold text-center text-[#F3E7D7] py-16">
        Race Rules & Regulation
      </h1>
      <div className="bg-[#0D6A48] h-screen rounded-t-[100px] text-[#F3E7D7]">
        <div className="mx-auto flex flex-col items-center justify-center gap-3 my-14">
          <h2 className="text-5xl">Trail Run</h2>
          <div className={`${plusJakartaSans.className} flex gap-40 text-[28px]`}>
            <h3>Umum</h3>
            <h3>Partisipasi</h3>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-8 my-14">
          <h2 className="text-5xl">Fun Run</h2>
          <div className={`${plusJakartaSans.className} grid grid-cols-4 grid-rows-2 justify-center items-center text-center gap-4 text-[28px]`}>
            <div>Syarat & Ketentuan</div>
            <div>Perlengkapan</div>
            <div>Teknis Lomba</div>
            <div className="row-span-2 leading-8">Sistem Cut of Time<br/>(COT)</div>
            <div>Jalur</div>
            <div>Bentuk Marka</div>
            <div>Penilaian</div>
          </div>
        </div>
      </div>
    </main>
  );
}
