import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";

const StudentOperation = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/student")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("no data found");
      });
  });
  const deleteData = (sid) => {
    axios
      .delete(`http://localhost:4000/student/${sid}`)
      .then((res) => {
        alert("Data Deleted Succ....");
      })
      .catch((err) => {
        alert("Unable to Delete the data");
      });
  };
  return (
    <main>
      <section className={studentstyles.bg_image}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Employee Operation</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Employee Operation
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
            <div className="col-md-12">
              <div className="clearfix"></div>

              <div className="table-responsive">
                <table className="table table-bordered " id={studentstyles.but}>
                  <thead className="table-primary" id={studentstyles.mytable}>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Address</th>
                      <th scope="col">Experience</th>
                      <th scope="col">Designation</th>
                      <th scope="col">Leaves</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Education</th>
                      <th scope="col">Joining_date</th>
                      <th scope="col">Date of Birth</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  {data.map((stu) => {
                    return (
                      <tr>
                        <td>{stu.name}</td>
                        <td>{stu.email}</td>
                        <td>{stu.phone}</td>
                        <td>{stu.salary}</td>
                        <td>{stu.address}</td>
                        <td>{stu.experience}</td>
                        <td>{stu.designation}</td>
                        <td>{stu.leaves}</td>
                        <td>{stu.gender}</td>
                        <td>{stu.education}</td>
                        <td>{stu.joining_date}</td>
                        <td>{stu.birth}</td>
                        <td className="p-2">
                          <button
                            className="btn btn-danger me-4 border-1"
                            onClick={(e) => deleteData(stu._id)}
                          >
                            Delete
                          </button>

                          <NavLink to={`/editemploye/${stu._id}`}>
                            <button className="btn btn-warning border-1">
                              Edit
                            </button>
                          </NavLink>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudentOperation;
