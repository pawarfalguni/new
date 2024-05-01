import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import f from "../Image/f.jpg";
import styles from "./HrLogin.module.css";

const HrLogin = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (uname === "Admin" && pwd === "pass") {
      navigate("/employedata");
    } else {
      alert("Invalid Data");
    }
  };
  return (
    <main className={styles.mean}>
      <div>
        <img src={f}></img>
      </div>

      <div
        className="col-4 p-5 mx-auto bg-secondary p-5 mb-4"
        id={styles.hrlogin}
      >
        <h3 className={styles.head}>Login Here</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="uname"
            value={uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
            placeholder="Username"
          />{" "}
          <br />
          <br />
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            placeholder="Password"
          />
          <br />
          <br />
          <input type="submit" value="Login" className="btn btn-success" />
          <br />
          <br />
        </form>
        <br></br>
      </div>
    </main>
  );
};
export default HrLogin;
