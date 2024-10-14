import React from "react";

function NewJoin() {
  const data = [
    { label: "Section", value: "" },
    { label: "Department", value: "" },
    { label: "Year", value: "" },
    { label: "Semester", value: "" },
    { label: "Phone Number", value: "" },
    { label: "SRM Email ID", value: "B2" },
    { label: "Personal Email", value: "" },
    { label: "Resume", value: "" },
    { label: "Gender", value: "" },
    { label: "Domain", value: "" },
    { label: "Branch", value: "" },
  ];

  return (
    <div className="flex flex-col place-items-start place-content-start bg-black/80 rounded-2xl p-4">
      <div className="flex flex-col place-items-start place-content-start bg-blue-500 rounded-2xl p-2 w-full">
        <h1 className="text-white text-2xl font-semibold">Name</h1>
        <p className="text-xl font-light">RA2311026010761</p>
      </div>
      {data.map((item, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <h1 className="text-white font-medium text-lg">{item.label}:</h1>
          {item.value && <p className="text-white">{item.value}</p>}
        </div>
      ))}
    </div>
  );
}

export default NewJoin;
