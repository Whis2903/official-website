"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

type DatasetVisibility = {
  [key: string]: boolean;
};

const DomainChart = () => {
  const chartRef = useRef<null | HTMLCanvasElement>(null);
  const [myChart, setMyChart] = useState<Chart | null>(null);

  const [datasetVisibility, setDatasetVisibility] = useState<DatasetVisibility>({
    "Web-Dev": true,
    Events: false,
    Editorial: false,
    Corporate: false,
    "AI/ML": false,
  });

  useEffect(() => {
    if (!chartRef.current) return;

    const web = [
      { count: 40 },
      { count: 70 },
      { count: 85 },
      { count: -10 },
      { count: 100 },
      { count: 70 },
    ];

    const events = [
      { count: 40 },
      { count: 70 },
      { count: 85 },
      { count: -10 },
      { count: 100 },
      { count: 70 },
    ];

    const editorial = [
      { count: 40 },
      { count: 70 },
      { count: 85 },
      { count: -10 },
      { count: 100 },
      { count: 70 },
    ];

    const corp = [
      { count: 40 },
      { count: 70 },
      { count: 85 },
      { count: -10 },
      { count: 100 },
      { count: 70 },
    ];

    const aiml = [
      { count: 40 },
      { count: 70 },
      { count: 85 },
      { count: -10 },
      { count: 100 },
      { count: 70 },
    ];

    const chartInstance = new Chart(chartRef.current, {
      type: "radar",
      data: {
        labels: [
          "Parameter1",
          "Parameter2",
          "Parameter3",
          "Parameter4",
          "Parameter5",
          "Parameter6",
        ],
        datasets: [
          {
            label: "Web-Dev",
            data: web.map((row) => row.count),
            backgroundColor: "#3b82f680", // Blue
            borderColor: "#3b82f6",
            borderWidth: 3,
            hidden: !datasetVisibility["Web-Dev"],
          },
          {
            label: "Events",
            data: events.map((row) => row.count),
            backgroundColor: "#FFFF0080", // Yellow
            borderColor: "#FFFF00",
            borderWidth: 3,
            hidden: !datasetVisibility["Events"],
          },
          {
            label: "Editorial",
            data: editorial.map((row) => row.count),
            backgroundColor: "#FFA50080", // Orange
            borderColor: "#FFA500",
            borderWidth: 3,
            hidden: !datasetVisibility["Editorial"],
          },
          {
            label: "Corporate",
            data: corp.map((row) => row.count),
            backgroundColor: "#00FFFF80", // Cyan
            borderColor: "#00FFFF",
            borderWidth: 3,
            hidden: !datasetVisibility["Corporate"],
          },
          {
            label: "AI/ML",
            data: aiml.map((row) => row.count),
            backgroundColor: "#FF000080", // Red
            borderColor: "#FF0000",
            borderWidth: 3,
            hidden: !datasetVisibility["AI/ML"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            pointLabels: {
              font: {
                size: 30,
              },
            },
          },
        },
      },
    });

    setMyChart(chartInstance);

    return () => {
      chartInstance.destroy();
    };
  }, []);

  const toggleDataset = (dataset: keyof DatasetVisibility) => {
    const updatedVisibility: DatasetVisibility = {
      "Web-Dev": false,
      Events: false,
      Editorial: false,
      Corporate: false,
      "AI/ML": false,
    };
    updatedVisibility[dataset] = true; 

    if (myChart) {
      myChart.data.datasets.forEach((ds) => {
        ds.hidden = !updatedVisibility[ds.label as keyof DatasetVisibility]; 
      });
      myChart.update();
    }

    setDatasetVisibility(updatedVisibility); 
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        {Object.keys(datasetVisibility).map((key) => (
          <button
            key={key}
            onClick={() => toggleDataset(key as keyof DatasetVisibility)}
            className={`px-4 py-2 rounded ${datasetVisibility[key] ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          >
            {key}
          </button>
        ))}
      </div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DomainChart;
