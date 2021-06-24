import React from "react";
import { useState } from "react";
import DhashbordSidbar from "../Dhashbord/DhashbordSidebar/DhashbordSidbar";

const AddDoctors = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
 

  const handleSubmit = () => {
      const formData = new FormData()
     formData.append('file', file);
     formData.append('name', info.name);
     formData.append('email', info.email)

    fetch("http://localhost:5050/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if(data){
          alert('doctors image insert')
        }
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="container-fluid row">
      <DhashbordSidbar></DhashbordSidbar>
      <div
        className="col-md-9 p-4 pr-5 ps-2"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Add a Doctor</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onBlur={handleBlur}
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddDoctors;
