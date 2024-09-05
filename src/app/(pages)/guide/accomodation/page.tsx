import React from "react";
import { barlowCondensed } from "@/app/fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const Akomodasi = () => {
  return (
    <main className="min-h-screen">
      <h1
        className={`text-[#F3E7D7] mx-auto text-3xl md:text-4xl lg:text-6xl font-bold text-center mt-32 ${barlowCondensed.className}`}
      >
        Akomodasi
      </h1>
      <div className="flex flex-col w-full bg-[#F3E7D7] px-10">
        <Card>
          <CardHeader>
            <Image
              src={"/gulf.png"}
              alt="logo"
              className="md:w-[156px] md:h-[60px] w-[128px] h-[50px]"
              width={170}
              height={60}
            ></Image>
            <CardTitle>Hotel 1</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget nisl nec elit fermentum tincidunt. Nullam nec ex at orci
              tincidunt.
            </CardDescription>
          </CardContent>
          <CardFooter>Hotel 1</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hotel 1</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget nisl nec elit fermentum tincidunt. Nullam nec ex at orci
              tincidunt.
            </CardDescription>
          </CardContent>
          <CardFooter>Hotel 1</CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Akomodasi;
