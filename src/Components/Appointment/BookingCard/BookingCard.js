import React from 'react';
import { useState } from 'react';
import AppointmentForm from '../Appointment/AppointmentForm/AppointmentForm';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
    setIsOpen(true);
    }

    const closeModal = () => {
       setIsOpen(false)
    }
    return (
      <section className="col-md-4 mb-5">
        <div className="card pb-3">
          <div className="card-body text-center">
            <h5 className="card-title text-primary">{booking.subject}</h5>
            <h6>{booking.visitingHour}</h6>
            <p>{booking.totalSpace} SPACES AVAILABLE</p>
            <button onClick={openModal}
              style={{ width: "50%", color: "black" }}
              className="btn main-btn  text-bold font-weight:'bold"
            > BOOK APPOINTMENT
            </button>
            <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
          </div>
        </div>
      </section>
    );
};

export default BookingCard;