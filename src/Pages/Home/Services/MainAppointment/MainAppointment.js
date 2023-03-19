import React from "react";
import doctor from "../../../../assets/images/doctor.png";
import appointment from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../../components/primaryButton/PrimaryButton";
const MainAppointment = () => {
  return (
    <div
      className="mb-16 mx-16 md:mt-24"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="lg:w-1/2 -mt-40 md:block hidden rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Start Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAppointment;
