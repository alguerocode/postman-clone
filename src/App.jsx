import React, { useEffect, useState } from "react";
import {
  History,
  ResponseTable,
  RequestTable,
  NavBar,
  UrlInput,
} from "./all-components";

const App = () => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState("");
  const [responseData, setResponseData] = useState("");
  const [responseHeaders, setResponseHeaders] = useState("");
  const [responseCookie, setResponseCookie] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setMethod("GET");
    setUrl("http://localhost:PORT");
  }, []);

  const clearResponseTable = () => {
    setResponseData("");
    setResponseHeaders("");
    setResponseCookie("");
  };

  const sendHandler = () => {
    console.log({ url, method, headers, body });
    const id = Math.random();
    
    setHistory([...history, { id: id.toString(), url, method, headers, body }]);

  };
  return (
    <React.Fragment>
      <NavBar />
      <div className="container-lx">
        <div className="row justify-content-center g-5">
          <div className="col-4">
            <History
              history={history}
              setMethod={setMethod}
              setHeaders={setHeaders}
              setUrl={setUrl}
              setBody={setBody}
              clearResponseTable={clearResponseTable}
            />
          </div>
          <div className="col">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <UrlInput
                url={url}
                setUrl={setUrl}
                method={method}
                setMethod={setMethod}
                setHeaders={setHeaders}

              />
              <RequestTable
                body={body}
                setBody={setBody}
                headers={headers}
                setHeaders={setHeaders}
                sendHandler={sendHandler}
              />
              <ResponseTable
                responseData={responseData}
                responseCookie={responseCookie}
                responseHeaders={responseHeaders}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
