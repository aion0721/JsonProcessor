import React from "react";
import { useSystemContext } from "../context/SystemContext";

const DiffJson = () => {
  const { serv, setServ, ssch, setSsch } = useSystemContext();
  var mergedData = {};

  // Label const
  const EXIST = "●";
  const NOTEXIST = "×";

  // Get Each Keys
  const servKeys = Object.keys(serv);
  const sschKeys = Object.keys(ssch);

  // Get UniqueKey
  const uniqueKey = Array.from(new Set(servKeys.concat(sschKeys)));

  function getUniqueHost(hostname) {
    if (
      typeof serv[hostname] === "object" &&
      typeof ssch[hostname] === "object"
    ) {
      return Array.from(new Set(serv[hostname].concat(ssch[hostname])));
    } else if (
      typeof serv[hostname] === "object" &&
      typeof ssch[hostname] === "undefined"
    ) {
      return serv[hostname];
    } else {
      //typeof serv[hostname] === 'undefined' && typeof ssch[hostname] === 'object')}{
      return ssch[hostname];
    }
  }

  {
    uniqueKey.map((e) => {
      const uniqueHost = getUniqueHost(e);
      mergedData = {
        ...mergedData,
        [e]: uniqueHost,
      };
    });
  }

  function checkArray(target, keyword) {
    if (typeof target === "undefined") {
      return NOTEXIST;
    } else {
      return target.includes(keyword) ? EXIST : NOTEXIST;
    }
  }

  return (
    <div>
      <p>DiffJson</p>
      <button onClick={() => console.log()}>showConsole</button>
      <table>
        <thead>
          <tr>
            <td>hostname</td>
            <td>username</td>
            <td>serv</td>
            <td>ssch</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(mergedData).map((e) =>
            mergedData[e].map((x) => (
              <tr>
                <td>{e}</td>
                <td>{x}</td>
                <td>{checkArray(serv[e], x)}</td>
                <td>{checkArray(ssch[e], x)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DiffJson;
