import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function SideBar() {
   return (
      <div className="row">
         <div className="col-md-3 vh-100 pt-5 shadow">
            <div className="links">
               <div className="title-heading py-4 px-1 ">
                  <Link to="/dashboard" className="h5 ps-3 ">
                     Dashboad
                  </Link>
               </div>
               <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                     <li className="accordion-header">
                        <h4 className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                           organization
                        </h4>
                     </li>
                     <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                           <Link className="d-block mb-3" to="organizations">
                              show organization
                           </Link>
                           <Link className="d-block" to="organizations/add">
                              add organization
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion accordion-flush" id="accordionFlushExample2">
                  <div className="accordion-item">
                     <li className="accordion-header">
                        <h4 className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                           brands
                        </h4>
                     </li>
                     <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample2">
                        <div className="accordion-body">
                           <Link className="d-block mb-3" to="brands">
                              show brands
                           </Link>
                           <Link className="d-block" to="brands/add">
                              add brands
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <>
            <Outlet />
         </>
      </div>
   );
}
