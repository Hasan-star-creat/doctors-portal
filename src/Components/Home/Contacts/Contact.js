import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
     const { register, handleSubmit, watch, formState: { errors }, } = useForm();

     const onSubmit = (data) => console.log(data);

    return (
      <section className="contact my-5 py-5">
        <div className="container">
          <div className="text-center">
            <h5 className="text-primary">Contact</h5>
            <h3 className="text-white mb-5">Always connect with us</h3>
          </div>
          <div className="form">
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="feildInput"
                {...register("email", { required: true })}
                placeholder="Email Address"
              />
              {errors.email && (
                <span className="text-danger">email is required</span>
              )}
              <br />

              <input
                className="feildInput"
                {...register("subject", { required: true })}
                placeholder="Subject"
              />
              {errors.subject && (
                <span className="text-danger">Subject is required</span>
              )}
              <br />

              <textArea
                className="textAreaFeild"
                cols="30"
                rows="10"
                {...register("message", { required: true })}
                placeholder="Message"
              />
              {errors.message && (
                <span className="text-danger">Message is required</span>
              )}
              <br />
              <input className="btn main-btn" type="submit" />
            </form>
          </div>
        </div>
      </section>
    );
};

export default Contact;