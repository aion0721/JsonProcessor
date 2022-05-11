import React from "react";
import { useSystemContext } from "../context/SystemContext";

const ReadJson = () => {
  const { serv, setServ, ssch, setSsch } = useSystemContext();

  function getContents(e) {
    var file = e.target.form[0].files;
    console.log(e.target.form.name);
    //console.log(file.length);
    for (var i = 0; i < file.length; i++) {
      getText(file[i], e.target.form.name);
    }
  }

  function getText(e, cate) {
    var reader = new FileReader();
    reader.readAsText(e);
    reader.onload = function () {
      const ret = reader.result.split("\r\n");
      if (cate === "serv") {
        setServ((prevServ) => ({ ...prevServ, [e.name]: ret }));
      } else if (cate === "ssch") {
        setSsch((prevSsch) => ({ ...prevSsch, [e.name]: ret }));
      }
    };
  }

  return (
    <div>
      <p>ReadJson</p>
      <button onClick={() => setServ({ tirmap1f_os: ["root", "login00"] })}>
        aaa
      </button>
      <form name="serv">
        <h1>Serv</h1>
        <input type="file" id="serv" multiple />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            getContents(e);
          }}
        >
          OK
        </button>
      </form>

      <form name="ssch">
        <h1>SSCH</h1>
        <input type="file" id="ssch" multiple />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            getContents(e);
          }}
        >
          OK
        </button>
      </form>

      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          //console.log(Object.keys(TA).map((key) => key));
          console.log(serv);
        }}
      >
        showTA
      </button>
    </div>
  );
};

export default ReadJson;
