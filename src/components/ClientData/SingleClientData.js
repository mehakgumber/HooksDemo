import Select from "react-select";
import React, { useState, useEffect } from "react";
import clientdata from "../../../public/constants/clientdata";
//import { getOptionValue } from 'react-select/src/builtins';
import CType from "../Ctype/CType";
import ctype from "../../../public/constants/ctype";
import "./DropDown.css";

function ClientData(props) {
  const [selectedValue, setSelectedValue] = useState(null);
  useEffect(() => {
    console.log("useeffect of singleclientdata");
    console.log("changibg", selectedValue);
    console.log("changibg", selectedValue);
  }, [selectedValue]);
  const getValue = () => {
    console.log("GETVALUE of clientdata");
    return clientdata.find((obj) => obj.value === selectedValue);
  };
  const handleChange = (e) => {
    console.log("handle oF cLIENTDATA");
    console.log("changing:::", e.value);
    setSelectedValue(e.value);
    console.log("selectedvalue", selectedValue);
  };
  return (
    <div className="ClientData">
      <label className="layout-style"> ClientData:</label>
      <Select
        className="layout-style"
        width="400px"
        name="label"
        menuColor="red"
        options={clientdata}
        onChange={handleChange}
        value={getValue}
      />
      <CType selectedValue={selectedValue} />
    </div>
  );
}
export default ClientData;
