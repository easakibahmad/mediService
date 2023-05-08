import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import health from "../../../assets/images/health.jpg";
import medicalTeam from "../../../assets/images/doctorsServices.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const disabledDates = { before: new Date() };

  const tileDisabled = ({ date }) => {
    const now = new Date();
    const dayOfWeek = date.getDay();
    return (
      (disabledDates.before && date < disabledDates.before) ||
      dayOfWeek === 5 ||
      date.valueOf() < now.setHours(0, 0, 0, 0)
    );
  };

  return (
    <header
      className=""
      style={{
        background: `url(${health})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero pt-8 pb-4">
        <div className="hero-content text-md flex-col md:flex-row-reverse">
          <img
            src={medicalTeam}
            alt="medicalTeam"
            className="md:block hidden lg:w-1/2 h-64"
          />
          <div
            style={{
              color: "#184C4f",
              backgroundColor: "white",
            }}
            className="p-2 rounded"
          >
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              tileDisabled={tileDisabled}
              minDate={new Date()}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;

// import React from "react";
// import { DayPicker } from "react-day-picker";

// import health from "../../../assets/images/health.jpg";
// import "react-day-picker/dist/style.css";

// import medicalTeam from "../../../assets/images/doctorsServices.png";

// const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
//   const disabledDays = {
//     before: new Date(), // disable all previous days
//   };

//   return (
//     <header
//       className=""
//       style={{
//         background: `url(${health})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="hero pt-8 pb-4">
//         <div className="hero-content  text-md flex-col md:flex-row-reverse">
//           <img
//             src={medicalTeam}
//             alt="medicalTeam"
//             className="md:block hidden lg:w-1/2 h-64"
//           />
//           <div
//             style={{
//               color: "#184C4f",
//               backgroundColor: "white",
//             }}
//           >
//             <DayPicker
//               mode="single"
//               selected={selectedDate.toISOString()}
//               onSelect={setSelectedDate}
//               toDate={new Date()}
//               disabledDays={{ before: new Date() }}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default AppointmentBanner;
