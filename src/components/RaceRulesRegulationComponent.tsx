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
            Trail Run
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
            Fun Run
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
              Kategori <em>Trail Run</em> (21,4km) terbuka untuk peserta umum
              (pria & wanita) berusia 17-50 tahun dan sebaiknya pernah mengikuti
              lomba lari.
              <br />
              Sub-Kategori:
              <ul className="list-disc pl-5 mt-2">
                <li>Umum Pria: 17–50 Tahun</li>
                <li>Umum wanita: 17–50 Tahun</li>
              </ul>
            </li>
            <li>
              Mengikuti instruksi panitia untuk menjaga keamanan selama di jalur
              lari yang ditentukan
            </li>
            <li>
              Setiap peserta wajib berkonsultasi dengan dokter/medical check-up
              sebelum mengikuti lomba.
            </li>
            <li>
              Setiap peserta mengetahui cara mengatasi masalah fisik atau mental
              akibat kelelahan, masalah pencernaan, nyeri otot atau sendi, dan
              penyakit ringan saat sendiri. Keselamatan pribadi berada di tangan
              peserta itu sendiri untuk mengantisipasi dan menyesuaikan diri
              dengan potensi masalah. Panitia medic kami akan selalu tersedia di
              titik-titik tertentu.
            </li>
            <li>
              Penyelenggara berhak merubah aturan kapan saja jika diperlukan,
              dan setiap perubahan akan diberitahukan kepada peserta melalui
              akun Instagram resmi kami setelahnya.
            </li>
            <li>
              Informasi pengambilan race pack akan diinfokan di Instagram resmi
              kami.
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
          {/* Section Requirements */}
          <section
            id="section-requirements"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="text-2xl md:text-4xl">Requirements</h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>Umur 17-50 tahun, dalam kondisi sehat jasmani.</li>
                <li>
                  Membawa peralatan pribadi:
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Membawa obat-obatan pribadi. Panitia tidak bertanggung
                      jawab atas cedera akibat melanggar anjuran medis.
                    </li>
                    <li>
                      <strong>WAJIB</strong> membawa hasil{" "}
                      <em>medical check-up</em>
                      (surat keterangan sehat) pada saat pengambilan{" "}
                      <em>race pack</em>.
                    </li>
                    <li>
                      Memiliki asuransi kecelakaan atau kesehatan selama
                      mengikuti lomba.
                    </li>
                    <li>
                      Membawa <em>mandatory gear</em> selama lomba (kami
                      sebutkan di bawah) untuk kelengkapan dan keselamatan
                      peserta.
                    </li>
                  </ul>
                </li>
                <li>
                  Kesehatan:
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Disarankan memiliki pengalaman mengikuti lomba lari.
                    </li>
                    <li>
                      Konsultasi kesehatan dengan dokter sangat disarankan
                      sebelum berlari.
                    </li>
                  </ul>
                </li>
                <li>
                  Etika dan Tanggung Jawab:
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Membudayakan 5S (Senyum, Sapa, Salam, Sopan, dan Santun).
                    </li>
                    <li>Membuang sampah pada tempat yang telah disediakan.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Section Race Rules */}
          <section
            id="section-race-rules"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="text-2xl md:text-4xl">Race Rules</h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Kedatangan dan Persiapan:
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Race village dibuka dari jam 3.30 WIB. Peserta harus tiba
                      di Fakultas Pertanian Unpad Jatinangor paling lambat pukul
                      05.00 WIB. Start/Flag off di jam 05.30 WIB. .
                    </li>
                    <li>
                      Disediakan tempat menginap sederhana di Fakultas
                      Pertanian, UNPAD. Bagi peserta yang menginap, diharapkan
                      bangun sebelum pukul 05.00 WIB.
                    </li>
                    <li>
                      Dilakukan pemanasan dan pengarahan dasar tentang lomba
                      sebelum dimulai.
                    </li>
                  </ul>
                </li>
                <li>
                  Pelaksanaan Lomba:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Peserta diberangkatkan secara serentak.</li>
                    <li>Peserta akan melewati jalur sepanjang 21,7 km.</li>
                    <li>Terdapat 2 pos checkpoint di KM 6,7 dan 15,0</li>
                    <li>
                      Peserta menerima gelang di setiap pos checkpoint. Jika
                      peserta tidak memiliki gelang checkpoint, peserta dianggap
                      tidak melewati jalur yang telah ditentukan dan dinyatakan
                      tidak menyelesaikan race
                    </li>
                    <li>
                      {" "}
                      Panitia dapat memeriksa perlengkapan pelari secara acak.
                      Jika terdapat pelari yang tidak membawa{" "}
                      <em>mandatory gear</em>, maka jika terjadi sesuatu hal
                      yang tidak diinginkan dari peserta tidak menjadi tanggung
                      jawab penuh panitia
                    </li>
                    <li>
                      Jika berhasil menyelesaikan lomba sebelum COT berakhir,
                      pelari akan mendapatkan medali finisher
                    </li>
                  </ul>
                </li>
                <li>
                  Larangan:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Tidak diperkenankan membawa binatang peliharaan.</li>
                    <li>
                      Dilarang memotong jalur, jika terjadi peserta akan
                      didiskualifikasi.
                    </li>
                    <li>
                      Apabila tersesat, peserta harus kembali ke marka terakhir
                      yang dilihat.
                    </li>
                  </ul>
                </li>
                <li>
                  Batas Waktu:
                  <ul className="list-disc pl-5 mt-2">
                    <li> Cut-off time (COT) yang diberikan adalah 5,5 jam.</li>
                    <li>
                      Peserta yang melebihi batas waktu tidak mendapatkan medali
                      finisher.
                    </li>
                  </ul>
                </li>
                <li>
                  Penilaian
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      {" "}
                      Berdasarkan kecepatan dan jumlah gelang checkpoint yang
                      dikumpulkan.
                    </li>
                  </ul>
                </li>
                <li>
                  Sanksi dan Diskualifikasi
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      {" "}
                      Mengambil jalan pintas <strong>[Diskualifikasi]</strong>
                    </li>
                    <li>
                      {" "}
                      Menolak mengikuti perintah dari pengawas lomba, petugas
                      lomba, kepala pos, tim medis atau penyelamat{" "}
                      <strong>[Diskualifikasi]</strong>
                    </li>
                    <li>
                      {" "}
                      Mencurangi (misalnya menggunakan moda transportasi dalam
                      lomba) <strong>[Diskualifikasi]</strong>
                    </li>
                    <li>
                      {" "}
                      Tidak menghormati orang lain (anggota panitia atau pelari
                      lain) <strong>[Penalti 30 menit]</strong>
                    </li>
                    <li>
                      {" "}
                      Kehilangan nomor peserta lomba selama lomba{" "}
                      <strong>[Penalti 30 menit]</strong>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Section Mandatory Gear */}
          <section
            id="section-mandatory-gear"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="text-2xl md:text-4xl">Mandatory Gear</h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Peserta wajib membawa perlengkapan berikut saat lomba
                  berlangsung untuk perlengkapan dan keselamatan peserta:
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Rute: Mengunduh file GPX yang disediakan dan mencetak peta
                      rute.{" "}
                      <a
                        href="https://drive.google.com/file/d/1ZFw3h2965VnJj6SIDoDL4Qf7TiO4IOAt/view?usp=share_link"
                        className="underline"
                      >
                        Download gpx klik ini
                      </a>
                    </li>
                    <li>
                      Soft flask/botol ringan dengan kapasitas minimal 250 mL
                      setiap meninggalkan water station (WS).
                    </li>
                    <li>
                      Makanan/gel/batangan/dll (sesuai selera pelari) untuk
                      kebutuhan nutrisi selama lomba.
                    </li>
                    <li>
                      Jersey dari panitia dan sepatu yang sesuai untuk jalur
                      lomba.
                    </li>
                    <li>Vest Bag: Tas untuk menyimpan perlengkapan wajib.</li>
                    <li>
                      Medical kit menyesuaikan kebutuhan pribadi:
                      Plester/perban, antiseptik/betadine, obat-obatan pribadi.
                    </li>
                    <li>
                      Device Jalur: Smartwatch atau gadget untuk navigasi.
                    </li>
                    <li>Jas Hujan/Jaket tahan air dan tahan angin.</li>
                    <li>Peluit.</li>
                    <li>Alumunium Foil atau Survival Blanket.</li>
                  </ul>
                </li>
              </ol>
              <div className="bg-[#F3E7D7] text-[#0A4732] font-semibold px-6 md:px-9 py-3 md:py-5 mt-5 rounded-[20px]">
                <h5 className="text-xl font-extrabold md:text-[30px]">
                  Catatan
                </h5>
                <ul className="list-disc pl-5 mt-2 text-base md:text-[22px] leading-10">
                  <li>
                    Pengecekan perlengkapan akan dilakukan secara acak selama
                    acara. Jika terdapat pelari yang tidak membawa{" "}
                    <em>mandatory gear</em>, maka jika terjadi sesuatu hal yang
                    tidak diinginkan dari peserta tidak menjadi tanggung jawab
                    penuh panitia. Barang yang tidak ada dalam daftar bersifat
                    opsional.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Safety and Medical Aid */}
          <section
            id="section-safety-medical"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="text-2xl md:text-4xl">Safety and Medical Aid</h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Pos Medik:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Pos medik tersedia di KM 3,4 | 11,4 | dan 20,7</li>
                  </ul>
                </li>
                <li>
                  Jika kondisi kesehatan peserta tidak memungkinkan untuk
                  melanjutkan, panitia tim medis berhak memberikan tindakan yang
                  diperlukan termasuk menghentikan peserta lomba
                </li>
                <li>
                  Jika ada pelari yang tampak dalam kesulitan atau mengalami
                  cedera serius, silakan lakukan langkah berikut untuk
                  mendapatkan bantuan
                  <ul className="list-disc pl-5 mt-2">
                    <li>Pergi ke pos pertolongan pertama.</li>
                    <li>
                      Meminta pelari lain untuk memberitahukan tim medis/panitia
                      terdekat .
                    </li>
                    <li>
                      Semua pelari harus membantu siapa saja yang dalam bahaya
                      dan memberitahukan pos medik.
                    </li>
                  </ul>
                </li>
                <li>
                  Biaya yang timbul untuk perawatan medis, baik darurat maupun
                  evakuasi, adalah tanggung jawab pelari sendiri beserta biaya
                  transportasi dari titik evakuasi.
                </li>
              </ol>
            </div>
          </section>

          {/* Section Checkpoints and Water Stations*/}
          <section
            id="section-safety-medical"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="text-2xl md:text-4xl">Safety and Medical Aid</h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Checkpoints:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Terdapat 2 pos checkpoint di KM 6,7 dan KM 15</li>
                    <li>
                      Setiap peserta akan menerima gelang di setiap pos
                      checkpoint.
                    </li>
                  </ul>
                </li>
                <li>
                  Water and Food Stations:
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Berada di KM 2,0 | 5,7 | 8,3 | 10,6 | 13,2 | 16,9 | dan
                      19,2 .
                    </li>
                    <li>
                      Sampah harus dibuang di tempat yang disediakan (trash bag
                      di setiap station).
                    </li>
                  </ul>
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
