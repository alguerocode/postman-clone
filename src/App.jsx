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
  const [history, setHistory] = useState([]);
  const [responseData, setResponseData] = useState("");
  const [responseHeaders, setResponseHeaders] = useState("");
  const [responseCookie, setResponseCookie] = useState("");
  const [responseStatus, setResponseStatus] = useState("");

  useEffect(() => {
    setMethod("GET");
    setUrl("http://localhost:PORT");
    setHeaders("{\n\n}");
    setBody("{\n\n}");
  }, []);

  const clearResponseTable = () => {
    setResponseData("");
    setResponseHeaders("");
    setResponseCookie("");
  };

  const sendHandler = async () => {
    try {
      const id = Math.random();
      setHistory([
        ...history,
        { id: id.toString(), url, method, headers, body },
      ]);
      // headers operation

      const parsedHeaders = new Headers(JSON.parse(headers));
      // Object.entries()
      // header.append("Access-Control-Allow-Origin","*");
      // header.append('Content-Type','application/json');
      // 
      const res = await fetch(url, {
        headers:parsedHeaders,
        body: method != "GET" ? body : undefined,
        method: method,
        credentials: "include"
      });
      const data = await res.json();

      // set the response table
      console.log(data);

      if (data) setResponseData(JSON.stringify(data));
      if (document.cookie) setResponseCookie(document.cookie);

      setResponseHeaders(JSON.stringify(res.headers));
      setResponseStatus(res.status);
    } catch (error) {
      console.error(error); // add toest functionality
    }
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
