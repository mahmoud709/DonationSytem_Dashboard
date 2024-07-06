import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_LINK } from '../../utils/api';

export default function Login({ saveUserData, userData = {} }) {

   let navigate = useNavigate();
   const [error, setError] = useState(null); 
   const [user, setUser] = useState({
      email: '',
      password: '',
   });

   function getUserData(eventInfo) {
      let myUser = { ...user };
      myUser[eventInfo.target.name] = eventInfo.target.value;
      setUser(myUser);
   }

   async function sendLoginToApi() {
      try {
         let { data } = await axios.post(`${API_LINK}/login`, user);
         if (data.success) {
            localStorage.setItem('token', data.token);
            saveUserData();
            if (userData && userData.role === "admin") {
               navigate('/')
               //  console.log("login success");
            } else {
               setError('only admin can be login');
            }
         }
      } catch (error) {
         setError(error.response.data.message);
      }
   }

   function submitLoginForm(e) {
      e.preventDefault();
      sendLoginToApi();
   }

   return (
      <>
         <div className="d-flex justify-content-center align-items-center w-100 pt-5">
            <div className="">

               <div className='text-center pt-5'>
                  <h3 className='fw-bold py-3'>Admin Login</h3>
                  {error && (
                     <div className="alert alert-danger" role="alert">
                        {error}
                     </div>
                  )}
               </div>


               <form onSubmit={submitLoginForm} style={{ width: 380 }}>
                  <label htmlFor="email" className="form-label text-capitalize fs-6">
                     email:
                  </label>
                  <input onChange={getUserData} type="email" className="form-control my-input mb-3 w-100 " name="email" id="email" placeholder='Email'></input>

                  <label htmlFor="password" className="form-label text-capitalize fs-6">
                     password:
                  </label>
                  <input onChange={getUserData} type="password" className="form-control my-input mv-3 w-100 " name="password" id="password" placeholder='Password'></input>
                  <div className="buttons py-3">
                     <button type="submit" className="btn btn-outline-dark w-100">
                        login
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}
