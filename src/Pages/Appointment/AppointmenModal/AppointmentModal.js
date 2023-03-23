import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AppointmentModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PPPP");

  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const nameOfPatient = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: nameOfPatient,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-4 text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              disabled
              placeholder="Type here"
              value={date}
              className="input input-bordered input-secondary w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Type your name"
              className="input input-bordered input-secondary w-full "
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Type your email"
              className="input input-bordered input-secondary w-full "
            />
            <input
              name="phone"
              type="number"
              placeholder="Type your phone number"
              className="input input-bordered input-secondary w-full "
            />
            <input
              type="submit"
              value="Submit"
              className="w-full btn btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
