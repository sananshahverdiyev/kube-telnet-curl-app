// src/components/CurlForm.js
import React, { useState } from "react";
import axios from "axios";

const CurlForm = () => {
  const [podIp, setPodIp] = useState("");
  const [port, setPort] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("/curl", { params: { pod_ip: podIp, port } });
      setResponse(res.data.output || res.data.error);
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div>
      <h2>Curl a Pod</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pod IP"
          value={podIp}
          onChange={(e) => setPodIp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Port"
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <pre>{response}</pre>
    </div>
  );
};

export default CurlForm;
