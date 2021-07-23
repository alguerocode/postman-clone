import React from "react";

const ResponseTable = ({responseCookie, responseHeaders, responseData}) => {
 return (
   <React.Fragment>
     <div className="mb-3">
       <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
         <li className="nav-item" role="presentation">
           <button className="nav-link active" id="pills-data-tab" data-bs-toggle="pill" data-bs-target="#pills-data" type="button" role="tab" aria-controls="pills-data" aria-selected="true">
             Data
           </button>
         </li>
         <li className="nav-item" role="presentation">
           <button className="nav-link" id="pills-resheaders-tab" data-bs-toggle="pill" data-bs-target="#pills-resheaders" type="button" role="tab" aria-controls="pills-resheaders" aria-selected="false">
             Headers
           </button>
         </li>
       </ul>
       <div className="tab-content" id="pills-tabContent">
         <div
           className="tab-pane fade show active"
           id="pills-data"
           role="tabpanel"
           aria-labelledby="pills-data-tab">
         <div className="data-content bg-light border border-1 rounded">
            {responseData}
         </div>
         </div>
         <div className="tab-pane fade" id="pills-resheaders" role="tabpanel" aria-labelledby="pills-resheaders-tab">
          <div className="resheader-content bg-light border border-1 rounded">
            {responseHeaders}
          </div>
         </div>
       </div>
     </div> 
   </React.Fragment>
 );
};

export default ResponseTable;
