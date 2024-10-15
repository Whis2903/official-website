"use client"
import React, { useState } from "react";
import { z } from "zod";

// Define the schema for form validation
export const recruitmentSchema = z.object({
  name: z.string().trim().min(2).max(50),
  registrationNumber: z.string().trim().startsWith('RA').min(15).max(15),
  collegeMail: z.string().email().endsWith('srmist.edu.in'),
  personalMail: z.string().email(),
  phoneNumber: z.string(),
  classSection: z.string().toUpperCase(),
  year: z.number().int().min(1).max(4),
  semester: z.number().int().min(1).max(8),
  gender: z.string(),
  domain: z.string(),
  department: z.string(),
  branch: z.string(),
  resume: z.string().url(),
});

// Define the shape of the errors state
type Errors = {
  [key: string]: string[] | undefined; // Each key can have an array of error messages or be undefined
};

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    collegeMail: "",
    personalMail: "",
    phoneNumber: "",
    classSection: "",
    year: "",
    semester: "",
    gender: "",
    domain: "",
    department: "",
    branch: "",
    resume: "",
  });

  const [errors, setErrors] = useState<Errors>({}); // Set the type for errors

  // Handle changes for all inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Validate the data against the schema
      const validatedData = recruitmentSchema.parse({
        ...formData,
        year: Number(formData.year),
        semester: Number(formData.semester),
      });

      // Send validated data to the server
      const response = await fetch('https://ldss-backend.onrender.com/api/recruitments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      const responseData = await response.json();
      console.log('Form submitted successfully:', responseData);
      
      // Optionally reset the form or display a success message here
      setFormData({
        name: "",
        registrationNumber: "",
        collegeMail: "",
        personalMail: "",
        phoneNumber: "",
        classSection: "",
        year: "",
        semester: "",
        gender: "",
        domain: "",
        department: "",
        branch: "",
        resume: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // If validation fails, set the errors
        const validationErrors = error.flatten();
        setErrors(validationErrors.fieldErrors);
      } else {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('/recruitment.gif')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-md md:max-w-2xl overflow-y-auto h-full max-h-[90vh]">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 text-white">Student Registration Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
                required
              />
              {errors.name && <p className="text-red-500">{errors.name.join(', ')}</p>}
            </div>

            {/* Registration Number */}
            <div>
              <input
                type="text"
                name="registrationNumber"
                placeholder="Registration Number"
                value={formData.registrationNumber}
                onChange={handleChange}
                className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
                required
              />
              {errors.registrationNumber && <p className="text-red-500">{errors.registrationNumber.join(', ')}</p>}
            </div>
          </div>

          {/* College Email */}
          <input
            type="email"
            name="collegeMail"
            placeholder="SRM Email"
            value={formData.collegeMail}
            onChange={handleChange}
            className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
            required
          />
          {errors.collegeMail && <p className="text-red-500">{errors.collegeMail.join(', ')}</p>}

          {/* Personal Email */}
          <input
            type="email"
            name="personalMail"
            placeholder="Personal Email"
            value={formData.personalMail}
            onChange={handleChange}
            className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
            required
          />
          {errors.personalMail && <p className="text-red-500">{errors.personalMail.join(', ')}</p>}

          {/* Mobile Number */}
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Mobile Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
            required
          />
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.join(', ')}</p>}

          {/* Class Section */}
          <input
            type="text"
            name="classSection"
            placeholder="Class Section"
            value={formData.classSection}
            onChange={handleChange}
            className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
            required
          />
          {errors.classSection && <p className="text-red-500">{errors.classSection.join(', ')}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Year Dropdown */}
            <div>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="rounded-xl py-2 px-4 border-2 border-white w-full bg-gray-700 text-white"
                required
              >
                <option value="" disabled>Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              {errors.year && <p className="text-red-500">{errors.year.join(', ')}</p>}
            </div>

            {/* Semester Dropdown */}
            <div>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="rounded-xl py-2 px-4 border-2 border-white w-full bg-gray-700 text-white"
                required
              >
                <option value="" disabled>Select Semester</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              {errors.semester && <p className="text-red-500">{errors.semester.join(', ')}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gender Dropdown */}
            <div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="rounded-xl py-2 px-4 border-2 border-white w-full bg-gray-700 text-white"
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500">{errors.gender.join(', ')}</p>}
            </div>

            {/* Domain */}
            <div>
              <input
                type="text"
                name="domain"
                placeholder="Domain"
                value={formData.domain}
                onChange={handleChange}
                className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
                required
              />
              {errors.domain && <p className="text-red-500">{errors.domain.join(', ')}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Department */}
            <div>
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
                required
              />
              {errors.department && <p className="text-red-500">{errors.department.join(', ')}</p>}
            </div>

            {/* Branch */}
            <div>
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={formData.branch}
                onChange={handleChange}
                className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
                required
              />
              {errors.branch && <p className="text-red-500">{errors.branch.join(', ')}</p>}
            </div>

            {/* Resume */}
            <div>
              <input
                type="url"
                name="resume"
                placeholder="Resume Link"
                value={formData.resume}
                onChange={handleChange}
                className="border-2 border-white py-2 px-4 rounded-xl w-full bg-gray-700 text-white"
                required
              />
              {errors.resume && <p className="text-red-500">{errors.resume.join(', ')}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-bold transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruitmentForm;
