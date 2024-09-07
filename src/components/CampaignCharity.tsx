"use client";
import React from "react";
import { plusJakartaSans, barlowCondensed } from "@/app/fonts";

import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CampaignCharity() {
  return (
    <main
      className={`${barlowCondensed.className} h-auto bg-[#0A4833] py-20 md:py-36 flex flex-col md:flex-row gap-5 mx-auto items-center justify-center`}
    >
      <div className="flex flex-col mx-auto justify-center items-center">
      <Card className="bg-[#F3E7D7] w-[380px] md:w-[455px] h-auto rounded-3xl flex flex-col p-8 gap-3 md:gap-8">
        <div className="w-full flex flex-col items-center">
          <div className="w-full">
            <div className="bg-[#FCC612] w-[100px] md:w-[137px] h-[39px] rounded-t-lg"></div>
          </div>
          <div className="w-full h-[274px] md:h-[304px] relative overflow-hidden rounded-r-lg">
            <Image
              src="/campaign.png"
              alt="Campaign"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-start w-full gap-4">
          <h2 className="text-3xl">Campaign & Charity</h2>
          <div className="flex items-center gap-5">
            <svg
              className="flex-shrink-0"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="25" cy="24.5" rx="25" ry="24.5" fill="#FCC612" />
              <path
                d="M34.3375 18.1217C33.6047 13.8158 29.996 10.4626 25.6424 10.0718C19.8599 9.54648 15.0056 14.0906 15.0056 19.7707C15.0056 21.0228 15.2498 22.2137 15.6834 23.3193H15.6772L15.6895 23.3437C15.9154 23.9116 21.4903 34.2031 23.7801 38.4113C24.1952 39.1747 25.2943 39.1747 25.7096 38.4113C27.9933 34.2031 33.5742 23.9116 33.8002 23.3437L33.8123 23.3193H33.8063C34.4169 21.7434 34.655 19.9784 34.3375 18.1217ZM24.7448 25.3042C21.6551 25.3042 19.1456 22.8 19.1456 19.7036C19.1456 16.607 21.6489 14.1027 24.7448 14.1027C27.8406 14.1027 30.3441 16.607 30.3441 19.7036C30.3441 22.8 27.8345 25.3042 24.7448 25.3042Z"
                fill="#00160F"
              />
            </svg>
            <p className={`${plusJakartaSans.className} text-md md:text-xl `}>
              Desa Sindangsari, Kabupaten Sumedang, Jawa Barat
            </p>
          </div>

          <div className="flex items-center gap-5">
          <svg
                className="flex shrink-0"
                width="50"
                height="50"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="25" cy="25.5" rx="25" ry="25.5" fill="#FCC612" />
                <path
                  d="M30.9348 13.8728V15.7194C30.9348 16.2112 31.335 16.6077 31.8233 16.6077C32.3154 16.6077 32.712 16.2076 32.712 15.7194V13.9426C33.2812 14.2729 33.6667 14.8897 33.6667 15.5945C33.6667 16.6481 32.8111 17.5034 31.7573 17.5034C30.7035 17.5034 29.8479 16.6481 29.8479 15.5945C29.8552 14.8346 30.2959 14.1811 30.9348 13.8728Z"
                  fill="#00160F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.0853 12.9331H32.7156V10.8884C32.7156 10.3965 32.3154 10 31.827 10C31.335 10 30.9385 10.4001 30.9385 10.8884V12.9368H18.7256V10.8884C18.7256 10.3965 18.3254 10 17.8371 10C17.345 10 16.9485 10.4001 16.9485 10.8884V12.9368H16.0856C13.2766 12.9368 11 15.2127 11 18.021V34.3751C11 37.1833 13.2766 39.4592 16.0856 39.4592H34.0853C36.8943 39.4592 39.1708 37.1833 39.1708 34.3751V18.021C39.1745 15.2127 36.8943 12.9331 34.0853 12.9331ZM30.9348 15.7194V13.8728C30.2959 14.1811 29.8552 14.8346 29.8479 15.5945C29.8479 16.6481 30.7035 17.5034 31.7573 17.5034C32.8111 17.5034 33.6667 16.6481 33.6667 15.5945C33.6667 14.8897 33.2812 14.2729 32.712 13.9426V15.7194C32.712 16.2076 32.3154 16.6077 31.8233 16.6077C31.335 16.6077 30.9348 16.2112 30.9348 15.7194ZM16.9448 15.7194V13.9059C16.3426 14.2253 15.9277 14.8604 15.9204 15.5908C15.9204 16.6444 16.7759 17.4997 17.8298 17.4997C18.8836 17.4997 19.7391 16.6444 19.7391 15.5908C19.7391 14.8604 19.3279 14.2253 18.722 13.9059V15.7194C18.722 16.2076 18.3254 16.6077 17.8334 16.6077C17.345 16.6077 16.9448 16.2112 16.9448 15.7194ZM34.0889 37.6751C35.9102 37.6751 37.3936 36.1957 37.3936 34.3714V20.8256H12.7808V34.3714C12.7808 36.1921 14.2606 37.6751 16.0856 37.6751H34.0889Z"
                  fill="#00160F"
                />
                <path
                  d="M16.9448 13.9059V15.7194C16.9448 16.2112 17.345 16.6077 17.8334 16.6077C18.3254 16.6077 18.722 16.2076 18.722 15.7194V13.9059C19.3279 14.2253 19.7391 14.8604 19.7391 15.5908C19.7391 16.6444 18.8836 17.4997 17.8298 17.4997C16.7759 17.4997 15.9204 16.6444 15.9204 15.5908C15.9277 14.8604 16.3426 14.2253 16.9448 13.9059Z"
                  fill="#00160F"
                />
                <path
                  d="M18.7514 25.9539H16.2875C16.0892 25.9539 15.9277 25.7923 15.9277 25.5942V23.1309C15.9277 22.9327 16.0892 22.7712 16.2875 22.7712H18.7514C18.9496 22.7712 19.1113 22.9327 19.1113 23.1309V25.5942C19.1076 25.7923 18.9496 25.9539 18.7514 25.9539Z"
                  fill="#00160F"
                />
                <path
                  d="M18.7514 31.0051H16.2875C16.0892 31.0051 15.9277 30.8436 15.9277 30.6453V28.1822C15.9277 27.9839 16.0892 27.8224 16.2875 27.8224H18.7514C18.9496 27.8224 19.1113 27.9839 19.1113 28.1822V30.6453C19.1076 30.8473 18.9496 31.0051 18.7514 31.0051Z"
                  fill="#00160F"
                />
                <path
                  d="M18.7514 36.0599H16.2875C16.0892 36.0599 15.9277 35.8984 15.9277 35.7001V33.237C15.9277 33.0387 16.0892 32.8772 16.2875 32.8772H18.7514C18.9496 32.8772 19.1113 33.0387 19.1113 33.237V35.7038C19.1076 35.8984 18.9496 36.0599 18.7514 36.0599Z"
                  fill="#00160F"
                />
                <path
                  d="M23.804 25.9539H21.3401C21.1418 25.9539 20.9802 25.7923 20.9802 25.5942V23.1309C20.9802 22.9327 21.1418 22.7712 21.3401 22.7712H23.804C24.0022 22.7712 24.1638 22.9327 24.1638 23.1309V25.5942C24.1638 25.7923 24.0022 25.9539 23.804 25.9539Z"
                  fill="#00160F"
                />
                <path
                  d="M23.804 31.0051H21.3401C21.1418 31.0051 20.9802 30.8436 20.9802 30.6453V28.1822C20.9802 27.9839 21.1418 27.8224 21.3401 27.8224H23.804C24.0022 27.8224 24.1638 27.9839 24.1638 28.1822V30.6453C24.1638 30.8473 24.0022 31.0051 23.804 31.0051Z"
                  fill="#00160F"
                />
                <path
                  d="M23.804 36.0599H21.3401C21.1418 36.0599 20.9802 35.8984 20.9802 35.7001V33.237C20.9802 33.0387 21.1418 32.8772 21.3401 32.8772H23.804C24.0022 32.8772 24.1638 33.0387 24.1638 33.237V35.7038C24.1638 35.8984 24.0022 36.0599 23.804 36.0599Z"
                  fill="#00160F"
                />
                <path
                  d="M28.8601 25.9539H26.3963C26.198 25.9539 26.0365 25.7923 26.0365 25.5942V23.1309C26.0365 22.9327 26.198 22.7712 26.3963 22.7712H28.8601C29.0584 22.7712 29.22 22.9327 29.22 23.1309V25.5942C29.2164 25.7923 29.0584 25.9539 28.8601 25.9539Z"
                  fill="#00160F"
                />
                <path
                  d="M28.8601 31.0051H26.3963C26.198 31.0051 26.0365 30.8436 26.0365 30.6453V28.1822C26.0365 27.9839 26.198 27.8224 26.3963 27.8224H28.8601C29.0584 27.8224 29.22 27.9839 29.22 28.1822V30.6453C29.2164 30.8473 29.0584 31.0051 28.8601 31.0051Z"
                  fill="#00160F"
                />
                <path
                  d="M28.8601 36.0599H26.3963C26.198 36.0599 26.0365 35.8984 26.0365 35.7001V33.237C26.0365 33.0387 26.198 32.8772 26.3963 32.8772H28.8601C29.0584 32.8772 29.22 33.0387 29.22 33.237V35.7038C29.2164 35.8984 29.0584 36.0599 28.8601 36.0599Z"
                  fill="#00160F"
                />
                <path
                  d="M33.9164 25.9539H31.4525C31.2543 25.9539 31.0927 25.7923 31.0927 25.5942V23.1309C31.0927 22.9327 31.2543 22.7712 31.4525 22.7712H33.9164C34.1147 22.7712 34.2762 22.9327 34.2762 23.1309V25.5942C34.2725 25.7923 34.111 25.9539 33.9164 25.9539Z"
                  fill="#00160F"
                />
                <path
                  d="M33.9164 31.0051H31.4525C31.2543 31.0051 31.0927 30.8436 31.0927 30.6453V28.1822C31.0927 27.9839 31.2543 27.8224 31.4525 27.8224H33.9164C34.1147 27.8224 34.2762 27.9839 34.2762 28.1822V30.6453C34.2725 30.8473 34.111 31.0051 33.9164 31.0051Z"
                  fill="#00160F"
                />
              </svg>
              <p className={`${plusJakartaSans.className} text-md md:text-xl `}>
              Minggu, 10 November 2024
            </p>
          </div>
        </div>
      </Card>
    </div>
      <div className="flex flex-col gap-12 w-[380px] md:w-[824px] mx-auto justify-center items-center">
        <Card className="border-none bg-transparent">
          <CardTitle className="bg-[#FCC612] w-fit p-5 rounded-t-lg flex items-center justify-center">
            <span className="text-[#0A4833] text-4xl md:text-6xl font-bold">
              CAMPAIGN
            </span>
          </CardTitle>
          <CardDescription className="bg-[#0D6A48] w-[380px] md:w-[824px] h-auto rounded-r-lg p-4 shadow-[0_4px_4px_0_#00000040]">
            <p
              className={`${plusJakartaSans.className} text-[#F3E7D7] text-lg md:text-xl text-justify`}
            >
              Bersama peserta, mitra komunitas, dan panitia, kita menciptakan
              kehidupan yang lebih hijau dan berkelanjutan di Desa Sindangsari,
              Kabupaten Sumedang, melalui inisiatif &quot;SEEDS OF HOPE&quot;.
              Dengan menanam 1.001 bibit, kita wujudkan harapan untuk masa depan
              yang lebih baik, sebagai langkah konkret menuju visi &quot;Mandala
              Kretabumi&quot; yang menjaga keseimbangan alam dan hubungan
              harmonis antara manusia dan lingkungan. Mari kita jaga bumi
              bersama, satu bibit harapan pada satu waktu.
            </p>
          </CardDescription>
        </Card>
        <Card className="border-none bg-transparent w-[380px] md:w-[824px] flex flex-col items-end">
          <CardTitle className="bg-[#FCC612] w-fit p-5 rounded-t-lg flex items-center justify-center">
            <span className="text-[#0A4833] text-4xl md:text-6xl font-bold">
              CHARITY
            </span>
          </CardTitle>
          <CardDescription className="bg-[#0D6A48] w-[380px] md:w-[824px] h-auto rounded-l-lg p-4 shadow-[0_4px_4px_0_#00000040]">
            <p
              className={`${plusJakartaSans.className} text-[#F3E7D7] text-lg md:text-xl text-justify`}
            >
              Sebagai bagian dari rangkaian pra-acara, kegiatan charity
              bertujuan untuk memberikan bantuan nyata kepada sekitar 1.000
              petani di Kabupaten Sumedang melalui lima Gabungan Kelompok Tani
              (Gapoktan). Bantuan berupa sarana produksi pertanian (saprotan)
              ini bertujuan untuk menumbuhkan harapan para petani dan
              berkontribusi pada kesejahteraan mereka, lingkungan, serta
              masyarakat. Kami ingin memastikan petani, sebagai tulang punggung
              ketahanan pangan, dapat terus berkembang dan sejahtera.
            </p>
          </CardDescription>
        </Card>
      </div>
    </main>
  );
}
