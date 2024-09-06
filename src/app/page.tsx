import Image from "next/image";
import Homepage from "./(pages)/homepage/page";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A4833]">
      <div className="w-full">
        <Homepage />
      </div>
    </main>
  );
}
