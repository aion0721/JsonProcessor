import React from "react";
import { useSystemContext } from "../context/SystemContext";

const ShowJson = () => {
  const { serv, setServ, ssch, setSsch } = useSystemContext();
  return (
    <div>
      ShowJson
      <h1>Serv</h1>
      <table>
        <thead>
          <tr>
            <td>hostname</td>
            <td>usrename</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(serv).map((e) =>
            serv[e].map((x) => (
              <tr key={x}>
                <td>{e}</td>
                <td>{x}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <h1>Ssch</h1>
      <table>
        <thead>
          <tr>
            <td>hostname</td>
            <td>usrename</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(ssch).map((e) =>
            ssch[e].map((x) => (
              <tr key={x}>
                <td>{e}</td>
                <td>{x}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowJson;
