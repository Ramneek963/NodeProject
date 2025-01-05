import React, { useState } from "react";
import { Button } from "@mui/material";

const ImportButton = () => {
  const [result, setresult] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setresult(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button onClick={getData}>Hello</Button>
      {result?.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.first_name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ImportButton;
