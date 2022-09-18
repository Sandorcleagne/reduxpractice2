import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storingData } from "../features/FormData/Data.js";
const Demo = () => {
  const userData = useSelector((state) => state.formdata.value);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  console.log(userData);
  console.log(inputData);
  return (
    <>
      <div>{userData.payload}</div>
      <div>
        <input
          type="text"
          name="name"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={() => dispatch(storingData(inputData))}>submit</button>
      </div>
    </>
  );
};

export default Demo;
