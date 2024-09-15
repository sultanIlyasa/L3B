import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
const City = () => {
  return (
    <main className="min-h-screen">
      <section>
        <div className="text-center font-bold text-white mt-20 pt-20 text-4xl md:text-left md:mx-10 mb-10">
          <h1>City Guide</h1>
        </div>
        <div className="w-full bg-[#F3E7D7]">
          <div className="flex flex-row justify-center pt-10">
            <Image
              src="/guide/left.png"
              alt="Image 4"
              className="my-auto"
              width={150}
              height={100}
              quality={90}
            />
            <h1 className="text-center font-bold text-[#0A4833] text-xl md:text-3xl lg:text-4xl">
              Food & Beverages
            </h1>
            <Image
              src="/guide/right.png"
              alt="Image 4"
              className="my-auto"
              width={150}
              height={100}
              quality={90}
            />
          </div>
          {/* Card Section */}
          <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 w-full px-10 mb-20 pb-10 pt-10 gap-10  ">
            {/* Card 1 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/toleransi kopi.jpeg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Toleransi (10k-60k)
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Raya Jatinangor No.42b, Cibeusi, Kec. Jatinangor,
                    Kabupaten Sumedang, Jawa Barat 45367
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/backspace.jpeg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Backspace (6k-45k)
                  </h3>
                  <p className="text-white text-sm">
                    Dekat Pondok Kusuma Orange, Cikeruh, Kec. Jatinangor,
                    Kabupaten Sumedang, Jawa Barat 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/tiwal.jpeg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Titik Awal (6k-50k)
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Kp. Geulis No.21, Sayang, Kec. Jatinangor, Kabupaten
                    Sumedang, Jawa Barat 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/bakmi cikuda.jpeg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Bakmie Cikuda
                  </h3>
                  <p className="text-white text-sm">
                    Hegarmanah, Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat
                    45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/jhouse.jpg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Jatinangor House (15k-45k)
                  </h3>
                  <p className="text-white text-sm">
                    Jl.Kolonel Ahmad Syam Rt 03/04 no 71, Cikeruh, Jatinangor,
                    Sumedang Regency, West Java 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 6 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/coto.jpeg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Coto Makassar (8k-35k)
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Ahmad Syah No.128, Cikeruh, Kec. Jatinangor, Kabupaten
                    Sumedang, Jawa Barat 45363
                  </p>
                </div>
              </CardContent>
            </Card>
            {/* Tempat Wisata Lainnya */}
          </div>
          <div className="flex flex-row justify-center pt-10">
            <Image
              src="/guide/left.png"
              alt="Image 4"
              className="my-auto"
              width={150}
              height={100}
              quality={90}
            />
            <h1 className="text-center font-bold text-[#0A4833] text-xl md:text-3xl lg:text-4xl">
              Tempat Wisata & Lainnya
            </h1>
            <Image
              src="/guide/right.png"
              alt="Image 4"
              className="my-auto"
              width={150}
              height={100}
              quality={90}
            />
          </div>
          <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 w-full px-10 mb-20 pb-10 pt-10 gap-10  ">
            {/* Card 4 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/jatos.jpg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Jatinangor Town Square
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Raya Jatinangor No 150, Cikeruh, Kec Jatinangor,
                    Kabupaten Sumedang, Jawa Barat 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/golf.jpg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Jatinangor National Golf & Resort
                  </h3>
                  <p className="text-white text-sm">
                    Seberang Gerbang A UNPAD Jatinangor Cibeusi, Jatinangor,
                    Sumedang Regency, West Java 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 6 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/city-guide/janspark.jpeg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Jans Park
                  </h3>
                  <p className="text-white text-sm">
                    Hegarmanah, Jatinangor, Sumedang Regency, West Java 45363
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default City;
