// import React from 'react'
// import PageHeader from '../Components/CommonComponents/PageHeader'
// import bg from '../assets/HomeImg/bg1.jpg'
// import PortfolioSection from '../Components/PortfolioComponent/PortfolioSection'
// import CompanyWorkSection from '../Components/PortfolioComponent/CompanyWorkSection'

// function PortfolioPage() {
//   return (
//     <div>
//       <PageHeader
//   title="Our"
//   highlight="Portfolio"
//   currentPage="Portfolio"
//   subtitle="We craft powerful brand stories through branding, photography & films."
//   image={bg}
// />
// <PortfolioSection/>
// <CompanyWorkSection/>
//     </div>
//   )
// }

// export default PortfolioPage


import React, { useState } from "react";
import PageHeader from "../Components/CommonComponents/PageHeader";
import bg from "../assets/HomeImg/bg1.jpg";
import PortfolioSection from "../Components/PortfolioComponent/PortfolioSection";
import CompanyWorkSection from "../Components/PortfolioComponent/CompanyWorkSection";
import HeyzineBlackFlipbook from "../Components/PortfolioComponent/HeyzineBlackFlipbook";
import RealBookPDFViewer from "../Components/PortfolioComponent/RealBookPDFViewer";

function PortfolioPage() {
  const [activeCompany, setActiveCompany] = useState(null);

  return (
    <div>
      {/* Header always visible */}
      <PageHeader
        title="Our"
        highlight="Portfolio"
        currentPage="Portfolio"
        subtitle="We craft powerful brand stories through branding, photography & films."
        image={bg}
      />

    {/* <HeyzineBlackFlipbook /> */}
    {/* <RealBookPDFViewer /> */}

      {/* Show portfolio grid ONLY when no company is open */}
      {!activeCompany && <PortfolioSection />}

      {/* Company work section (controls open/close) */}
      {/* <CompanyWorkSection
        activeCompany={activeCompany}
        onToggle={setActiveCompany}
      /> */}
    </div>
  );
}

export default PortfolioPage;
