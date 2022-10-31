import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Show from "./Show";
import Main from "./Main";

function Info() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  // const [showHome, setShowHome] = useState(false);
  //const submit = localStorage.getItem("submit");
  const get_name = localStorage.getItem("name");
  const get_dob = localStorage.getItem("dob");
  const get_mobile = localStorage.getItem("mobile");

  const navigate = useNavigate();

  // useEffect(()=>{
  //   if (submit) {
  //     setShowHome(!showHome);
  //   }
  // },[name, dob, mobile]);

  const validation = () => {
    alert("Already exist");
  };

  const handleClick = () => {
    if (name && dob && mobile) {
      if (name == get_name || dob == get_dob || mobile == get_mobile) {
        validation();
        navigate("/main");
      } else {
        localStorage.setItem("name", name);
        localStorage.setItem("dob", dob);
        localStorage.setItem("mobile", mobile);
        localStorage.setItem("submit", name);
        alert("Account created successfully");
        navigate("/main");
      }
    }
  };

  return (
    <div style={{ marginLeft: "100px", marginTop: "50px" }}>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="Dob"
        />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile"
        />

        <input type="submit" value="Submit" onClick={handleClick}></input>
      </form>
    </div>
  );
}

export default Info;
