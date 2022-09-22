import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storingData } from "../features/FormData/Data.js";
const Demo = () => {
  const userData = useSelector((state) => state.formdata.value);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    mobnumber: "",
  });
  const takeFromData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  console.log("inputData", userData);
  return (
    <>
      <div>
        NAME : {userData.name},,,,,,,,,,
        {"         "}
        NUMBER : {userData.email},,,,,,,,,
        {"         "}
        eMAIL : {userData.mobnumber},,,,,,,,
      </div>
      <div>
        <form action="">
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={(e) => takeFromData(e)}
            placeholder="enter your Name"
          />
          <input
            type="text"
            name="email"
            value={inputData.email}
            onChange={(e) => takeFromData(e)}
            placeholder="enter your Email"
          />
          <input
            type="text"
            name="mobnumber"
            value={inputData.mobnumber}
            onChange={(e) => takeFromData(e)}
            placeholder="enter your Phone Number"
          />
        </form>
        <button onClick={() => dispatch(storingData(inputData))}>submit</button>
      </div>
    </>
  );
};

export default Demo;
