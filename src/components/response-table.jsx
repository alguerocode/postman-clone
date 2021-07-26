import React,{useEffect,useState} from "react";
import JSONPretty from "react-json-pretty";

const ResponseTable = ({
  responseCookie,
  responseHeaders,
  responseData,
  responseStatus,
}) => {
  const [statusClassName, setStatusClassName] = useState("nav-item border rounded border-2 border-success")
  useEffect(() => {
    if(responseStatus >= 400) {
      setStatusClassName("nav-item border rounded border-2 border-danger");
    } else if(responseStatus >= 300) {
      setStatusClassName("nav-item border rounded border-2 border-warning");
    } else {
      setStatusClassName("nav-item border rounded border-2 border-success");
    }
  },[responseStatus])
  return (
    <React.Fragment>
      <div className="mb-3">
        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-data-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-data"
              type="button"
              role="tab"
              aria-controls="pills-data"
              aria-selected="true"
            >
              Data
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-resheaders-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-resheaders"
              type="button"
              role="tab"
              aria-controls="pills-resheaders"
              aria-selected="false"
            >
              Headers
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-cookie-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-cookie"
              type="button"
              role="tab"
              aria-controls="pills-cookie"
              aria-selected="false"
            >
              Cookies
            </button>
          </li>
          <li
            className={statusClassName}
            role="presentation"
            >
            <div className="nav-link text-muted">
              {responseStatus}
            </div>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-data"
            role="tabpanel"
            aria-labelledby="pills-data-tab"
          >
            <div
              className="data-content bg-light border border-1 rounded p-3"
              style={{
                width: "523px",
                height: "246px",
              }}
            >
              <JSONPretty data={responseData} mainStyle="background:#f8f9fa" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-resheaders"
            role="tabpanel"
            aria-labelledby="pills-resheaders-tab"
          >
            <div
              className="resheader-content bg-light border border-1 rounded p-3"
              style={{
                width: "523px",
                height: "246px",
              }}
            >
              {responseHeaders}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-cookie"
            role="tabpanel"
            aria-labelledby="pills-cookie-tab"
          >
            <div
              className="cookie-content bg-light border border-1 rounded p-3"
              style={{
                width: "523px",
                height: "246px",
              }}
            >
              {responseCookie}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResponseTable;
