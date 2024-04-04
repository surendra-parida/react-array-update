import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import NoteContext from "../NoteContext";

const Axios = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  const contextData=useContext(NoteContext)

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <div style={{marginTop: '150px', marginBottom: '50px'}}>
        <h1 style={containerStyle}>Axios Get</h1>
        {data.map(({ id, title }) => {
          return (
            <div style={containerStyle} key={id}>
              <h3>{id}:{title}</h3>
            </div>
          );
        })}
        <h1>This student: {contextData.name} is from class: {contextData.class}.</h1>
      </div>
  );
};

export default Axios;
