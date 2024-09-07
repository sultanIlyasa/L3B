import React from "react";
import Link from "next/link";
import Image from "next/image";

interface GmailComposeButtonProps {
  email: string;
  prefilledSubject?: string;
  prefilledBody?: string;
}

const GmailComposeButton: React.FC<GmailComposeButtonProps> = ({
  email,
  prefilledSubject,
  prefilledBody,
}) => {
  let gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(
    email
  )}`;

  if (prefilledSubject) {
    gmailUrl += `&su=${encodeURIComponent(prefilledSubject)}`;
  }

  if (prefilledBody) {
    gmailUrl += `&body=${encodeURIComponent(prefilledBody)}`;
  }

  return (
    <Link href={gmailUrl} target="_blank" rel="noopener noreferrer">
      <div className="flex mx-2 rounded-xl px-1 items-center py-1 text-black outline outline-1 outline-black hover:bg-gray-200">
        l3b2024@gmail.com
      </div>
    </Link>
  );
};

export default GmailComposeButton;
