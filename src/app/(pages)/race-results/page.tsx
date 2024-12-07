"use client";
import React, { useEffect, useState } from "react";
import { Col, Table, Row } from "antd";
import axios from "axios";
import * as XLSX from "xlsx";
import Image from "next/image";
import { plusJakartaSans, barlowCondensed } from "@/app/fonts";

// Define an interface for sheet data to improve type safety
interface SheetData {
  sheetName: string;
  data: any[];
}

const RaceResults: React.FC = () => {
  const [sheetData, setSheetData] = useState<SheetData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const columnsSheetsOne = [
    { title: "No/ BIB", dataIndex: "A", key: "#NoBIB" },
    { title: "Nama Lengkap", dataIndex: "B", key: "#NamaLengkap" },
    { title: "Jenis Kelamin", dataIndex: "C", key: "#Sex" },
    { title: "Finish Time", dataIndex: "D", key: "Finish Time" },
  ];

  const columnsSheetsTwo = [
    { title: "No/ BIB", dataIndex: "A", key: "#NoBIB" },
    { title: "Nama Lengkap", dataIndex: "B", key: "#NamaLengkap" },
    { title: "Finish Time", dataIndex: "C", key: "Finish Time" },
  ];
  const fetchExcelFile = async (url: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const exportUrl = url.replace("/edit?gid=0#gid=0", "/export?format=xlsx");
      const response = await axios.get(exportUrl, {
        responseType: "arraybuffer",
      });

      const workbook = XLSX.read(response.data, { type: "buffer" });

      const processedSheets: SheetData[] = workbook.SheetNames.map(
        (sheetName, sheetIndex) => {
          const worksheet = workbook.Sheets[sheetName];
          const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          // Filter out completely empty rows
          const filteredData = data
            .slice(1)
            .filter((row) =>
              row.some(
                (cell) => cell !== undefined && cell !== null && cell !== ""
              )
            );

          return {
            sheetName,
            data: filteredData.map((row: any, rowIndex) => ({
              A: row[0],
              B: row[1],
              C: row[2],
              D: row[3],
            })),
          };
        }
      );

      setSheetData(processedSheets);
    } catch (err) {
      console.error("Error fetching Excel file:", err);
      setError(
        "Failed to load spreadsheet. Please check the URL and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExcelFile(
      "https://docs.google.com/spreadsheets/d/1ieL_jDjkrz_jj9wCiyIZ6eyYP9-riIS7l1vRzoXuMIM/edit?gid=0#gid=0"
    );
  }, []);

  // Render loading or error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-60 md:h-96 text-center mb-20">
        <Image
          className="object-cover object-center brightness-50"
          src="/rulesbg.png"
          alt="Running Event"
          layout="fill"
          objectFit="cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D6A48] via-transparent via-55% to-[#0A4732] "></div>
        <h1
          className={`${barlowCondensed.className} absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFFFFF] text-4xl md:text-8xl w-full font-bold`}
        >
          RACE RESULTS
        </h1>
      </div>

      <Col lg={24}>
        {sheetData.slice(0, 2).map((sheet, index) => {
          // Dynamically set columns for each sheet
          const tableColumns =
            index === 0 ? columnsSheetsOne : columnsSheetsTwo;

          // Configure pagination only if there is data
          const paginationConfig =
            sheet.data.length > 0
              ? { pageSize: 10 } // Adjust page size as needed
              : false;

          return (
            <div key={index}>
              <div className="flex flex-row items-center gap-3 md:gap-7 justify-center px-5 md:px-10 relative -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-full h-3 bg-gradient-to-r from-transparent to-[#F3E7D7]"></div>
                <div className="w-fit bg-[#F3E7D7] rounded-[20px] flex shrink-0 items-center justify-center py-5 px-7">
                  <span className="text-[#0A4833] text-3xl md:text-6xl font-medium italic">
                    {sheet.sheetName}
                  </span>
                </div>
                <div className="w-full h-3 bg-gradient-to-r from-[#F3E7D7] to-transparent"></div>
              </div>

              <Table
                className="custom-table px-10 mb-24"
                dataSource={sheet.data}
                columns={tableColumns}
                rowKey={(record, idx) => `${index}-${idx}`}
                bordered
                pagination={{
                  pageSize: 10, // Keep 10 rows per page
                  total: sheet.data.length, // Total number of actual rows
                  showSizeChanger: false,
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`, // Optional: show range info
                }}
                size="middle"
              />
            </div>
          );
        })}

        {/* Global Styles */}
        <style jsx global>{`
          .custom-table .ant-table {
            background-color: #f9f9f9;
            border-radius: 10px;
            overflow: hidden;
          }

          .custom-table .ant-table-thead > tr > th {
            background-color: #0d6a48;
            color: #ffffff;
            font-family: "Barlow Condensed", sans-serif;
            font-size: 1.2rem;
            text-align: center;
            font-weight: bold;
          }

          .custom-table .ant-table-tbody > tr > td {
            font-family: "Plus Jakarta Sans", sans-serif;
            font-size: 1rem;
            text-align: center;
            color: #0a4732;
            transition: all 0.3s ease-in-out;
          }

          .custom-table .ant-table-tbody > tr:hover > td {
            background-color: #e3f2e1;
          }

          .custom-table .ant-table-bordered > tbody > tr > td {
            border-color: #0d6a48;
          }

          .custom-table .ant-pagination {
            margin-top: 20px;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </Col>

      <div className="container mx-auto my-12">
        <div className="mx-auto flex flex-col w-[100%] p-10 bg-[#F3E7D7] rounded-3xl">
          <h1 className="font-bold text-center">Supported By</h1>
          <div className="flex flex-col md:flex-row mx-auto gap-4 justify-center items-center">
            <Image
              src={"/gojek.png"}
              alt="logo"
              className="md:w-[257px] md:h-[60px] w-[128px] h-[30px]"
              width={256}
              height={60}
            ></Image>
            <Image
              src={"/gulf.png"}
              alt="logo"
              className="md:w-[162px] md:h-[60px] w-[128px] h-[50px]"
              width={170}
              height={60}
            ></Image>
            <Image
              src={"/homepage/M_FPI.jpg"}
              alt="logo"
              className=""
              width={100}
              height={60}
            ></Image>
            <Image
              src={"/homepage/S_Greeners.jpg"}
              alt="logo"
              className="md:w-[100px] md:h-[100px]"
              width={80}
              height={80}
            ></Image>
            <Image
              src={"/homepage/S_Kojo_Garmen.jpg"}
              alt="logo"
              className="md:w-[100px] md:h-[100px]"
              width={80}
              height={80}
            ></Image>
            <Image
              src={"/homepage/S_Logo_Fotoyu.png"}
              alt="logo"
              className="md:w-[200px] md:h-[50px]"
              width={160}
              height={40}
            ></Image>
            <Image
              src={"/homepage/S_LOGO_SOFTRIDE.png"}
              alt="logo"
              className="md:w-[180px] md:h-[120px]"
              width={100}
              height={30}
            ></Image>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row mx-auto gap-4 mt-2 justify-center items-center">
            <Image
              src={"/sponsor tambahan/Corteva.png"}
              alt="logo"
              className="md:w-[257px] md:h-[60px] w-[128px] h-[30px]"
              width={256}
              height={60}
            ></Image>
            <Image
              src={"/sponsor tambahan/Rentokil.png"}
              alt="logo"
              className="md:w-[162px] md:h-[60px] w-[128px] h-[50px]"
              width={170}
              height={60}
            ></Image>
            <Image
              src={"/sponsor tambahan/Bumi Agro.jpg"}
              alt="logo"
              className="md:w-[162px] md:h-[80px] w-[128px] h-[60px]"
              width={120}
              height={60}
            ></Image>
            <Image
              src={"/sponsor tambahan/BRI.jpg"}
              alt="logo"
              className="md:w-[180px] md:h-[65px] w-[150px] h-[55px]"
              width={80}
              height={60}
            ></Image>
            <Image
              src={"/sponsor tambahan/EJ.png"}
              alt="logo"
              className="md:w-[100px] md:h-[100px]"
              width={80}
              height={80}
            ></Image>
            <Image
              src={"/sponsor tambahan/Ichitan.png"}
              alt="logo"
              className="md:w-[100px] md:h-[100px]"
              width={80}
              height={80}
            ></Image>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row mx-auto gap-4 mt-2 justify-center items-center">
            <Image
              src={"/sponsor tambahan/Kahf.jpg"}
              alt="logo"
              className="md:w-[180px] md:h-[90px]"
              width={120}
              height={60}
            ></Image>
            <Image
              src={"/sponsor tambahan/Lokalate.png"}
              alt="logo"
              className="md:w-[200px] md:h-[100px] w-[128px] h-[30px]"
              width={256}
              height={60}
            ></Image>
            <Image
              src={"/sponsor tambahan/Nutrihub.png"}
              alt="logo"
              className="md:w-[170px] md:h-[80px] "
              width={120}
              height={50}
            ></Image>
            {/* <Image
                src={"/sponsor tambahan/Pamelaria Persada.jpg"}
                alt="logo"
                className=""
                width={100}
                height={60}
              ></Image> */}
            <Image
              src={"/sponsor tambahan/Sari Kedelai.jpg"}
              alt="logo"
              className="md:w-[100px] md:h-[100px]"
              width={80}
              height={80}
            ></Image>
            <Image
              src={"/sponsor tambahan/Wardah.png"}
              alt="logo"
              className="md:w-[225px] md:h-[60px]"
              width={80}
              height={60}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceResults;
