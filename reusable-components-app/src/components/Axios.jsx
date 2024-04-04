import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <div style={{marginTop: '150px'}}>
        <h1 style={containerStyle}>Axios Get</h1>
        {data.map(({ id, title }) => {
          return (
            <div style={containerStyle} key={id}>
              <h3>{id}:{title}</h3>
            </div>
          );
        })}
      </div>
  );
};

export default Axios;
