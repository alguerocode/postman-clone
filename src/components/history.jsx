import React from "react";

const History = ({
  history,
  setHeaders,
  setMethod,
  setUrl,
  setBody,
  clearResponseTable,
}) => {
  const clickHistoryItemHandler = (e) => {
    const itemId = e.currentTarget.id;
    const requestItemConfig = history.find((item) => item.id === itemId);
    console.log(requestItemConfig);

    // set the data that exist in request item configuartion
    setMethod(requestItemConfig.method);
    setHeaders(requestItemConfig.headers);
    setUrl(requestItemConfig.url);
    setBody(requestItemConfig.body);

    clearResponseTable(); // clear the data of response table
  };

  return (
    <React.Fragment>
      <ul className="list-group ms-5">
        <li className="list-group-item d-flex justify-content-center align-items-center pe-2 border-1 border-warning">
          <h3 className="text-warning">History Table</h3>
        </li>
        {!history.length ? (
          <div className="text-center">No history items available</div>
        ) : (
          history.map((requestItem) => (
            <li
              key={requestItem.id}
              id={requestItem.id}
              className="list-group-item d-flex justify-content-between align-items-center pe-2 border-1 border-warning border-top-0"
              onClick={clickHistoryItemHandler}
            >
              <button className="btn p-0">{requestItem.url}</button>
              <span className="badge bg-primary rounded-pill">
                {requestItem.method}
              </span>
            </li>
          ))
        )}
      </ul>
    </React.Fragment>
  );
};

export default History;
