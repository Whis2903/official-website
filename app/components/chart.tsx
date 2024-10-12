"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

type DatasetVisibility = {
  [key: string]: boolean;
};

interface DomainChartProps {
  datasetVisibility: DatasetVisibility;
}

const DomainChart: React.FC<DomainChartProps> = ({ datasetVisibility }) => {
  const chartRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const web = [40, 70, 85, -10, 100, 70];
    const events = [40, 70, 85, -10, 100, 70];
    const editorial = [40, 70, 85, -10, 100, 70];
    const corp = [40, 70, 85, -10, 100, 70];
    const aiml = [40, 70, 85, -10, 100, 70];

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
            data: web,
            backgroundColor: "#3b82f680", // Blue
            borderColor: "#3b82f6",
            borderWidth: 3,
            hidden: !datasetVisibility["Web-Dev"],
          },
          {
            label: "Events",
            data: events,
            backgroundColor: "#FFFF0080", // Yellow
            borderColor: "#FFFF00",
            borderWidth: 3,
            hidden: !datasetVisibility["Events"],
          },
          {
            label: "Editorial",
            data: editorial,
            backgroundColor: "#FFA50080", // Orange
            borderColor: "#FFA500",
            borderWidth: 3,
            hidden: !datasetVisibility["Editorial"],
          },
          {
            label: "Business",
            data: corp,
            backgroundColor: "#00FFFF80", // Cyan
            borderColor: "#00FFFF",
            borderWidth: 3,
            hidden: !datasetVisibility["Corporate"],
          },
          {
            label: "AI/ML",
            data: aiml,
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
            display: false, // Legend is hidden
          },
        },
        scales: {
          r: {
            pointLabels: {
              font: {
                size: 16, // Adjust this value for smaller font size
              },
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      chartInstance.destroy();
    };
  }, [datasetVisibility]); // Re-run effect when datasetVisibility changes

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DomainChart;
