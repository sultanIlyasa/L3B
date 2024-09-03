import {
  Plus_Jakarta_Sans,
  Barlow_Condensed,
  Roboto_Mono,
} from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"], // Add the weights you need
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
