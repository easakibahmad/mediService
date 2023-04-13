import React from "react";
import AboutPlan from "./AboutPlan";
import PlanThree from "./PlanThree";
import PlanTwo from "./PlanTwo";
import pdf1 from "../../assets/pdfs/Circular.pdf";
import pdf2 from "../../assets/pdfs/StudentClaimForm.pdf";
import pdf3 from "../../assets/pdfs/StudentDeathClaimForm.pdf";
import pdf4 from "../../assets/pdfs/StudentGOPForm.pdf";

const HealthPlans = () => {
  return (
    <div>
      <div className="h-6 " style={{ backgroundColor: "#8E40E0" }}></div>
      <div className="h-1 " style={{ backgroundColor: "#E040B2" }}></div>
      <div className=" md:mx-16 mx-4 shadow-xl grid md:grid-cols-5 grid-cols-1 gap-5">
        <div className="col-span-4 px-8">
          <AboutPlan></AboutPlan>
          <PlanTwo></PlanTwo>
          <PlanThree></PlanThree>
        </div>
        <div className="md:mt-6 md:mx-0 mx-14 md:mb-0 mb-4">
          <p className="font-bold">Required Documents: </p>
          <a
            href={pdf1}
            className="underline pb-2 text-sm block text-blue-800"
            target="_blank"
            rel="noreferrer"
          >
            Student Health and Life Insurance Circular
          </a>
          <a
            href={pdf2}
            className="underline pb-2 text-sm block text-blue-800"
            target="_blank"
            rel="noreferrer"
          >
            Health Insurance Claim From
          </a>
          <a
            href={pdf3}
            className="underline block pb-2 text-sm text-blue-800"
            target="_blank"
            rel="noreferrer"
          >
            Guarantee of Payment (GOP) Form
          </a>
          <a
            href={pdf4}
            className="underline block pb-2 text-sm text-blue-800"
            target="_blank"
            rel="noreferrer"
          >
            Life Insurance Claim Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default HealthPlans;
