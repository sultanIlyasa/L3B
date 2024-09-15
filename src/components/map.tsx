"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface LatLng {
  lat: number;
  lng: number;
}

interface RouteMapProps {
  startPoint: LatLng;
  endPoint: LatLng;
}

const RouteMap: React.FC<RouteMapProps> = ({ startPoint, endPoint }) => {
  const [route, setRoute] = useState<[number, number][]>([]);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${startPoint.lng},${startPoint.lat};${endPoint.lng},${endPoint.lat}?overview=full&geometries=geojson`
        );
        const data = await response.json();
        setRoute(data.routes[0].geometry.coordinates);
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    fetchRoute();
  }, [startPoint, endPoint]);

  return (
    <MapContainer
      center={[
        (startPoint.lat + endPoint.lat) / 2,
        (startPoint.lng + endPoint.lng) / 2,
      ]}
      zoom={13}
      style={{ height: "500px", width: "90%", margin: "0 auto" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline
        positions={route.map((coord) => [coord[1], coord[0]])}
        color="blue"
      />
    </MapContainer>
  );
};

export default RouteMap;
