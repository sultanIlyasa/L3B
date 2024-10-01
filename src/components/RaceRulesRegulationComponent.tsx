"use client";
import { useState, useEffect } from "react";
import { plusJakartaSans, barlowCondensed } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ExpandableLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExpandableLink = ({ href, children }: ExpandableLinkProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    if (isExpanded) {
      // If already expanded, scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not expanded, toggle expansion
      setIsExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    // Scroll to section after expansion
    if (isExpanded) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isExpanded, href]);

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7] ${isExpanded ? 'font-extrabold' : ''}`}
    >
      {children}
    </Link>
  );
};

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
        <div className="mx-auto w-[340px] md:w-full flex flex-col items-center justify-center gap-5 md:gap-8 pt-14 font-bold">
          <h2 className={`${barlowCondensed.className} text-3xl md:text-5xl`}>
            Trail Run
          </h2>
          <div
            className={`${plusJakartaSans.className} grid grid-cols-2 md:grid-cols-3 grid-rows-2 justify-center items-center text-center gap-2 md:gap-6 text-sm md:text-xl`}
          >
            <ExpandableLink href="#section-general1">General</ExpandableLink>
            <ExpandableLink href="#section-requirements1">Requirements</ExpandableLink>
            <ExpandableLink href="#section-race-rules">Race Rules</ExpandableLink>
            <ExpandableLink href="#section-mandatory-gear1">Mandatory Gear</ExpandableLink>
            <ExpandableLink href="#section-safety-medical1">Safety and Medical Aid</ExpandableLink>
            <ExpandableLink href="#section-cpws">Checkpoints and Water Stations</ExpandableLink>

            <Link
              href="#section-general1"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              General
            </Link>
            <Link
              href="#section-requirements1"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Requirements
            </Link>
            <Link
              href="#section-race-rules"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Race Rules
            </Link>
            <Link
              href="#section-mandatory-gear1"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Mandatory Gear
            </Link>
            <Link
              href="#section-safety-medical1"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Safety and Medical Aid
            </Link>
            <Link
              href="#section-cpws"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Checkpoints and Water Stations
            </Link>
          </div>
        </div>
        <div className="mx-auto w-[340px] md:w-full flex flex-col items-center justify-center gap-5 md:gap-8 py-14 font-bold">
          <h2 className={`${barlowCondensed.className} text-3xl md:text-5xl`}>
            Fun Run
          </h2>
          <div
            className={`${plusJakartaSans.className}  grid grid-cols-2 md:grid-cols-4 grid-rows-2 justify-center items-center text-center gap-2 md:gap-6 text-sm md:text-xl`}
          >
            <Link
              href="#section-general2"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              General
            </Link>
            <Link
              href="#section-requirements2"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Requirements
            </Link>
            <Link
              href="#section-mandatory-gear2"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Mandatory Gear
            </Link>
            <Link
              href="#section-pgws"
              onClick={toggleExpand}
              className="hover:font-extrabold row-span-2 leading-8 border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Post Games and
              <br/>Water Stations
              
            </Link>
            <Link
              href="#section-competition-techniques"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Competition Techniques
            </Link>
            <Link
              href="#section-assesment"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Assessment
            </Link>
            <Link
              href="#section-safety-medical2"
              onClick={toggleExpand}
              className="hover:font-extrabold border-[1px] py-2 px-4 rounded-[40px] border-[#F3E7D7]"
            >
              Safety and Medical Aid
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
        id="section-general1"
        className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
      >
        <div className="flex items-center justify-center gap-3 pb-7">
          <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
            GENERAL
          </h3>
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
              <ul className="list-disc pl-6">
                <li>Umum Pria: 17–50 Tahun</li>
                <li>Umum wanita: 17–50 Tahun</li>
              </ul>
            </li>
            <li>
              Mengikuti instruksi panitia untuk menjaga keamanan selama di jalur
              lari yang ditentukan.
            </li>
            <li>
              Setiap peserta wajib berkonsultasi dengan dokter/
              <em>medical check-up</em> sebelum mengikuti lomba.
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
          {/* Section Requirements 1 */}
          <section
            id="section-requirements1"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                REQUIREMENTS
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>Umur 17-50 tahun, dalam kondisi sehat jasmani.</li>
                <li>
                  Membawa peralatan pribadi:
                  <ul className="list-disc pl-6">
                    <li>
                      Membawa obat-obatan pribadi. Panitia tidak bertanggung
                      jawab atas cedera akibat melanggar anjuran medis.
                    </li>
                    <li>
                      <strong>WAJIB</strong> membawa hasil{" "}
                      <em>medical check-up</em> (surat keterangan sehat) pada
                      saat pengambilan <em>race pack</em>.
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
                  <ul className="list-disc pl-6">
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
                  <ul className="list-disc pl-6">
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
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                RACE RULES
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Kedatangan dan Persiapan:
                  <ul className="list-disc pl-6">
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
                  <ul className="list-disc pl-6">
                    <li>Peserta diberangkatkan secara serentak.</li>
                    <li>Peserta akan melewati jalur sepanjang 21,7 km.</li>
                    <li>Terdapat 2 pos checkpoint di KM 6,7 dan 15,0.</li>
                    <li>
                      Peserta menerima gelang di setiap pos checkpoint. Jika
                      peserta tidak memiliki gelang checkpoint, peserta dianggap
                      tidak melewati jalur yang telah ditentukan dan dinyatakan
                      tidak menyelesaikan race.
                    </li>
                    <li>
                      {" "}
                      Panitia dapat memeriksa perlengkapan pelari secara acak.
                      Jika terdapat pelari yang tidak membawa{" "}
                      <em>mandatory gear</em>, maka jika terjadi sesuatu hal
                      yang tidak diinginkan dari peserta tidak menjadi tanggung
                      jawab penuh panitia.
                    </li>
                    <li>
                      Jika berhasil menyelesaikan lomba sebelum COT berakhir,
                      pelari akan mendapatkan medali finisher.
                    </li>
                  </ul>
                </li>
                <li>
                  Larangan:
                  <ul className="list-disc pl-6">
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
                  <ul className="list-disc pl-6">
                    <li> Cut-off time (COT) yang diberikan adalah 5,5 jam.</li>
                    <li>
                      Peserta yang melebihi batas waktu tidak mendapatkan medali
                      finisher.
                    </li>
                  </ul>
                </li>
                <li>
                  Penilaian
                  <ul className="list-disc pl-6">
                    <li>
                      {" "}
                      Berdasarkan kecepatan dan jumlah gelang checkpoint yang
                      dikumpulkan.
                    </li>
                  </ul>
                </li>
                <li>
                  Sanksi dan Diskualifikasi
                  <ul className="list-disc pl-6">
                    <li>
                      Mengambil jalan pintas <strong>[Diskualifikasi]</strong>
                    </li>
                    <li>
                      Menolak mengikuti perintah dari pengawas lomba, petugas
                      lomba, kepala pos, tim medis atau penyelamat
                      <strong>[Diskualifikasi]</strong>
                    </li>
                    <li>
                      Mencurangi (misalnya menggunakan moda transportasi dalam
                      lomba) <strong>[Diskualifikasi]</strong>
                    </li>
                    <li>
                      Tidak menghormati orang lain (anggota panitia atau pelari
                      lain) <strong>[Penalti 30 menit]</strong>
                    </li>
                    <li>
                      Kehilangan nomor peserta lomba selama lomba{" "}
                      <strong>[Penalti 30 menit]</strong>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Section Mandatory Gear 1 */}
          <section
            id="section-mandatory-gear1"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                MANDATORY GEAR
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                Peserta wajib membawa perlengkapan berikut saat lomba
                berlangsung untuk perlengkapan dan keselamatan peserta:
                <ul className="list-disc pl-6">
                  <li>
                    Rute: Mengunduh file GPX yang disediakan dan mencetak peta
                    rute.{" "}
                    <a
                      href="https://drive.google.com/file/d/1ZFw3h2965VnJj6SIDoDL4Qf7TiO4IOAt/view?usp=share_link"
                      className="underline hover:text-blue-600"
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
                    Medical kit menyesuaikan kebutuhan pribadi: Plester/perban,
                    antiseptik/betadine, obat-obatan pribadi.
                  </li>
                  <li>Device Jalur: Smartwatch atau gadget untuk navigasi.</li>
                  <li>Jas Hujan/Jaket tahan air dan tahan angin.</li>
                  <li>Peluit.</li>
                  <li>Alumunium Foil atau Survival Blanket.</li>
                </ul>
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

          {/* Section Safety and Medical Aid 1 */}
          <section
            id="section-safety-medical1"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                SAFETY AND MEDICAL AID
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Pos Medik:
                  <ul className="list-disc pl-6">
                    <li>Pos medik tersedia di KM 3,4 | 11,4 | dan 20,7</li>
                  </ul>
                </li>
                <li>
                  Jika kondisi kesehatan peserta tidak memungkinkan untuk
                  melanjutkan, panitia tim medis berhak memberikan tindakan yang
                  diperlukan termasuk menghentikan peserta lomba.
                </li>
                <li>
                  Jika ada pelari yang tampak dalam kesulitan atau mengalami
                  cedera serius, silakan lakukan langkah berikut untuk
                  mendapatkan bantuan
                  <ul className="list-disc pl-6">
                    <li>Pergi ke pos pertolongan pertama.</li>
                    <li>
                      Meminta pelari lain untuk memberitahukan tim medis/panitia
                      terdekat.
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
            id="section-cpws"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                CHECKPOINTS AND WATER STATIONS
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Checkpoints:
                  <ul className="list-disc pl-6">
                    <li>Terdapat 2 pos checkpoint di KM 6,7 dan KM 15</li>
                    <li>
                      Setiap peserta akan menerima gelang di setiap pos
                      checkpoint.
                    </li>
                  </ul>
                </li>
                <li>
                  Water and Food Stations:
                  <ul className="list-disc pl-6">
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
            id="section-general2"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                GENERAL
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Kategori Fun Run (8,3 km) terdiri dari 1 kelompok berisi 4
                  orang. Terbuka untuk peserta umum (pria & wanita) berusia
                  15-60 tahun dan sebaiknya pernah mengikuti lomba lari.
                </li>
                <li>
                  Mengikuti instruksi panitia untuk menjaga keamanan selama di
                  jalur lari yang ditentukan.
                </li>
                <li>
                  Setiap kelompok menyetujui surat keterangan sehat{" "}
                  <a
                    href="https://docs.google.com/document/d/1kFOEfw9MSTE3eIRLidoOz1LCCh3dmqfwpBlesBkXHgA/edit"
                    className="underline hover:text-blue-600"
                  >
                    (link template disini)
                  </a>{" "}
                  dan wajib membawa surat tersebut saat pengambilan racepack.
                </li>
                <li>
                  Setiap peserta mengetahui cara mengatasi masalah fisik atau
                  mental akibat kelelahan, masalah pencernaan, nyeri otot atau
                  sendi, dan penyakit ringan saat sendiri. Keselamatan pribadi
                  berada di tangan peserta itu sendiri untuk mengantisipasi dan
                  menyesuaikan diri dengan potensi masalah. Panitia medic kami
                  akan selalu tersedia di titik-titik tertentu.
                </li>
                <li>
                  Penyelenggara berhak merubah aturan kapan saja jika
                  diperlukan, dan setiap perubahan akan diberitahukan kepada
                  peserta melalui akun Instagram resmi kami setelahnya.
                </li>
              </ol>
            </div>
          </section>

          {/* Section Requirements 2 */}
          <section
            id="section-requirements2"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                REQUIREMENTS
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>Umur 15-60 tahun, dalam kondisi sehat jasmani.</li>
                <li>
                  Membawa peralatan pribadi:
                  <ul className="list-disc pl-6">
                    <li>
                      Membawa obat-obatan pribadi. Panitia tidak bertanggung
                      jawab atas cedera akibat melanggar anjuran medis.
                    </li>
                    <li>
                      <strong>WAJIB</strong> membawa surat keterangan sehat pada
                      saat pengambilan race pack.
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
                  Etika dan Tanggung Jawab:
                  <ul className="list-disc pl-6">
                    <li>
                      Membudayakan 5S (Senyum, Sapa, Salam, Sopan, dan Santun).
                    </li>
                    <li>Membuang sampah pada tempat yang telah disediakan.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Section Competition Techniques */}
          <section
            id="section-competition-techniques"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                COMPETITION TECHNIQUES
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Kedatangan dan Persiapan:
                  <ul className="list-disc pl-6">
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
                  <ul className="list-disc pl-6">
                    <li>Peserta diberangkatkan secara serentak.</li>
                    <li>Peserta akan melewati jalur sepanjang 8,3 km.</li>
                    <li>Cut-off time (COT) yang diberikan adalah 3 jam.</li>
                    <li>
                      Peserta wajib menyelesaikan Post Games 1 sampai 3 untuk
                      menyelesaikan lomba dan akan mendapatkan stiker sebagai
                      tanda penyelesaian di tiap pos. Stiker ini berguna untuk
                      memberi tahu panitia bahwa peserta telah melewati dan
                      menyelesaikan post.
                    </li>
                    <li>
                      Peserta dianggap berhasil menyelesaikan lomba jika sudah
                      dapat stiker di post 1-3 dan sebelum COT berakhir. Hanya
                      peserta yang memenuhi syarat tersebut yang akan
                      mendapatkan medali finisher.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Section Mandatory Gear 2 */}
          <section
            id="section-mandatory-gear2"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                MANDATORY GEAR
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                Peserta wajib membawa perlengkapan berikut saat lomba
                berlangsung untuk perlengkapan dan keselamatan peserta:
                <ul className="list-disc pl-6">
                  <li>
                    Rute: Mengunduh file GPX yang disediakan dan mencetak peta
                    rute.{" "}
                    <a
                      href="https://drive.google.com/file/d/16-FimSDxBhsoNeUT7B8FWxV59SY6z6_m/view"
                      className="underline hover:text-blue-600"
                    >
                      Download gpx klik ini
                    </a>
                  </li>
                  <li>
                    Soft flask/botol ringan dengan kapasitas minimal 250 mL
                    setiap meninggalkan water station (WS).
                  </li>
                  <li>BIB Number dan Slayer dari panitia.</li>
                  <li>
                    Makanan/gel/batangan/dll (sesuai selera pelari) untuk
                    kebutuhan nutrisi selama lomba.
                  </li>
                  <li>Jersey dan sepatu yang sesuai untuk jalur lomba.</li>
                  <li>Vest Bag: Tas untuk menyimpan perlengkapan wajib.</li>
                  <li>
                    Medical kit menyesuaikan kebutuhan pribadi: Plester/perban,
                    antiseptik/betadine, obat-obatan pribadi.
                  </li>
                  <li>Device Jalur: Smartwatch atau gadget untuk navigasi.</li>
                  <li>Jas Hujan/Jaket tahan air dan tahan angin.</li>
                </ul>
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
                    opsional.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Post Games and Water Stations*/}
          <section
            id="section-pgws"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                POST GAMES AND WATER STATIONS
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Post games:
                  <ul className="list-disc pl-6">
                    <li>
                      Terdapat 3 pos Post Games di KM 1.4 | 5,3 | dan 7,2.
                    </li>
                    <li>
                      Setiap peserta akan menerima gelang di setiap pos
                      checkpoint.
                    </li>
                  </ul>
                </li>
                <li>
                  Water and Food Stations:
                  <ul className="list-disc pl-6">
                    <li>Berada di KM 2,0 dan 5,7.</li>
                    <li>
                      Sampah harus dibuang di tempat yang disediakan (trash bag
                      di setiap station).
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section
            id="section-assesment"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-20"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                ASSESMENT
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

          {/* Section Safety and Medical Aid 2 */}
          <section
            id="section-safety-medical2"
            className="text-[#F3E7D7] w-full px-5 md:px-10 pb-14"
          >
            <div className="flex items-center justify-center gap-3 pb-7">
              <h3 className="w-max whitespace-nowrap text-2xl md:text-4xl font-bold">
                SAFETY AND MEDICAL AID
              </h3>
              <div className="w-full h-2 bg-gradient-to-r from-[#F3E7D7] to-transparent "></div>
            </div>
            <div className="py-8 px-5 md:px-14 text-justify rounded-xl bg-[#0D6A48] text-[#E3F6EB] max-w-full mx-auto text-lg md:text-[22px] leading-10">
              <ol className="list-decimal space-y-0 pl-7 pr-1">
                <li>
                  Pos Medik:
                  <ul className="list-disc pl-6">
                    <li>Pos medik tersedia di KM 3,4 dan 7,2</li>
                  </ul>
                </li>
                <li>
                  Jika kondisi kesehatan peserta tidak memungkinkan untuk
                  melanjutkan, panitia tim medis berhak memberikan tindakan yang
                  diperlukan termasuk menghentikan peserta lomba.
                </li>
                <li>
                  Jika ada pelari yang tampak dalam kesulitan atau mengalami
                  cedera serius, silakan lakukan langkah berikut untuk
                  mendapatkan bantuan:
                  <ul className="list-disc pl-6">
                    <li>Pergi ke pos pertolongan pertama.</li>
                    <li>
                      Meminta pelari lain untuk memberitahukan tim medis/panitia
                      terdekat.
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
