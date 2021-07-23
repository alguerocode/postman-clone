import React from "react";

const UrlInput = ({ url, setUrl, method, setMethod }) => {
  return (
    <React.Fragment>
      <div className="input-group mb-4  justify-content-center">
        <div className="d-flex flex-row">
        <span className="input-group-text" id="url">
          URL
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="url"
          aria-label="url"
          aria-describedby="url"
          value={url}
          onChange={(e)=>setUrl(e.target.value)}
        />
        <select className="form-select" >
          <option value="GET" selected>GET</option>
          <option value="POST">POST</option>
          <option value="DELETE">DELETE</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
        </select>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UrlInput;
