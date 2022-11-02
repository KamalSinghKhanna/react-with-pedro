import axios from "axios";
import React, { useEffect, useState } from "react";

const CatFact = () => {
  const [catFact, setCatFact] = useState(null);
  const [name, setName] = useState("")
 
  const fetchCatFact = () =>{
    axios
    .get(`https://api.agify.io/?name=${name}`)
    .then((response) => {
      setCatFact(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <input type="text" placeholder="Ex. Kamal..." onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={fetchCatFact}>Predict Age</button>
      <h1>Name: {catFact?.name}</h1>
      <h1>Predicted Age: {catFact?.age}</h1>
      <h1>count: {catFact?.count}</h1>
    </div>
  );
};

export default CatFact;
