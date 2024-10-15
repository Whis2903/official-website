// pages/recruitment.tsx
import React from "react";
import RecruitmentPortal from "../../components/RecruitmentPortal";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
const RecruitmentPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <Navbar/>
      <RecruitmentPortal />
      <Footer/>
    </div>
  );
};

export default RecruitmentPage;
