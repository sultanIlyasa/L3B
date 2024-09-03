"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DropdownName = "event" | "guide" | "contact" | null;

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);
  const [isButtonEventOpen, setButtonEventOpen] = useState<boolean>(false);
  const [isButtonGuideOpen, setButtonGuideOpen] = useState<boolean>(false);
  const [isButtonContactOpen, setButtonContactOpen] = useState<boolean>(false);

  const handleDropdownClick = (dropdownName: DropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const isDropdownOpen = (dropdownName: DropdownName): boolean =>
    activeDropdown === dropdownName;

  return (
    <header className="flex w-full">
      <div className="fixed top-[30px] z-[100] flex w-full px-10 lg:px-20">
        <div className="relative flex w-full items-center justify-between rounded-full bg-[#F3E7D7] md:p-3  ">
          {/* LOGO */}
          <div>
            <Link href={"/"} onClick={() => setOpen(false)}>
              <Image
                src={"/logo-light.png"}
                alt="logo"
                className=""
                width={70}
                height={32}
              ></Image>
            </Link>
          </div>
          {/* Right Menu */}
          {/* Desktop Mode */}
          <div className="mx-6 hidden items-center justify-center gap-4 md:flex">
            <div className="relative ">
              {/* Button Events */}
              <button
                className="mx-2 rounded-3xl px-4 py-2 text-black outline outline-1 outline-black hover:bg-gray-200"
                onClick={() => handleDropdownClick("event")}
              >
                Event
              </button>
              <div
                className={`absolute left-1/3 top-full w-48 -translate-x-1/2 transform transition-all duration-300 ease-out ${
                  isDropdownOpen("event")
                    ? "opacity-100 translate-y-2"
                    : "opacity-0 translate-y-0 pointer-events-none"
                }`}
              >
                <div className="w-full rounded-lg bg-[#F3E7D7] text-black shadow-lg">
                  <div className="flex w-full flex-col items-start justify-center p-2">
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Competition Information
                    </Link>
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Campaign & Charity
                    </Link>
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Race rules & Regulation
                    </Link>
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>

              {/* Button Guide */}
              <button
                className="mx-2 rounded-3xl px-4 py-2 text-black outline outline-1 outline-black hover:bg-gray-200"
                onClick={() => handleDropdownClick("guide")}
              >
                Guide
              </button>
              <div
               className={`absolute left-2/3 top-full w-48 -translate-x-1/2 transform transition-all duration-300 ease-out ${
                isDropdownOpen("guide")
                  ? "opacity-100 translate-y-2"
                  : "opacity-0 translate-y-0 pointer-events-none"
              }`}
              >
                <div className="w-full rounded-lg bg-[#F3E7D7] text-black shadow-lg">
                  <div className="flex w-full flex-col items-start justify-center p-2">
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Accomodation
                    </Link>
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Transportation
                    </Link>
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      City Guide
                    </Link>
                  </div>
                </div>
              </div>

              {/* Button Contact */}
              <button
                 className="mx-2 rounded-3xl px-4 py-2 text-black outline outline-1 outline-black hover:bg-gray-200"
                 onClick={() => handleDropdownClick("contact")}
              >
                Contact
              </button>
              <div
               className={`absolute left-[90%] top-full w-48 -translate-x-1/2 transform transition-all duration-300 ease-out ${
                isDropdownOpen("contact")
                  ? "opacity-100 translate-y-2"
                  : "opacity-0 translate-y-0 pointer-events-none"
              }`}
              >
                <div className="w-full rounded-lg bg-[#F3E7D7] text-black shadow-lg">
                  <div className="flex w-full flex-col items-start justify-center p-2">
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Sponsorship
                    </Link>
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Media Partner
                    </Link>
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Company Partner
                    </Link>
                    <Link
                      href="#"
                      className="hover:bg-gray-200 transition duration-200 w-full p-2 rounded text-sm"
                    >
                      Work with Us!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Responsive */}
          <div className="flex items-center justify-center md:hidden">
            <button
              className="p-5 text-lime-700"
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>
              )}
            </button>
            {isOpen && (
              <div className="flex w-full ">
                <div className="absolute left-0 top-28 flex w-full rounded-lg bg-[#F3E7D7] text-black">
                  <div className="relative flex w-full flex-col items-start justify-center space-y-2 p-5">
                    <div className="flex w-full flex-col items-start justify-center space-y-2 md:hidden">
                      {/* Accordion Event */}
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="">
                            Event
                          </AccordionTrigger>
                          <AccordionContent className="">
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              Competition Information
                            </Link>
                          </AccordionContent>
                          <AccordionContent>
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              Campaign & Charity
                            </Link>
                          </AccordionContent>
                          <AccordionContent>
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              Race Rules & Regulation
                            </Link>
                          </AccordionContent>
                          <AccordionContent>
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              FAQ
                            </Link>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Accordion Guide */}

                        <AccordionItem value="item-2">
                          <AccordionTrigger>Guide</AccordionTrigger>
                          <AccordionContent className="">
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              Accomodation
                            </Link>
                          </AccordionContent>
                          <AccordionContent className="">
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              Transportation
                            </Link>
                          </AccordionContent>
                          <AccordionContent className="">
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              City Guide
                            </Link>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Contact Accordion */}

                        <AccordionItem value="item-3">
                          <AccordionTrigger>Contact</AccordionTrigger>
                          <AccordionContent className="">
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              Sponsorship
                            </Link>
                          </AccordionContent>
                          <AccordionContent className="">
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              Media Partners
                            </Link>
                          </AccordionContent>
                          <AccordionContent className="">
                            <Link href={"#"} className="hover:bg-gray-200 ">
                              Work with Us
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <hr className="w-full border bg-black" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
