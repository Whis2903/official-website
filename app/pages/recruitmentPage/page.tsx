// pages/recruitment.tsx
import React from "react";
import RecruitmentPortal from "../../components/RecruitmentPortal";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

const RecruitmentPage = () => {
  return (
    <div>
      <Navbar />
      <RecruitmentPortal />
      <Footer />
    </div>
  );
};

export default RecruitmentPage;
