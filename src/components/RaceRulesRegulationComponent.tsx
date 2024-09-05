"use client";
import { useState, useEffect } from "react";
import { plusJakartaSans, barlowCondensed } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function RaceRulesRegulationComponent() {
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
      <h1 className="text-3xl md:text-6xl font-bold text-center text-[#F3E7D7] py-10 md:py-16">
        Race Rules & Regulation
      </h1>
      <div className="bg-[#0D6A48] h-auto rounded-t-[100px] text-[#F3E7D7]">
        <div className="mx-auto flex flex-col items-center justify-center gap-3 pt-14 font-bold">
          <h2 className={`${barlowCondensed.className} text-3xl md:text-5xl`}>
            Fun Run
          </h2>
          <div
            className={`${plusJakartaSans.className} flex gap-10 md:gap-40 text-base md:text-[28px]`}
          >
            <Link
              href="#section-umum"
              onClick={toggleExpand}
              className="hover:font-extrabold"
            >
              Umum
            </Link>
            <Link
              href="#section-partisipasi"
              onClick={toggleExpand}
              className="hover:font-extrabold"
            >
              Partisipasi
            </Link>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-4 md:gap-8 py-14 font-bold">
          <h2 className={`${barlowCondensed.className} text-3xl md:text-5xl`}>
            Trail Run
          </h2>
          <div
            className={`${plusJakartaSans.className} grid grid-cols-2 md:grid-cols-4 grid-rows-2 justify-center items-center text-center gap-2 md:gap-10 text-base md:text-[28px]`}
          >
            <Link
              href="#section-snk"
              onClick={toggleExpand}
              className="hover:font-extrabold"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="#section-perlengkapan"
              onClick={toggleExpand}
              className="hover:font-extrabold"
            >
              Perlengkapan
            </Link>
            <Link
              href="#section-teknislomba"
              onClick={toggleExpand}
              className="hover:font-extrabold"
            >
              Teknis Lomba
            </Link>
            <Link
              href="#section-sistemcot"
              onClick={toggleExpand}
              className="hover:font-extrabold row-span-2 leading-8"
            >
              Sistem Cut of Time
              <br />
              (COT)
            </Link>
            <Link
              href="#section-jalur"
              onClick={toggleExpand}
              className="hover:font-extrabold"
            >
              Jalur
            </Link>
            <Link
              href="#section-bentukmarka"
              onClick={toggleExpand}
              className="hover:font-extrabold"
            >
              Bentuk Marka
            </Link>
            <Link
              href="#section-penilaian"
              onClick={toggleExpand}
              className="hover:font-extrabold"
            >
              Penilaian
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full h-60 md:h-96 text-center">
        <Image
          className="object-cover object-center brightness-50"
          src="/rulesbg.png"
          alt="Running Event"
          layout="fill"
          objectFit="cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D6A48] via-transparent via-55% to-[#0A4732]"></div>
        <h1
          className={`${barlowCondensed.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFFFFF] text-4xl md:text-8xl w-full font-bold`}
        >
          RACE RULES & REGULATION
        </h1>
      </div>
      <div className="flex flex-row items-center gap-3 md:gap-7 justify-center px-5 md:px-10 relative -top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-full h-3 bg-gradient-to-r from-transparent to-[#F3E7D7]"></div>
        <div className="w-fit bg-[#F3E7D7] rounded-[20px] flex shrink-0 items-center justify-center py-5 px-7">
          <span className="text-[#0A4833] text-3xl md:text-6xl font-medium italic">
            Trail Run
          </span>
        </div>
        <div className="w-full h-3 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
      </div>
      <div className="bg-[#FCC612] text-[#0A4732] w-fit py-4 px-6 text-xl md:text-4xl mx-auto font-bold rounded-2xl mb-12">
        REGULASI <span className="italic">TRAIL RUN </span> L3B 2024
      </div>

      {/* Bagian konten yang akan ditampilkan secara dinamis */}
      <section
        id="section-umum"
        className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
      >
        <div className="flex items-center justify-center gap-3 pb-7">
          <h3 className="text-2xl md:text-4xl">Umum</h3>
          <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
        </div>
        <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
          <ol className="list-decimal space-y-0 pl-7 pr-1">
            <li>
              Kategori <em>Trail Run</em> (21,7 km) terbuka untuk peserta umum
              (pria & wanita). Sehat jasmani berusia di atas 17 tahun, batas
              maksimum umur 50 tahun, dan sebaiknya pernah mengikuti lomba lari.
              <br />
              Sub-Kategori:
              <ul className="list-disc pl-5 mt-2">
                <li>Umum Pria: 17–50 Tahun</li>
                <li>Umum wanita: 17–50 Tahun</li>
              </ul>
            </li>
            <li>
              Peserta <strong>WAJIB</strong> menggunakan sepatu dan celana
              olahraga.
            </li>
            <li>
              Apabila terdapat peserta yang sakit selama lari berlangsung, maka
              peserta mengizinkan staf medis untuk memberikan penanganan yang
              diperlukan untuk perawatan pasien.
            </li>
            <li>
              Wajib memahami dan mengikuti instruksi panitia dalam hal melakukan
              kegiatan lari dengan aman selama berada di jalur lari yang telah
              ditentukan panitia.
            </li>
            <li>
              Penyelenggara berhak merubah aturan kapan saja bilamana dianggap
              perlu dan sesuai dengan keadaan, baik sebelum dan pada saat{" "}
              <em>trail run</em> berlangsung tanpa pemberitahuan terlebih dahulu
              beserta alasannya.
            </li>
            <li>
              Untuk kelancaran acara dan kenyamanan berlari, peserta harus
              mengetahui betul kondisi kesehatannya saat akan berlari dan
              diwajibkan telah melakukan konsultasi kesehatan dengan dokter/
              <em>medical check-up</em> sebelum mengikuti kegiatan lomba.
            </li>
            <li>
              Risiko cedera kesehatan akibat berlari yang disebabkan peserta
              melanggar anjuran pihak dokter/medis bukan merupakan tanggung
              jawab penyelenggara.
            </li>
            <li>Budayakan 5S (Senyum, Sapa, Salam, Sopan, dan Santun).</li>
            <li>
              Membuang sampah pada tempat yang telah disediakan (berupa{" "}
              <em>trash bag</em> di setiap <em>water and food station</em>).
            </li>
            <li>Membawa obat-obatan pribadi.</li>
            <li>
              Memiliki asuransi kecelakaan atau kesehatan selama peserta
              mengikuti lomba.
            </li>
            <li>
              Membawa hasil <em>medical check up</em> pada saat pengambilan race
              pack.
            </li>
            <li>
              Membawa perlengkapan ketika kegiatan lomba berlangsung, yang
              terdiri dari;
              <ul className="list-disc pl-5 mt-2">
                <li>
                  <strong>RUTE</strong> (mohon untuk mengunduh file gpx yang
                  disediakan penyelenggara di situs kegiatan dan mencetak rute
                  yang disediakan)
                </li>
                <li>
                  <strong>Hidrasi</strong> (<em>soft flask</em>/botol terisi
                  minimal 250 mL setiap meninggalkan WS)
                </li>
                <li>
                  <strong>
                    BIB <em>number</em>
                  </strong>
                </li>
                <li>
                  <strong>Makanan ringan</strong>
                </li>
                <li>
                  <strong>
                    <em>Jersey</em> lari
                  </strong>
                </li>
                <li>
                  <strong>
                    <em>Vest bag</em>
                  </strong>
                </li>
                <li>
                  <strong>Obat-obatan dalam keadaan darurat</strong> (obat
                  merah, nyeri otot, plester, dll).
                </li>
                <li>
                  <strong>Uang tunai secukupnya</strong>
                </li>
                <li className="text-left">
                  <strong>
                    <em>Device</em> jalur
                  </strong>{" "}
                  (smartwatch/gadget)
                </li>
                <li>
                  <strong>Jas hujan</strong> (kondisi jika terjadi hujan) atau
                  jaket tahan air
                </li>
                <li>
                  <strong>Peluit</strong>
                </li>
                <li>
                  <strong>
                    Alumunium foil atau <em>survival blanket</em>
                  </strong>
                </li>
              </ul>
            </li>
          </ol>
          <div className="bg-[#F3E7D7] text-[#0A4732] font-semibold px-6 md:px-9 py-3 md:py-5 mt-5 rounded-[20px]">
            <h5 className="text-xl font-extrabold md:text-[30px]">Catatan</h5>
            <ul className="list-disc pl-5 mt-2 text-base md:text-[22px] leading-10">
              <li>Perlengkapan bersifat wajib saat acara berlangsung.</li>
              <li>
                Pengecekan perlengkapan secara acak akan dilakukan saat acara
                berlangsung.
              </li>
              <li>
                Sebagai bentuk sportivitas, setiap kekurangan perlengkapan akan
                menambah waktu finish sebanyak 30 menit.
              </li>
              <li>Barang yang tidak ada di daftar bersifat opsional.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tombol selengkapnya */}
      {!isExpanded && (
        <div className="relative w-full h-96 -top-96 left-1/2 transform -translate-x-1/2 ">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A4833]/0 via-[#0A4833]/2 to-[#0A4833]"></div>
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
            id="section-partisipasi"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="text-2xl md:text-4xl">Partisipasi</h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  <strong>KEDATANGAN</strong> peserta pukul 05.00 WIB di
                  Fakultas Pertanian Unpad Jatinangor.
                </li>
                <li>
                  Untuk Peserta yang menginap di Kampus Fakultas Pertanian Unpad
                  <strong>DIHARAPKAN</strong> bangun sebelum pukul 05.00 WIB.
                </li>
                <li>
                  Dilaksanakan <strong>PEMANASAN</strong> dan{" "}
                  <strong>PEMAHAMAN DASAR</strong> tentang lomba.
                </li>
                <li>
                  Peserta <em>Trail Run</em> akan diberangkatkan secara{" "}
                  <strong>SERENTAK</strong> baik
                  <strong>PELAJAR/UMUM</strong>.
                </li>
                <li>Peserta akan melewati jalur sepanjang 21,7 km.</li>
                <li>
                  Selama perjalanan, peserta akan melewati Pos{" "}
                  <strong>CHECKPOINT & FOOD STATION</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Terdapat 2 Pos Checkpoint, di KM 7 dan KM 14.</li>
                    <li>
                      Peserta akan menerima <strong>GELANG CHECKPOINT</strong>{" "}
                      di setiap POS-nya.
                    </li>
                    <li>
                      <strong>GELANG</strong> berguna agar{" "}
                      <strong>PANITIA</strong> mengetahui bahwa{" "}
                      <strong>PESERTA</strong>
                      benar-benar melewati <strong>JALUR</strong> yang telah
                      ditetapkan <strong>PANITIA</strong>.
                    </li>
                    <li>
                      Apabila peserta tidak memiliki salah satu{" "}
                      <strong>GELANG</strong> tersebut, maka akan dianggap{" "}
                      <strong>
                        PESERTA TIDAK MELEWATI JALUR YANG TELAH DISIAPKAN
                      </strong>
                      . Hal ini akan berpengaruh pada saat peserta melewati
                      garis <strong>FINISH</strong>, di mana jika{" "}
                      <strong>GELANG</strong> tidak lengkap, maka{" "}
                      <strong>PESERTA DINYATAKAN TIDAK MENANG</strong>.
                    </li>
                    <li>
                      Water and food station berada di KM 2,3; 6,1; 8; 10,8;
                      13,5;17,3; 19,5.
                    </li>
                  </ul>
                </li>
                <li>
                  Pos Medik berada di KM 0,04; 2,2; 4,3; 6,9; 9; 10,8; 11,6;
                  12,3; 14; 15,9; 17,6; 19,5.
                </li>
                <li>
                  Jika selama kegiatan lomba berlangsung, mengetahui peserta
                  yang mengalami keadaan yang tidak diinginkan, seperti cedera
                  sehingga peserta kesulitan untuk menggerakkan badannya, mohon
                  untuk memprioritaskan peserta tersebut dan mengantarkan ke
                  tempat petugas atau marshal terdekat. Tim medis dan tim
                  penyelamatan memiliki kewenangan untuk menghentikan peserta
                  dari melanjutkan lomba. Ini akan dilakukan dengan melepas atau
                  mencoret <strong>BIB</strong>.
                </li>
                <li>
                  Tidak diperkenankan membawa binatang peliharaan selama
                  melakukan kegiatan kegiatan ini.
                </li>
                <li>
                  Apabila <strong>TERSESAT</strong>, <strong>KEMBALI</strong> ke{" "}
                  <strong>MARKA TERAKHIR</strong> yang dilihat.
                </li>
                <li>
                  Apabila <strong>MEMOTONG JALUR</strong> Peserta akan{" "}
                  <strong>DIDISKUALIFIKASI</strong>.
                </li>
                <li>Marka menggunakan shrink line.</li>
                <li>
                  Lamanya <strong>COT</strong> yang <strong>PANITIA</strong>{" "}
                  berikan adalah 4,5 jam.
                </li>
                <li>
                  Apabila <strong>MELEBIHI</strong> 4,5 jam, maka peserta{" "}
                  <strong>TIDAK</strong> mendapatkan{" "}
                  <strong>MEDALI FINISHER</strong>.
                </li>
                <li>
                  Penilaian 100% berdasarkan{" "}
                  <strong>KECEPATAN DAN JUMLAH GELANG</strong>.
                </li>
              </ol>
            </div>
          </section>

          <div className="flex flex-row items-center gap-3 md:gap-7 justify-center px-10 py-10">
            <div className="w-full h-3 bg-gradient-to-r from-transparent to-[#F3E7D7]"></div>
            <div className="w-fit bg-[#F3E7D7] rounded-[20px] flex shrink-0 items-center justify-center py-5 px-7">
              <span className="text-[#0A4833] text-3xl md:text-6xl font-medium italic">
                Fun Run
              </span>
            </div>
            <div className="w-full h-3 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
          </div>
          <div className="bg-[#FCC612] text-[#0A4732] w-fit py-4 px-6 text-xl md:text-4xl mx-auto font-bold rounded-2xl mb-12">
            REGULASI <span className="italic">FUN RUN </span> L3B 2024
          </div>

          <section
            id="section-snk"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                SYARAT DAN KETENTUAN
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ul className="list-disc space-y-0 pl-7 pr-1">
                <li>
                  Kategori <em>Fun Run</em> (8,3 km) terbuka untuk peserta umum
                  (pria & wanita). Sehat jasmani berusia di atas 15 tahun, batas
                  maksimum umur 60 tahun, dan sebaiknya pernah mengikuti lomba
                  lari.
                </li>
                <li>
                  Peserta <strong>WAJIB</strong> menggunakan sepatu dan celana
                  olahraga.
                </li>
                <li>
                  Apabila terdapat peserta yang sakit selama lari berlangsung,
                  maka peserta mengizinkan staf medis untuk memberikan
                  penanganan yang diperlukan untuk perawatan pasien.
                </li>
                <li>
                  Wajib memahami dan mengikuti instruksi panitia dalam hal
                  melakukan kegiatan lari dengan aman selama berada di jalur
                  lari yang telah ditentukan panitia.
                </li>
                <li>
                  Penyelenggara berhak merubah aturan kapan saja bilamana
                  dianggap perlu dan sesuai dengan keadaan, baik sebelum dan
                  pada saat <em>fun run</em> berlangsung tanpa pemberitahuan
                  terlebih dahulu beserta alasannya.
                </li>
                <li>
                  Untuk kelancaran acara dan kenyamanan berlari, peserta harus
                  mengetahui betul kondisi kesehatannya saat akan berlari dan
                  dianjurkan telah melakukan konsultasi kesehatan dengan dokter
                  <em>medical check up</em> sebelum mengikuti kegiatan lomba.
                </li>
                <li>
                  Risiko cedera kesehatan akibat berlari yang disebabkan peserta
                  melanggar anjuran pihak dokter/medis bukan merupakan tanggung
                  jawab penyelenggara.
                </li>
                <li>
                  Tidak diperkenankan membawa binatang peliharaan selama
                  melakukan kegiatan kegiatan ini.
                </li>
                <li>
                  Membuang sampah pada tempat yang telah disediakan (berupa{" "}
                  <em>trash bag</em> di setiap <em>water and food station</em>).
                </li>
                <li>Budayakan 5S (Senyum,Sapa,Salam,Sopan,dan Santun).</li>
                <li>
                  Apabila <strong>TERSESAT</strong>, <strong>KEMBALI</strong> ke{" "}
                  <strong>MARKA TERAKHIR</strong> yang dilihat.
                </li>
                <li>
                  Apabila <strong>MEMOTONG JALUR</strong> Peserta akan{" "}
                  <strong>DIDISKUALIFIKASI</strong>.
                </li>
                <li>Membawa obat-obatan pribadi.</li>
                <li>
                  Memiliki asuransi kecelakaan atau kesehatan selama peserta
                  mengikuti lomba.
                </li>
                <li>
                  Jika selama kegiatan lomba berlangsung, mengetahui peserta
                  yang mengalami keadaan yang tidak diinginkan, seperti cedera
                  sehingga peserta kesulitan untuk menggerakkan badannya, mohon
                  untuk memprioritaskan peserta tersebut dan mengantarkan ke
                  tempat petugas atau marshal terdekat.
                </li>
                <li>
                  Tim medis dan tim penyelamatan memiliki kewenangan untuk
                  menghentikan peserta dari melanjutkan lomba. Ini akan
                  dilakukan dengan melepas atau mencoret <strong>BIB</strong>{" "}
                  peserta.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="section-perlengkapan"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                PERLENGKAPAN
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-disc space-y-0 pl-7 pr-1">
                <li>
                  <strong>Tempat air minum</strong> (peserta diwajibkan membawa
                  air minum dalam kemasan botol atau tas ransel), minimum 1.5
                  liter.
                </li>
                <li>
                  <strong>
                    BIB <em>number</em>
                  </strong>
                </li>
                <li>
                  <strong>
                    <em>Snack</em>
                  </strong>
                </li>
                <li>
                  <strong>
                    <em>Jersey</em> lari
                  </strong>
                </li>
                <li>
                  <strong>
                    <em>Vest bag</em>
                  </strong>
                </li>
                <li>
                  <strong>Obat-obatan dalam keadaan darurat</strong> (obat
                  merah, nyeri otot, plester, dll)
                </li>
                <li>
                  <strong>Uang tunai secukupnya</strong>
                </li>
                <li>
                  <strong>
                    <em>Device</em> jalur
                  </strong>{" "}
                  <em>(smartwatch/gadget)</em>
                </li>
                <li>
                  <strong>Jas hujan</strong> (kondisi jika terjadi hujan) atau
                  jaket tahan air
                </li>
              </ol>
            </div>
          </section>

          <section
            id="section-teknislomba"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                TEKNIS LOMBA
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ul className="list-disc space-y-0 pl-7 pr-1">
                <li>
                  <strong>AWAL KEDATANGAN</strong> peserta pukul 05.00 WIB di
                  Fakultas Pertanian Unpad Jatinangor.
                </li>
                <li>
                  Untuk Peserta yang menginap di Kampus Fakultas Pertanian Unpad{" "}
                  <strong>DIHARAPKAN</strong> bangun sebelum pukul{" "}
                  <strong>05.00 WIB</strong>.
                </li>
                <li>
                  Dilaksanakan <strong>PEMANASAN</strong> dan{" "}
                  <strong>PEMAHAMAN DASAR</strong> tentang lomba.
                </li>
                <li>
                  Peserta{" "}
                  <strong>
                    <em>FUN RUN</em>
                  </strong>{" "}
                  akan diberangkatkan setelah peserta{" "}
                  <strong>
                    <em>TRAIL RUN</em>
                  </strong>{" "}
                  berangkat dan dilakukan secara bersamaan baik{" "}
                  <strong>PELAJAR/UMUM</strong>.
                </li>
                <li>
                  Peserta memasuki <strong>POS 1</strong> dan memainkan games di{" "}
                  <strong>POS 1</strong>. Di akhir <em>games</em> peserta akan
                  diberi 1 pertanyaan dan diberi waktu 3 menit untuk menjawab.
                </li>
                <li>
                  Peserta memasuki <strong>POS 2</strong> dan mengambil
                  pertanyaan yang berhubungan dengan jawaban dari{" "}
                  <strong>POS 1</strong>.
                </li>
                <li>
                  Peserta memasuki <strong>POS 3</strong> dan peserta menyusun{" "}
                  <em>puzzle</em> yang merupakan jawaban dari{" "}
                  <strong>POS 1</strong> dan <strong>POS 2</strong> selama 3
                  menit.
                </li>
                <li>
                  Peserta memasuki <strong>POS 4</strong> lalu memainkan{" "}
                  <em>games</em> ketangkasan.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="section-jalur"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                JALUR
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ul className="list-disc space-y-0 pl-7 pr-1">
                <li>Peserta akan melewati jalur sepanjang 8,3 km.</li>
                <li>
                  Selama perjalanan peserta akan melewati Pos{" "}
                  <strong>
                    <em>GAMES &amp; FOOD and WATER STATION</em>
                  </strong>
                  .
                </li>
                <li>
                  Bentukan dari <strong>POS</strong> tersebut adalah:
                  <ol className="list-decimal space-y-2 ml-8">
                    <li>
                      Pos{" "}
                      <strong>
                        <em>GAMES</em>
                      </strong>
                    </li>
                    <li>
                      Jumlah Pos{" "}
                      <strong>
                        <em>GAMES</em>
                      </strong>{" "}
                      ada 4 Pos yaitu:
                    </li>
                    <li>
                      Pos Games 1 tentang{" "}
                      <strong>PENGETAHUAN DAN KETEPATAN</strong> terdapat di 1,1
                      km dari titik awal.
                    </li>
                    <li>
                      Pos Games 2 tentang <strong>STOP AND GO</strong> terdapat
                      di 2,8 km dari titik awal.
                    </li>
                    <li>
                      Pos Games 3 tentang <strong>KEKOMPAKAN</strong> terdapat
                      di 6,2 km dari titik awal.
                    </li>
                    <li>
                      Pos Games 4 tentang <strong>KETANGKASAN</strong> terdapat
                      di 7,8 km dari titik awal.
                    </li>
                  </ol>
                </li>
                <li>
                  Peserta harus menyelesaikan setiap <em>games</em> di setiap
                  Pos nya, dan akan mendapatkan stiker penanda menyelesaikan{" "}
                  <em>games</em> di Pos yang dilewati.
                </li>
                <li>
                  Stiker berguna supaya <strong>PANITIA</strong> mengetahui
                  bahwa <strong>PESERTA</strong> sudah melewati dan
                  menyelesaikan Pos <em>Games</em> yang telah ditetapkan{" "}
                  <strong>PANITIA</strong>.
                </li>
                <li>
                  Apabila saat peserta tidak memiliki salah satu Stiker tersebut
                  dianggap <strong>PESERTA TIDAK MELEWATI</strong> dan{" "}
                  <strong>
                    MENYELESAIKAN POS <em>GAMES</em>
                  </strong>{" "}
                  yang telah disiapkan, apabila saat memasuki{" "}
                  <strong>
                    <em>FINISH</em>
                  </strong>{" "}
                  dan <strong>STIKER</strong> tidak lengkap, maka{" "}
                  <strong>PESERTA DINYATAKAN TIDAK MENANG</strong>.
                </li>
                <li>
                  Terdapat{" "}
                  <strong>
                    {" "}
                    <em>WATER</em>
                  </strong>{" "}
                  and{" "}
                  <strong>
                    <em>FOOD STATION</em>
                  </strong>{" "}
                  yang akan dilewati oleh peserta di KM 2,3; 6,1; 8.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="section-bentukmarka"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                BENTUK MARKA
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ul className="list-disc space-y-0 pl-7 pr-1">
                <li>
                  Menggunakan <em>shrink line</em>
                </li>
              </ul>
            </div>
          </section>

          <section
            id="section-sistemcot"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                SISTEM <em>CUT OF TIME</em> (COT)
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ul className="list-disc space-y-0 pl-7 pr-1">
                <li>
                  Lamanya <strong>COT</strong> yang <strong>PANITIA</strong>{" "}
                  berikan adalah 3 jam
                </li>
                <li>
                  Apabila <strong>MELEBIHI</strong> 3 jam, maka peserta{" "}
                  <strong>TIDAK</strong> mendapatkan{" "}
                  <strong>MEDALI FINISHER</strong>.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="section-penilaian"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-20"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                PENILAIAN
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ul className="list-disc space-y-0 pl-7 pr-1 font-bold">
                <li>40% KEKOMPAKAN</li>
                <li>40% KETEPATAN</li>
                <li>20% KECEPATAN</li>
                <li>JUMLAH STIKER</li>
              </ul>
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
