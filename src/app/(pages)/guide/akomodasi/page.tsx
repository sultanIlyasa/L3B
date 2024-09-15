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
const Akomodasi = () => {
  return (
    <main className="min-h-screen">
      <section>
        <div className="text-center font-bold text-white mt-20 pt-20 text-4xl md:text-left md:mx-10 mb-10">
          <h1>Akomodasi</h1>
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
              Hotel & Penginapan
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
                    src="/guide/akomodasi/Pinewood.png"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Apartemen Pinewood
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Raya Jatinangor No.140, Cikeruh, Kec. Jatinangor,
                    Kabupaten Sumedang, Jawa Barat 40395
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto  overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/akomodasi/Skyland.png"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Skyland City Hotel Jatinangor
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Raya Jatinangor No.1, Hegarmanah, Kec. Jatinangor,
                    Kabupaten Sumedang, Jawa Barat 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto  overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/akomodasi/Taman melati.png"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Apartemen Taman Melati
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Cikuda, Hegarmanah, Kec. Jatinangor, Jatinagor,
                    Kabupaten Sumedang, Jawa Barat 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto  overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/akomodasi/Easton.jpg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Apartemen Easton Park
                  </h3>
                  <p className="text-white text-sm">
                    Cibeusi, Jatinangor, Kabupaten Sumedang, Jawa Barat, 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/akomodasi/Yokotel.png"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Yokotel Hotel Jatinangor
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Raya Cibeusi No.39, Cibeusi, Kec. Jatinangor, Kabupaten
                    Sumedang, Jawa Barat 45363
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 6 */}
            <Card className="bg-[#0A4833] w-80 h-96 shadow-lg md:mx-auto  overflow-hidden rounded-2xl">
              <CardContent className="p-0 relative h-full">
                <div className="h-3/4 overflow-hidden rounded-t-2xl">
                  <Image
                    src="/guide/akomodasi/RedDoorz.jpg"
                    alt="Apartemen Pinewood"
                    className="w-full h-full object-cover"
                    width={400}
                    height={315}
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A4833] p-4  -mt-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    RedDoorz
                  </h3>
                  <p className="text-white text-sm">
                    Jl. Ahmad Syah No.128, Cikeruh, Kec. Jatinangor, Kabupaten
                    Sumedang, Jawa Barat 45363
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

export default Akomodasi;
