import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="mx-auto flex flex-col w-[100%] p-2 bg-[#F3E7D7]">
      <h1 className="font-bold text-center">Stay in touch</h1>
      <div className="flex flex-row mt-2 mx-auto">
        <div className=" mx-2 rounded-xl px-4 py-2 text-black outline outline-1 outline-black hover:bg-gray-200">
          l3b2024@gmail.com
        </div>
        <div className="mx-2 rounded-xl text-black outline outline-1 outline-black hover:bg-gray-200"></div>
        <div className=" flex mx-2 rounded-xl px-1 items-center py-1 text-black outline outline-1 outline-black hover:bg-gray-200">
          <Image
            src={"/instagram.png"}
            alt="logo"
            className="mx-auto"
            width={30}
            height={30}
          ></Image>
        </div>
        <div className=" flex mx-2 rounded-xl px-1 items-center py-1 text-black outline outline-1 outline-black hover:bg-gray-200">
          <Image
            src={"/youtube.png"}
            alt="logo"
            className=""
            width={30}
            height={30}
          ></Image>
        </div>
        <div className=" flex mx-2 rounded-xl px-1 items-center py-1 text-black outline outline-1 outline-black hover:bg-gray-200">
          <Image
            src={"/tiktok.png"}
            alt="logo"
            className=""
            width={30}
            height={30}
          ></Image>
        </div>
        <div className=" flex mx-2 rounded-xl px-1 items-center py-1 text-black outline outline-1 outline-black hover:bg-gray-200">
          <Image
            src={"/whatsapp.png"}
            alt="logo"
            className=""
            width={30}
            height={30}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Footer;
