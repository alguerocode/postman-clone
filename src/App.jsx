import React from "react";
import brand from "../public/brand.png";
import { History, ResponseTable, RequestTable } from "./all-components";
const App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="img-fuild"
              width="200"
              src={brand}
              alt="postman logo"
            />
          </a>
        </div>
      </nav>
      <div className="container-lx">
        <div className="row justify-content-center g-5">
          <div className="col-4">
            <History />
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <RequestTable />
              <ResponseTable />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
