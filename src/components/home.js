import React, { useState } from "react";
import { Button } from "@mui/material";

const ImportButton = () => {
  const [result, setresult] = useState(null);
  const [bollywoodData, setBollywoodData] = useState(null);
  const getData = async () => {
    setBollywoodData(null)
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
  const getBollywoodData = async () =>{
    setresult(null)
    try{
      const response =  await fetch("http://localhost:8000/api/bollywooddata")
      if(!response.ok){
        throw new Error("failed to fetch Bollywood Data")
      }
      const result = await response.json()
      console.log(result)
      setBollywoodData(result)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Button onClick={getData}>Hollywood</Button>
      <Button onClick={getBollywoodData}>Bollyywood</Button>
      {result?.map((item) => {
        return (
          <ul key={item.movie_id}>
            <li>{item.title}</li>
          </ul>
        );
      })}
      {bollywoodData?.map((item) => {
        return (
          <ul key={item.movie_id}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ImportButton;
