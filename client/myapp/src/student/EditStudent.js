import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [designation, setDesignation] = useState("");
  const [leaves, setLeaves] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [joining_date, setJoining_date] = useState("");
  const [birth, setBirth] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/student/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setSalary(res.data.salary);
        setAddress(res.data.address);
        setExperience(res.data.experience);
        setDesignation(res.data.designation);
        setLeaves(res.data.leaves);
        setEducation(res.data.education);
        setGender(res.data.gender);
        setJoining_date(res.data.joining_date);
        setBirth(res.data.birth);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sumbitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/student/${id}`, {
        name,
        email,
        phone,
        salary,
        address,
        experience,
        designation,
        leaves,
        gender,
        education,
        joining_date,
        birth,
      })
      .then((res) => {
        alert("Data Updated Succ...");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <section className={studentstyles.bg_image}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Edit Employee</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Edit Employee{" "}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>

            <div className="col-md-4">
              <div
                class="shadow-lg p-3 mb-5 bg-white rounded"
                id={studentstyles.all}
              >
                <form onSubmit={sumbitHandler}>
                  <div class="mb-4 mt-2">
                    <label className="p-1">Name:</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <label className="p-1">Email ID:</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <label className="p-1">Contact Details:</label>
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      placeholder="Phone"
                      pattern="[1-9]{1}[0-9]{9}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div class="mb-4">
                    <label className="p-1">Date of Birth:</label>
                    <input
                      type="date"
                      name="birth"
                      class="form-control"
                      placeholder="Date of Birth"
                      value={birth}
                      onChange={(e) => setBirth(e.target.value)}
                      required
                    />
                  </div>

                  <div class="mb-4">
                    <label className="p-1">Salary:</label>
                    <input
                      type="text"
                      name="salary"
                      class="form-control"
                      placeholder="salary"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>

                  <div class="mb-4">
                    <label className="p-1">Address:</label>
                    <input
                      type="text"
                      name="address"
                      class="form-control"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div class="mb-4">
                    <label className="p-1">Experience in yrs:</label>
                    <input
                      type="text"
                      name="experience"
                      class="form-control"
                      placeholder="Experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    />
                  </div>

                  <div class="mb-4">
                    <label className="p-1"> Role:</label>
                    <input
                      type="text"
                      name="designation"
                      class="form-control"
                      placeholder="Designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <label className="p-1">Total no of Leaves:</label>
                    <input
                      type="text"
                      name="leaves"
                      class="form-control"
                      placeholder="leaves"
                      value={leaves}
                      onChange={(e) => setLeaves(e.target.value)}
                    />
                  </div>

                  <div class="mb-4">
                    <label className="p-1">Gender:</label>
                    <input
                      type="text"
                      name="gender"
                      class="form-control"
                      placeholder="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>

                  <div class="mb-4">
                    <label className="p-1">Qualification:</label>
                    <input
                      type="text"
                      name="education"
                      class="form-control"
                      placeholder="education"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <label className="p-1">Joining Date:</label>
                    <input
                      type="date"
                      name="joining_date"
                      class="form-control"
                      placeholder="joining_date"
                      value={joining_date}
                      onChange={(e) => setJoining_date(e.target.value)}
                      required
                    />
                  </div>

                  <div class="mb-4">
                    <input
                      type="submit"
                      class="btn btn-warning"
                      value="Add Employee"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditStudent;
