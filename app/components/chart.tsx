"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

type DatasetVisibility = {
  [key: string]: boolean;
};

interface DomainChartProps {
  datasetVisibility: DatasetVisibility;
}

const DomainChart: React.FC<DomainChartProps> = ({ datasetVisibility }) => {
  const chartRef = useRef<null | HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update the isMobile state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Consider 640px as mobile threshold
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    const web = [80, 85, 80, 90, 70, 70]; // Web Development Domain
    const events = [40, 90, 95, 75, 90, 60]; // Events Domain
    const editorial = [50, 95, 65, 70, 85, 60]; // Editorial Domain
    const business = [60, 95, 85, 95, 95, 80]; // Business Domain
    const aiml = [95, 65, 80, 80, 65, 80]; // AI and Machine Learning Domain

    const chartInstance = new Chart(chartRef.current, {
      type: "radar",
      data: {
        labels: isMobile
          ? ["TC", "CI", "CT", "MR", "CS", "AT"] // Abbreviated labels for mobile view
          : [
              "Technical Complexity",
              "Creativity & Innovation",
              "Collaboration & Teamwork",
              "Market Relevance",
              "Communication Skills",
              "Analytical Thinking",
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
            data: business,
            backgroundColor: "#00FFFF80", // Cyan
            borderColor: "#00FFFF",
            borderWidth: 3,
            hidden: !datasetVisibility["Business"],
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
            min: 0, // Minimum value for scaling
            max: 100, // Maximum value for scaling
            ticks: {
              stepSize: 20, // Adjust step size if needed
            },
            grid: {
              color: '#FFFFFF', // White color for grid lines
            },
            pointLabels: {
              font: {
                size: isMobile ? 8 : 16, // Smaller font size for mobile
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
  }, [datasetVisibility, isMobile]); // Re-run effect when datasetVisibility or isMobile changes

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DomainChart;