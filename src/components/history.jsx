import React from "react";

const History = ({
  history,
  setHistory,
  setHeaders,
  setMethod,
  setUrl,
  setBody,
  clearResponseTable,
}) => {
  clickHistoryItemHandler = () =>{};
  
  return (
    <React.Fragment>
      <ul className="list-group ms-5">
        <li className="list-group-item d-flex justify-content-center align-items-center pe-2 border-1 border-warning">
          <h3 className="text-warning">History Table</h3>
        </li>
        {!history.length ? (
          <div className="text-center">No history items available</div>
        ) : (
          history.map((request) => (
            <li className="list-group-item d-flex justify-content-between align-items-center pe-2">
              {request.url}
              <span className="badge bg-primary rounded-pill">{request.method}</span>
            </li>
          ))
        )}
      </ul>
    </React.Fragment>
  );
};
{
  /* <li className="list-group-item d-flex justify-content-between align-items-center pe-2">
          http://localhost:3000/add
          <span className="badge bg-primary rounded-pill">post</span>
        </li> */
}
export default History;
