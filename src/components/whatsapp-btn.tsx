import React from "react";
import Link from "next/link";
import Image from "next/image";

interface WhatsAppButtonProps {
  phoneNumber: string;
  prefilledText?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  prefilledText,
}) => {
  const baseUrl = `https://wa.me/${phoneNumber}`;
  let whatsappUrl = baseUrl;

  if (prefilledText) {
    whatsappUrl += `?text=${encodeURIComponent(prefilledText)}`;
  }

  return (
    <Link href={whatsappUrl} target="_blank">
      <div className=" flex mx-2 rounded-xl px-1 items-center py-1 text-black outline outline-1 outline-black hover:bg-gray-200">
        <Image
          src={"/whatsapp.png"}
          alt="logo"
          className=""
          width={28}
          height={30}
        ></Image>
      </div>
    </Link>
  );
};

export default WhatsAppButton;
