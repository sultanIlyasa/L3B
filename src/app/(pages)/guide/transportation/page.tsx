import React from "react";
import dynamic from "next/dynamic";
const RouteMap = dynamic(() => import("@/components/map"), {
  ssr: false,
});
interface LatLng {
  lat: number;
  lng: number;
}
const Transport = () => {
  const startPoint: LatLng = {
    lat: -6.914613292103197,
    lng: 107.60243773468062,
  }; // New York City
  const endPoint: LatLng = { lat: -6.925943811158185, lng: 107.77465315494955 }; // Los Angeles
  return (
    <main className="min-h-screen">
      <section>
        <div className="text-center font-bold text-white mt-20 pt-20 text-4xl md:text-left md:mx-10 mb-10">
          <h1>Transportation</h1>
        </div>
        <RouteMap startPoint={startPoint} endPoint={endPoint} />
      </section>
    </main>
  );
};

export default Transport;
