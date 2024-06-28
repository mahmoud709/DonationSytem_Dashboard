import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function SideBar({ userData, setUserData }) {
   console.log(userData);
   const navigate = useNavigate();

   function logOut() {
      localStorage.removeItem('token');
      setUserData(null);
      navigate('/login');
   }

   return (
      <div className="row">
         <div className="col-md-3 vh-100 pt-5 shadow">
            <div className="links">
               <div className="title-heading py-4 px-1">
                  <Link to="/dashboard" className="h5 ps-3">
                     Dashboard
                  </Link>
               </div>
               <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                     <li className="accordion-header">
                        <h4 
                           className="accordion-button collapsed" 
                           type="button" 
                           data-bs-toggle="collapse" 
                           data-bs-target="#flush-collapseOne"
                        >
                           Organization
                        </h4>
                     </li>
                     <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                           <Link className="d-block mb-3" to="organizations">
                              Show Organization
                           </Link>
                           <Link className="d-block" to="organizations/add">
                              Add Organization
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion accordion-flush" id="accordionFlushExample2">
                  <div className="accordion-item">
                     <li className="accordion-header">
                        <h4 
                           className="accordion-button collapsed" 
                           type="button" 
                           data-bs-toggle="collapse" 
                           data-bs-target="#flush-collapseTwo"
                        >
                           Brands
                        </h4>
                     </li>
                     <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample2">
                        <div className="accordion-body">
                           <Link className="d-block mb-3" to="brands">
                              Show Brands
                           </Link>
                           <Link className="d-block" to="brands/add">
                              Add Brands
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               {userData ? (
                  <button className="bg-danger p-3 text-light" onClick={logOut}>
                     Logout
                  </button>
               ) : ''}
            </div>
         </div>
         <Outlet />
      </div>
   );
}
