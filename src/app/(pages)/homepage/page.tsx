import React from "react";
import { barlowCondensed } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const Homepage = () => {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="pt-36 mx-auto flex flex-col lg:flex-row items-center">
          {/* Hero Section */}

          {/* Left side content */}
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h1 className=" text-white text-4xl md:text-5xl font-bold mb-4">
              SATU LANGKAHKU, HIJAU BUMIKU
            </h1>
            <p className="text-white text-lg mb-6 text-justify">
              Lomba Lintas Lembah dan Bukit (L3B) hadir membawa misi untuk
              menciptakan bumi yang lebih hijau dan mengabdi kepada petani.
              Siap, steady, hijau! Dengan L3B 2024, mari hijaukan bumi bersama!
            </p>
            <button className="bg-yellow-400 text-emerald-800 font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
              Selengkapnya
            </button>
          </div>

          {/* Right side grid */}
          <div className="lg:w-1/2 grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="bg-white/20 aspect-square rounded-lg"
              ></div>
            ))}
          </div>
        </div>
        {/* Mandala kretabumi  */}
        <div className="flex mx-auto w-full mt-12">
          <div className="mx-auto w-[450px] md:w-full p-6 md:p-36 lg:p-48 bg-[url('/mandala.png')] bg-center bg-cover rounded-3xl">
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
              <h2>Trail Run and Fun Run</h2>
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
              <h2>Closing</h2>
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
                className="md:w-[256px] md:h-[60px] w-[128px] h-[30px]"
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
      <div className="relative w-full h-[300px] md:h-[600px] lg:h-[1000px]">
        <div className="absolute inset-0 bg-[url('/homepage/bg-homepage.png')] bg-cover opacity-40"></div>
        <div className=" relative z-10 container mx-auto mt-10 pt-10 md:pt-40 lg:pt-80">
          <h1
            className={`text-[#F3E7D7] mx-auto text-3xl md:text-4xl lg:text-6xl font-bold text-center ${barlowCondensed.className}`}
          >
            SIAP UNTUK JELAJAHI INDAHNYA <br /> GUNUNG MANGLAYANG?
          </h1>
          <p className="text-[#F3E7D7] text-center justify-center lg:text-xl">
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
