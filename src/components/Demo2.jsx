import React from "react";
import { useSelector } from "react-redux";

const Demo2 = () => {
  const userData = useSelector((state) => state.formdata.value);
  return <div>{userData.payload}</div>;
};

export default Demo2;
