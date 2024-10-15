"use client"; // Indicate this is a client component

import React, { useState } from "react";

const RecruitmentPortal = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDomain(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const dataToSubmit = {
      domain: selectedDomain,
      year: selectedYear,
      semester: selectedSemester,
      gender: selectedGender,
      department: selectedDepartment,
      // Include additional form fields here as needed
    };

    try {
      const response = await fetch('https://ldss-backend.onrender.com/api/recruitments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Form submitted successfully:', responseData);
      // Optionally reset the form or display a success message here
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally display an error message here
    }
  };

  return (
    <div className="bg-black p-10 relative overflow-hidden" style={{ backgroundImage: "url('/recruitment.gif')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-center text-5xl font-bold mb-6 text-white">
        Student Registration Form
      </h1>
      <div className="flex justify-center items-center w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-2xl bg-gray-800 p-6 rounded-2xl shadow-lg backdrop-blur-md"
        >
          {/* Full name and registration number */}
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            />
            <input
              type="text"
              placeholder="Registration Number"
              className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            />
          </div>

          {/* Email IDs and Phone Number */}
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <input
              type="email"
              placeholder="SRM Email"
              className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            />
            <input
              type="email"
              placeholder="Personal Email"
              className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            />
            <input
              type="text"
              placeholder="Class Section"
              className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            />
          </div>

          {/* Year and Semester Dropdowns */}
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="rounded-xl py-2 px-4 border-2 border-white w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            >
              <option value="" disabled>Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
            <select
              value={selectedSemester}
              onChange={handleSemesterChange}
              className="rounded-xl py-2 px-4 border-2 border-white w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            >
              <option value="" disabled>Select Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

          {/* Gender and Domain Dropdowns */}
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <select
              value={selectedGender}
              onChange={handleGenderChange}
              className="rounded-xl py-2 px-4 border-2 border-white w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              value={selectedDomain}
              onChange={handleDomainChange}
              className="rounded-xl py-2 px-4 border-2 border-white w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            >
              <option value="" disabled>Select Domain</option>
              <option value="Web Development">Web Development</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Editorial">Editorial</option>
              <option value="Corporate">Corporate</option>
              <option value="Events">Events</option>
            </select>
          </div>

          {/* Department Dropdown */}
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <select
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              className="rounded-xl py-2 px-4 border-2 border-white w-full bg-gray-700 text-white mb-4 lg:mb-0"
              required
            >
              <option value="" disabled>Select Department</option>
              <option value="DSBS">DSBS</option>
              <option value="NWC">NWC</option>
              <option value="CINTEL">CINTEL</option>
              <option value="CTECH">CTECH</option>
              <option value="OTHER">OTHER</option>
            </select>
          </div>

          {/* Resume Upload */}
          <div className="flex flex-col gap-3">
            <input
              type="file"
              accept=".pdf"
              className="border-2 border-white rounded-xl w-full py-2 bg-gray-700 text-white mb-4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-xl mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruitmentPortal;
