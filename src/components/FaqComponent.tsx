"use client";
import { useState, useEffect } from "react";
import { plusJakartaSans, barlowCondensed } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function FaqComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main
      className={`${plusJakartaSans.className} bg-[#0A4833] mx-auto items-center justify-center`}
    >
      {/* Bagian konten yang akan ditampilkan secara dinamis */}
      <section
        id="section-info-umum"
        className="text-[#F3E7D7] w-full px-5 md:px-10 py-10"
      >
        <div
          className={`${barlowCondensed.className} flex flex-col gap-3 items-center md:items-start`}
        >
          <h3 className="w-max whitespace-nowrap text-3xl md:text-6xl font-bold">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <div className="bg-[#F3E7D7] text-[#00160F] w-fit text-2xl md:text-3xl py-1 px-3 rounded-[20px]">
            Informasi Umum
          </div>
        </div>
        <div className="flex flex-col md:flex-row py-8 px-5 md:px-14 text-justify text-[#E3F6EB] max-w-full mx-auto gap-7 md:gap-40 leading-6  ">
          <div className="flex flex-col gap-7 md:w-1/2">
            <div>
              <h3 className="font-bold text-lg md:text-xl">
                Kapan acara utama L3B akan dilaksanakan?
              </h3>
              <p className="mt-2 text-base md:text-lg">
                Lomba Lintas Lembah dan Bukit (L3B) terdiri dari 2 rangkaian
                acara, yaitu: 1) campaign dan charity; 2) trail run dan fun run.
                Campaign dan charity akan dilaksanakan pada 10 November 2024.
                Sementara Trail run dan Fun run akan dilaksanakan pada 17
                November 2024.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg md:text-xl">
                Apakah kegiatan acara utama L3B dapat diikuti oleh peserta umum?
              </h3>
              <p className="mt-2 text-base md:text-lg">
                Ya, L3B terbuka untuk umum. Yuk, cek halaman utama untuk daftar
                kompetisi seru yang bisa kamu ikuti!
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg md:text-xl">
                Apakah membutuhkan surat keterangan sehat?
              </h3>
              <p className="mt-2 text-base md:text-lg">
                Ya, surat keterangan sehat dibawa oleh masing-masing peserta
                dengan masa berlaku 3 hari sebelum lomba. Para peserta wajib
                bertanggung jawab atas kesehatan diri masing-masing.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg md:text-xl">
                Apakah peserta lomba boleh mengikuti acara charity dan campaign
                (Pre-event)?
              </h3>
              <p className="mt-2 text-base md:text-lg">
                Boleh, campaign dan charity merupakan kegiatan pre-event yang
                dapat dihadiri oleh peserta, tetapi akan ada proses seleksi yang
                akan diumumkan segera karena keterbatasan alat dan area di
                lokasi pre-event.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7 md:w-1/2">
            <div>
              <h3 className="font-bold text-lg md:text-xl">
                Dimana acara utama L3B akan dilaksanakan?
              </h3>
              <p className="mt-2 text-base md:text-lg">
                Trail run dan fun run: Start dan Finish di Fakultas Pertanian
                UNPAD. Jalur kompetisi akan kami bagikan melalui media sosial
                @L3B.Unpad.
                <br />
                <br />
                Campaign dan charity: Desa Sindangsari, Kabupaten Sumedang, Jawa
                Barat.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg md:text-xl">
                Berapa kategori lomba dari acara utama L3B?
              </h3>
              <p className="mt-2 text-base md:text-lg">
                Terdapat 2 kategori lomba, yaitu fun run (8 km) dan trail run
                (21 km).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg md:text-xl">
                Apakah fun run tetap ada podium walaupun dilaksanakan per-tim?
              </h3>
              <p className="mt-2 text-base md:text-lg">
                Ya, tetap ada podium. Fun run tidak hanya dilihat dari kecepatan
                saja, tetapi juga terdapat penilaian lainnya. Silahkan baca
                lebih lanjut mengenai peraturan kompetisi dan regulasi di
                halaman website &quot;EVENT&quot;.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg md:text-xl">
                Jika sudah membeli tiket tetapi terkendala hadir saat hari-h,
                apakah tiket bisa di-refund?
              </h3>
              <p className="mt-2 text-base md:text-lg">
                Tidak, jika sudah membeli tiket tidak dapat di-refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tombol selengkapnya */}
      {!isExpanded && (
        <div className="relative w-full -top-96 left-1/2 transform -translate-x-1/2 ">
          <div className="absolute inset-0 h-96 bg-gradient-to-b from-[#0A4833]/0 via-[#0A4833]/2 to-[#0A4833]"></div>
          <div className="text-center relative z-10 top-96 left-1/2 transform -translate-x-1/2">
            <button
              onClick={toggleExpand}
              className="bg-[#FCC612] text-[#0A4732] font-semibold px-6 py-2 rounded-full text-xl"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      )}

      {/* Konten tambahan yang akan muncul ketika tombol ditekan */}
      {isExpanded && (
        <>
          <section
            id="section-info-hari-h"
            className="text-[#F3E7D7] w-full px-5 md:px-10 py-10"
          >
            <div
              className={`${barlowCondensed.className} flex flex-col gap-3 items-center md:items-start`}
            >
              <div className="bg-[#F3E7D7] text-[#00160F] w-fit text-2xl md:text-3xl py-1 px-3 rounded-[20px]">
                Infromasi Hari-H Lomba
              </div>
            </div>
            <div className="flex flex-col md:flex-row py-8 px-5 md:px-14 text-justify text-[#E3F6EB] max-w-full mx-auto gap-7 md:gap-40 leading-6">
              <div className="flex flex-col gap-7 md:w-1/2">
                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Apakah akan terdapat jalan yang ditutup menuju lokasi lomba
                    di hari pelaksanaan?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Ya, akan ada penutupan di beberapa jalan untuk jalur lomba.
                    Kami akan mencantumkan informasi lebih lanjut mengenai jalan
                    yang dapat dilalui menuju lokasi lomba.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Jam berapa race village L3B akan dibuka?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Race village L3B akan di buka mulai jam 03.30 - 13.00 WIB.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Apakah tersedia area parkir di dekat race village?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Ya, akan tersedia area parkir yang akan kami informasikan
                    melalui akun Instagram L3B.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Apakah akan tersedia area penitipan barang?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Ya, area penitipan barang hanya dapat digunakan untuk
                    peserta lomba. Tetapi barang yang dititipkan dilarang
                    berlebihan.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Apakah boleh menggunakan nomor BIB yang sudah saya punya
                    sendiri?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Tidak, peserta wajib menggunakan nomor BIB yang sudah
                    diberikan oleh panitia saat pembagian race pack.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-7 md:w-1/2">
                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Apakah saya diizinkan membawa sepeda, sepatu roda, kereta
                    bayi, atau kursi roda ke dalam area lomba?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Ya, tetapi{" "}
                    <strong>
                      panitia tidak bertanggung jawab jika terjadi kehilangan
                      karena semua barang bawaan merupakan tanggung jawab
                      masing-masing peserta
                    </strong>{" "}
                    (kecuali yang dititipkan).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Apakah diperbolehkan membawa hewan peliharaan?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Tidak. Hewan peliharaan dilarang tegas untuk memasuki area
                    lomba.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Setelah menyelesaikan lomba, apa yang akan saya dapatkan di
                    area finish? Apakah refreshment tersedia saat lomba
                    berlangsung?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Peserta yang menyelesaikan lomba sebelum cut of time (COT)
                    akan mendapatkan medali penamat (trail run dan fun run).
                    Refreshment akan tersedia saat pelaksanaan lomba yang berupa
                    air minum dan buah segar.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Jika terlambat saat flag off apakah tetap bisa mengikuti?
                  </h3>
                  <p className="mt-2 text-base md:text-lg">
                    Bisa, namun maksimal 30 menit setelah flag off. Setelah itu
                    gerbang start sudah menjadi gerbang finish.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tombol "Tutup" */}
          <div className="text-center pb-5">
            <button
              onClick={toggleExpand}
              className="bg-[#FCC612] text-[#0A4732] font-semibold px-6 py-2 rounded-full text-xl"
            >
              Tutup
            </button>
          </div>
        </>
      )}
    </main>
  );
}
