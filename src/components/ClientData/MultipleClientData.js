import Select from "react-select";
import React, { useState } from "react";
import clientdata from "../../../public/constants/clientdata";

function ClientData(props) {
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  return (
    <div className="ClientData">
      ClientData:{" "}
      <Select
        placeholder="Select Option"
        isMulti
        name="value"
        width="200px"
        menuColor="red"
        options={clientdata}
        className="basic-multi-select"
        classNamePrefix="select"
        menusOpen="true"
        onChange={handleChange}
        value={cliendata.filter((obj) => selectedValue.includes(obj.value))}
      />
    </div>
  );
}

export default ClientData;
