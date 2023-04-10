import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOpt from "../AppointmentOpt/AppointmentOpt";
import AppointmentModal from "../AppointmenModal/AppointmentModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  // for date wise data loading
  const date = format(selectedDate, "PP");

  const {
    data: appointOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    // added date as query key
    queryKey: ["doctorsServices", date],
    queryFn: async () => {
      const res = await fetch(
        `https://medi-service-server-site.vercel.app/doctorsServices?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-12  px-16 pb-16 shadow-md">
      <p
        className="font-bold lg:text-xl mb-6 text-sm text-center"
        style={{
          color: "#184C4f",
        }}
      >
        Available appointments on: {format(selectedDate, "PPPP")}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {appointOptions.map((option) => (
          <AppointmentOpt
            setTreatment={setTreatment}
            key={option._id}
            option={option}
          ></AppointmentOpt>
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          selectedDate={selectedDate}
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
