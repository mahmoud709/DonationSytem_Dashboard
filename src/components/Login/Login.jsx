import axios from 'axios';
import React from 'react'
import {  useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { API_LINK } from '../../utils/api';

export default function Login({saveUserData , userData}) {
   
    let navigate = useNavigate();
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
      // console.log(userData);
        let { data } = await axios.post(`${API_LINK }/Login`, user);
        if (data.success === true) {
         // console.log(data);
          localStorage.setItem('token', data.token);
          saveUserData();
          if (userData.role === "user") {
            console.log('only admin can be login');
          } else{
            
             navigate('/')
          }
          
         
          // // login
        }
        else {
         
          console.log("Error");
        }
      }
     
      
        
        
      
      

      function submitLoginForm(e) {
        e.preventDefault();
        
  
       
           sendLoginToApi();
       
     }
      
  return (
    <>
    <div className="d-flex justify-content-center align-items-center pt-5">
    <div className="custom-container custom-mobile-style">
      
               <div className='text-center pt-5'>
               <h1 className='fw-semibold'>Login</h1>
               </div>
            
               
            <form onSubmit={submitLoginForm} className=" ">
               <label htmlFor="email" className="">
                  email:
               </label>
               <input onChange={getUserData} type="email" className="form-control my-input " name="email" id="email" placeholder='Email'></input>

               <label htmlFor="password" className="">
                  password:
               </label>
               <input onChange={getUserData} type="password" className="form-control my-input " name="password" id="password" placeholder='Password'></input>

              
              <div className="buttons py-3">
                 <button type="submit" className="text-uppercase bg-danger text-light w-100">
                     login
                 </button>
              </div>
             

  
           </form>
            </div>
            </div>
           
        
    </>
  )
}
