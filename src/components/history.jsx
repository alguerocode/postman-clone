import React from "react";

const History = () => {
  return (
    <React.Fragment>
      <ul className="list-group ms-5 list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-center pe-2">
            http://localhost:3000/add
          <span className="badge bg-primary rounded-pill">post</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        http://localhost:3000/delete
          <span className="badge bg-primary rounded-pill">delete</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        http://localhost:3000/get
          <span className="badge bg-primary rounded-pill">get</span>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default History;
