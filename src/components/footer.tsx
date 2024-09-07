import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./whatsapp-btn";
import GmailComposeButton from "./email-btn";
const Footer = () => {
  return (
    <div className="mx-auto flex flex-col w-[100%] p-2 bg-[#F3E7D7]">
      <h1 className="font-bold text-center">Stay in touch</h1>
      <div className="flex flex-row mt-2 mx-auto">
        <GmailComposeButton
          email="l3b2024@gmail.com"
          prefilledSubject="Inquiry from Website"
          prefilledBody="Hello, I have a question about..."
        />
        <div className="mx-2 rounded-xl text-black outline outline-1 outline-black hover:bg-gray-200"></div>

        <Link
          href={"https://www.instagram.com/l3b.unpad?igsh=MXFjM3BibHZvanVmdg=="}
        >
          <div className=" flex mx-2 rounded-xl px-1 items-center py-1 text-black outline outline-1 outline-black hover:bg-gray-200">
            <Image
              src={"/instagram.png"}
              alt="logo"
              className="mx-auto"
              width={30}
              height={30}
            ></Image>
          </div>
        </Link>

        <Link href={"https://youtube.com/@l3bunpad2024?si=n0y2c_3N1JJzdD9_"}>
          <div className="  flex mx-2 rounded-xl px-1 items-center py-[6px] sm:py-2 text-black outline outline-1 outline-black hover:bg-gray-200">
            <Image
              src={"/youtube.png"}
              alt="logo"
              className=""
              width={30}
              height={30}
            ></Image>
          </div>
        </Link>

        <Link href={"https://www.tiktok.com/@l3b.unpad?_t=8pSkmR79kQx&_r=1"}>
          <div className=" flex mx-2 rounded-xl px-1 items-center py-1 text-black outline outline-1 outline-black hover:bg-gray-200">
            <Image
              src={"/tiktok.png"}
              alt="logo"
              className=""
              width={25}
              height={25}
            ></Image>
          </div>
        </Link>
        <WhatsAppButton phoneNumber="6281283952497" />
      </div>
    </div>
  );
};

export default Footer;
