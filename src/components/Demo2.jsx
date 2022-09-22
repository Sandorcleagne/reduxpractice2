import React from "react";
import { useSelector } from "react-redux";

const Demo2 = () => {
  const userData = useSelector((state) => state.formdata.value);
  return (
    <div>
      {" "}
      NAME : {userData.name},,,,,,,,,,
      {"         "}
      NUMBER : {userData.email},,,,,,,,,
      {"         "}
      eMAIL : {userData.mobnumber},,,,,,,,
    </div>
  );
};

export default Demo2;
