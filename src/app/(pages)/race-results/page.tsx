"use client";
import React, { useEffect, useState } from "react";
import { Col, Table, Row } from "antd";
import axios from "axios";
import * as XLSX from "xlsx";

// Define an interface for sheet data to improve type safety
interface SheetData {
  sheetName: string;
  data: any[];
}

const RaceResults: React.FC = () => {
  const [sheetData, setSheetData] = useState<SheetData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const columns = [
    {
      title: "No/BIB",
      dataIndex: "A",
      key: "#NoBIB",
    },
    {
      title: "Nama Lengkap",
      dataIndex: "B",
      key: "#NamaLengkap",
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "C",
      key: "#Sex",
    },
    {
      title: "Finish Time",
      dataIndex: "D",
      key: "Finish Time",
    },
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
          const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          return {
            sheetName,
            data: data.slice(1, 92).map((row: any, rowIndex) => ({
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
    <div className="min-h-screen my-32">
      <Col lg={24}>
        {sheetData.slice(0, 2).map((sheet, index) => (
          <div key={index}>
            <p className="flex flex-col mx-auto text-center text-lg p-5 bg-white w-[20%] my-6 rounded-xls">
              {sheet.sheetName}
            </p>
            <Table
              dataSource={sheet.data}
              columns={columns}
              rowKey={(key, idx) => `${index}-${idx}`}
            />
          </div>
        ))}
      </Col>
    </div>
  );
};

export default RaceResults;
