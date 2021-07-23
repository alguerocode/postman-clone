import React from "react";
import { History, ResponseTable, RequestTable,NavBar } from "./all-components";



const App = () => {
  return (
    <React.Fragment>
      {/* navbar */}
      <NavBar />
      <div className="container-lx">
        <div className="row justify-content-center g-5">
          <div className="col-4">
            <History />
          </div>
          <div className="col">
            <div className="d-flex flex-column justify-content-between align-items-start">
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
