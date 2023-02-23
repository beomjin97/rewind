import React, { useState, useEffect } from "react";
import API from "../api";

const Home = () => {
  const [data, setData] = useState("Home");
  useEffect(() => {
    API.get("/api").then((res) => setData(res.data));
  }, []);

  return <div>{data}</div>;
};

export default Home;
