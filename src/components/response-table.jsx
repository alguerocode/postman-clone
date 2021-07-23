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
           <button className="nav-link" id="pills-headers-tab" data-bs-toggle="pill" data-bs-target="#pills-headers" type="button" role="tab" aria-controls="pills-headers" aria-selected="false">
             Headers
           </button>
         </li>
       </ul>
       <div className="tab-content" id="pills-tabContent">
         <div
           className="tab-pane fade show active"
           id="pills-data"
           role="tabpanel"
           aria-labelledby="pills-data-tab"
         >
         <div className="data-content bg-light border border-1 rounded">
            {responseData}
         </div>
         </div>
         <div className="tab-pane fade" id="pills-headers" role="tabpanel" aria-labelledby="pills-headers-tab">
          <div className="header-content bg-light border border-1 rounded">
            {responseHeaders}
          </div>
         </div>
       </div>
     </div> 
   </React.Fragment>
 );
};

export default ResponseTable;
