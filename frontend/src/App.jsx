import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [dt, setDt] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/post')
      .then((res) => setDt(res.data))
      .catch((err) => console.log(err));
  }, []);
 console.log(dt)
  return (
    <div >
      <center>😊 welcome Aman 😊</center>
      <br></br>
    {dt.map((v,i)=>(
      <div key={i}>
       <b>{v.title}</b>
       <p>{v.body}</p>
      </div>
    ))}
    </div>
  );
}
