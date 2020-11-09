import Select from "react-select";
import React, { useState, useEffect } from "react";
import ctype from "../../../public/constants/ctype";
import clientdata from "../../../public/constants/clientdata";
import "./DropDown.css";

function CType(props) {
  useEffect(() => {
    console.log("props::", props);
  }, []);
  const getParentValue = () => {
    const cvalue = clientdata.find((obj) => obj.value == props.selectedValue);
    return cvalue.label;
  };
  const getValue = () => {
    const parentValue = getParentValue();
    return ctype[parentValue];
  };
  const handleChange = (e) => {
    //   setCtypeValue(e.value);
    //   console.log(ctypeValue);
  };
  return (
    props.selectedValue && (
      <div className="CType">
        Ctypes:{" "}
        <Select
          className="layout-style"
          placeholder="Select Option"
          options={ctype[props.selectedValue]}
          onChange={handleChange}
          value={props.selectedValue}
        />
      </div>
    )
  );
}
export default CType;
