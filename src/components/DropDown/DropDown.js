import clientdata from "../../../public/constants/clientdata";
import ClientData from "../ClientData/SingleClientData";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import SingleClientData from "../ClientData/SingleClientData";
import "./DropDown.css";
import MultipleClientData from './MultipleClientData';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom';
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: () => ({
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function DropDown() {
  const data = [
    {
      value: 1,
      label: "Single",
    },
    {
      value: 2,
      label: "Multiple",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (e) => {
    console.log(e.value);
    setSelectedValue(e.value);
    console.log(selectedValue);
  };
  const getValue = () => {
    console.log("GETVALUE of layout");
    return data.find((obj) => obj.value === selectedValue);
  };
  useEffect(() => {
    console.log("use effect of layout");
    getClientData();
  }, [selectedValue]);

  const getClientData = () => {
    console.log("getclientdataof layout");
    if (selectedValue == 1) {
      return (
        <div className="row">
          <SingleClientData />
        </div>
      );
    }
    if (selectedValue == 2) {
      return (
        <div className="row">
          <MultipleClientData />
        </div>
      );
    }
  };

  return (
    <div className="Layout">
      SELECT OPTION:{" "}
      <Select
        className="layout-style"
        style={customStyles}
        placeholder="Select Option"
        width="50px"
        menuColor="red"
        name="label"
        value={getValue} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />{" "}
      {getClientData()}
    </div>
  );
}

export default DropDown;
