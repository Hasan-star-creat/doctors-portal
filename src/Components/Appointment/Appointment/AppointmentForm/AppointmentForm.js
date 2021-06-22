import React from 'react';
import Modal from "react-modal";
import { useForm } from "react-hook-form";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    data.servic = appointmentOn;
    data.create = new Date();
    data.date = date
    fetch("http://localhost:5050/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("appointment created successfully");
          closeModal();
        }
      });
     
    
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-primary">{appointmentOn}</h2>
        <p>{date.toDateString()}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          <br />
          {errors.name && <span className="text-danger">Name is required</span>}
          <br />
          <input
            {...register("Phone", { required: true })}
            placeholder="Phone Number"
          />
          <br />
          {errors.phone && (
            <span className="text-danger">Phone is required</span>
          )}
          <br />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <br />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
          <br />

          <input type="submit" className="btn main-btn" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;