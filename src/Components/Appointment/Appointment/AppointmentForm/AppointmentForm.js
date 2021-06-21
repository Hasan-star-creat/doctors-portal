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
   const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-primary">{appointmentOn}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="time" {...register("time", { required: true })}  />
          <br />
          {errors.time && <span className="text-danger">Time is required</span>}
          <br />
          <input {...register("name", { required: true })} placeholder="Your Name" />
          <br />
          {errors.name && <span className="text-danger">Name is required</span>}
          <br />
          <input {...register("Phone", { required: true })} placeholder="Phone Number" />
          <br />
          {errors.phone && <span className="text-danger">Phone is required</span>}
          <br />
          <input {...register("email", { required: true })} placeholder="Email" />
          <br />
          {errors.email && <span className="text-danger">Email is required</span>}
          <br />
          <input type="date" {...register("date", { required: true })} placeholder="Date" />
          <br />
          {errors.date && <span className="text-danger">date is required</span>}
          <br />

          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;