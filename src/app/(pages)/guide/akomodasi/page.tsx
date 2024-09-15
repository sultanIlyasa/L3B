import React from "react";
import Image from "next/image";
import { Card,CardHeader,CardContent,CardDescription,CardFooter,CardTitle } from "@/components/ui/card";
const Akomodasi = () => {
  return (
    <main className="min-h-screen">
      <section>
        <div className="text-center font-bold text-white mt-20 pt-20 text-4xl mb-10">
          <h1>Akomodasi</h1>
        </div>
        <div className="w-full h-80 bg-[#F3E7D7]">
          <div className="flex flex-row justify-center pt-10">
            <Image
              src="/guide/left.png"
              alt="Image 4"
              className="my-auto"
              width={150}
              height={100}
              quality={90}
            />
            <h1 className="text-center font-bold text-[#0A4833] text-xl">Hotel & Penginapan</h1>
            <Image
              src="/guide/right.png"
              alt="Image 4"
              className="my-auto"
              width={150}
              height={100}
              quality={90}
            />
          </div>
          <div className="flex flex-col"></div>
        </div>
      </section>
    </main>
  );
};

export default Akomodasi;
