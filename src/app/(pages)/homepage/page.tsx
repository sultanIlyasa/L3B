"use client";
import React, { useRef } from "react";
import { barlowCondensed } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import imageData from "@/app/imageData.json";
import { AnimationEvent } from "react";

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const Homepage = () => {
  const mandalaRef = useRef<HTMLDivElement>(null);

  const scrollToMandala = () => {
    mandalaRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="container overflow-hidden">
        <div className="pt-52 mx-auto flex flex-col lg:flex-row items-center">
          {/* Hero Section */}
          {/* Left side content */}
          <div className="lg:w-1/2 lg:pr-20 mb-8 lg:mb-0 z-10">
            <h1 className=" text-white text-4xl md:text-5xl font-bold mb-4">
              SATU LANGKAHKU, <br /> HIJAU BUMIKU
            </h1>
            <p className="text-white text-lg mb-6 text-justify">
              Lomba Lintas Lembah dan Bukit (L3B) hadir membawa misi untuk
              menciptakan bumi yang lebih hijau dan mengabdi kepada petani.
              Siap, steady, hijau! Dengan L3B 2024, mari hijaukan bumi bersama!
            </p>
            <button
              className="bg-yellow-400 text-emerald-800 font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-300"
              onClick={scrollToMandala}
            >
              Selengkapnya
            </button>
          </div>
          {/* Right side grid */}
          <div className="lg:absolute lg:right-0 lg:inset-y-0  lg:ml-24 lg:pl-24 grid grid-cols-3 gap-4 lg:gap-10 transform lg:rotate-11 z-0 lg:overflow-hidden mt-8 lg:mt-0">
            {/* Row 1 */}
            <div className="flex flex-col rotate-12 gap-4">
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_8.png"
                  alt="Image 8"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_4.png"
                  alt="Image 4"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_1.png"
                  alt="Image 1"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col rotate-12 gap-4">
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_6.png"
                  alt="Image 6"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_5.png"
                  alt="Image 5"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_2.png"
                  alt="Image 2"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col rotate-12 gap-4">
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_1.png"
                  alt="Image 1"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_2.png"
                  alt="Image 2"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
              <div className="w-24 h-36 md:w-[292px] md:h-[371px] overflow-hidden rounded-lg">
                <Image
                  src="/homepage/img_3.png"
                  alt="Image 3"
                  className="w-full h-full object-cover"
                  width={292}
                  height={371}
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mandala kretabumi  */}
        <div ref={mandalaRef} className=" flex mx-auto w-full mt-40 pt-40">
          <div className="mx-auto w-[450px] md:w-full p-6 md:p-36 lg:p-48 bg-[url('/mandala.png')] bg-center bg-cover rounded-3xl z-30">
            <h1
              className={`mx-auto text-2xl text-white md:text-4xl font-bold text-center ${barlowCondensed.className}`}
            >
              MANDALA KRETABUMI
            </h1>
            <p className="md:mx-[25%] text-white text-sm md:text-md text-center ">
              Lomba Lintas Lembah dan Bukit (L3B) adalah ajang lomba lari lintas
              alam dwi tahunan Fakultas Pertanian Unpad yang sudah berlangsung
              sejak 1962, dan kembali digelar di tahun ini.
            </p>
          </div>
        </div>

        {/* Article Seeds of Hope */}
        <div className=" mx-auto mt-10 flex flex-col w-full md:flex-row-reverse">
          <div className="w-full ">
            <Image
              src={"/SOH.png"}
              alt="logo"
              className="mx-auto"
              width={450}
              height={500}
            ></Image>
          </div>
          <div className="flex container">
            <article className="mx-auto items-center lg:my-auto text-center md:text-left text-[#F3E7D7]">
              <h2>Campaign and Charity</h2>
              <h1
                className={`mx-auto text-2xl md:text-4xl font-bold text-center md:text-left ${barlowCondensed.className}`}
              >
                SEEDS OF HOPE
              </h1>
              <div className="text-justify">
                <p>
                  Menanam bibit tak hanya berarti menanam pohon, tetapi juga
                  menanam harapan untuk masa depan yang lebih baik. 
                </p>
                <br />
                <p>
                  Mari, bersama-sama kita ciptakan kehidupan yang lebih hijau
                  dan berkelanjutan dengan menanam 1.000 bibit tanaman.{" "}
                </p>
                <br />
                <p>
                  Selain itu, kegiatan charity ada untuk menumbuhkan harapan
                  para petani, sekaligus berkontribusi pada kesejahteraan
                  mereka, lingkungan, dan seluruh masyarakat. 
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Article The Great Adventure */}
        <div className=" mx-auto mt-10 flex flex-col w-full md:flex-row">
          <div className="w-full">
            <Image
              src={"/TGA.png"}
              alt="logo"
              className="mx-auto"
              width={450}
              height={500}
            ></Image>
          </div>
          <div className="flex container">
            <article className="mx-auto items-center lg:my-auto md:text-left text-[#F3E7D7]">
              <h2 className="text-center md:text-left">
                Trail Run and Fun Run
              </h2>
              <h1
                className={`mx-auto text-2xl md:text-4xl font-bold text-center md:text-left ${barlowCondensed.className}`}
              >
                THE GREAT ADVENTURE
              </h1>
              <div className="text-justify">
                <p>
                  Kapan lagi bisa merasakan pengalaman berlari melewati lembah
                  dan bukit sejauh 21 km! Jadilah bagian dari petualangan ini
                  dan buktikan kekuatanmu di Trail Run L3B. 
                </p>
                <br />
                <p>
                  Nikmati juga serunya berlari sejauh 8 km di Fun Run L3B, di
                  mana pengalaman dan momen kebersamaan lebih penting daripada
                  kecepatan. Siapkan dirimu untuk momen tak terlupakan!
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Article The Return of the heroes */}
        <div className=" mx-auto mt-10 flex flex-col w-full md:flex-row-reverse">
          <div className="w-full ">
            <Image
              src={"/TRTH.png"}
              alt="logo"
              className="mx-auto"
              width={450}
              height={500}
            ></Image>
          </div>
          <div className="flex container">
            <article className="mx-auto items-center lg:my-auto md:text-left text-[#F3E7D7]">
              <h2 className="text-center md:text-left">Closing</h2>
              <h1
                className={`mx-auto text-2xl md:text-4xl font-bold text-center md:text-left ${barlowCondensed.className}`}
              >
                THE RETURN OF HEROES
              </h1>
              <div className="text-justify">
                <p>
                  Saksikan penampilan menarik dari berbagai talent lokal yang
                  akan menghiburmu dengan kreativitas dan bakat mereka. Dapatkan
                  juga kesempatan untuk menikmati berbagai hidangan lezat di
                  Food Fest, yang menyajikan kuliner khas Indonesia.
                </p>
                <br />
                <p>
                  Ayo, jangan lewatkan momen penghargaan bertema budaya Sunda
                  yang akan menambah semarak acara dan rayakan pencapaianmu
                  dalam suasana penuh kebersamaan di penghujung acara L3B!
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Sponsorship */}
        <div className="container mx-auto mt-12">
          <div className="mx-auto flex flex-col w-[100%] p-10 bg-[#F3E7D7] rounded-3xl">
            <h1 className="font-bold text-center">Supported By</h1>
            <div className="flex flex-col md:flex-row mx-auto gap-4">
              <Image
                src={"/gojek.png"}
                alt="logo"
                className="md:w-[206px] md:h-[60px] w-[128px] h-[30px]"
                width={256}
                height={60}
              ></Image>
              <Image
                src={"/gulf.png"}
                alt="logo"
                className="md:w-[156px] md:h-[60px] w-[128px] h-[50px]"
                width={170}
                height={60}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Ticket Session */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[1000px]">
        <div className="absolute inset-0 bg-[url('/bg-homepage.png')] bg-cover opacity-40"></div>
        <div className=" relative z-10 container mx-auto mt-10 pt-10 md:pt-40 lg:pt-80">
          <h1
            className={`text-[#F3E7D7] mx-auto text-3xl md:text-4xl lg:text-6xl font-bold text-center ${barlowCondensed.className}`}
          >
            SIAP UNTUK JELAJAHI INDAHNYA <br /> GUNUNG MANGLAYANG?
          </h1>
          <p className="text-[#F3E7D7] text-center justify-center lg:text-xl mt-6">
            Nikmati pengalaman lari melintasi lembah dan bukit, dan jadilah
            bagian dari aksi <br />
            penghijauan bumi bersama L3B.
          </p>
          <div className="flex flex-col items-center mt-10">
            {" "}
            <Link href={"https://www.loket.com/event/l3b2024"}>
              <button className=" bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-yellow-300 transition duration-300">
                BELI TIKET SEKARANG
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
