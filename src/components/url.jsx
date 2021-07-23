import React from "react";

const UrlInput = ({ url, setUrl,method, setMethod }) => {
  return (
    <React.Fragment>
      <div className="d-flex flex-row input-group mb-4  justify-content-center">
        <span className="input-group-text" id="basic-addon1">
          URL
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="url"
          aria-label="url"
          aria-describedby="basic-addon1"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <select
          className="form-select"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET" defaultValue>
            GET
          </option>
          <option value="POST">POST</option>
          <option value="DELETE">DELETE</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
        </select>
      </div>
    </React.Fragment>
  );
};

export default UrlInput;
