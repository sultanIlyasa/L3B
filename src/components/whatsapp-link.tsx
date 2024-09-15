import React from "react";
import Link from "next/link";

interface WhatsAppLinkProps {
  phoneNumber: string;
  children: React.ReactNode;
  prefilledText?: string;
}

const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({
  phoneNumber,
  children,
  prefilledText,
}) => {
  const baseUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`;
  let whatsappUrl = baseUrl;

  if (prefilledText) {
    whatsappUrl += `?text=${encodeURIComponent(prefilledText)}`;
  }

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};

interface Contact {
  role: string;
  phoneNumber: string;
  name: string;
}

interface WhatsAppContactListProps {
  contacts: Contact[];
}

const WhatsAppContactList: React.FC<WhatsAppContactListProps> = ({
  contacts,
}) => {
  return (
    <ul >
      {contacts.map((contact, index) => (
        <li className="mt-2" key={index}>
          <WhatsAppLink phoneNumber={contact.phoneNumber}>
            {contact.role}: {contact.phoneNumber} ({contact.name})
          </WhatsAppLink>
        </li>
      ))}
    </ul>
  );
};

// Example usage
const WhatsappLink: React.FC = () => {
  const contactList: Contact[] = [
    { role: "Sponsorship", phoneNumber: "6282173525786", name: "Herlendia" },
    { role: "Media partner", phoneNumber: "6287889202987", name: "Ratna" },
    { role: "Community partner", phoneNumber: "62082119009644", name: "Alifa" },
  ];

  return <WhatsAppContactList contacts={contactList} />;
};

export default WhatsappLink;
