import React from "react";

const PlanThree = () => {
  return (
    <div className="my-4 p-4">
      <h1 className="font-bold md:text-xl">
        Most DU students are automatically enrolled in DU Student Health
        Insurance Plan.
      </h1>
      <p>
        If you are a full-time student, you will be automatically enrolled in DU
        Student Health Insurance Plan. You will also be billed for the cost of
        the plan in your account. <br />
        All conditions and detailed information regarding insurance can be known
        from Dhaka University website{" "}
        <a className="underline text-blue-500" href="https://www.du.ac.bd">
          https://www.du.ac.bd.
        </a>{" "}
        Students can collect Claim Form and Guarantee of Payment (GOP) Request
        Form from this website. Students should contact their respective
        department/institute office for insurance related work. <br />
        Please note that if a student exceeds the age limit of 28 years or loses
        his/her studentship, the insurance benefit will not be available.
      </p>
    </div>
  );
};

export default PlanThree;
