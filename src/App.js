import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import OrganizationInfo from './components/organizations/singleOrganization';
import { Organization } from './components/organizations/organizations';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import PrivateRoute from './components/PrivteRoute/PrivteRoute';
// import Header from './components/Header/Header';

function App() {

   useEffect(()=>{
      if(localStorage.getItem('token')!==null){
        saveUserData();
      }
      }, [])
      
      
        const [userData , setuserData] = useState(null);
      function saveUserData(){
        let encodedToken = localStorage.getItem("token");
        let decodedToken = jwtDecode(encodedToken);
        setuserData(decodedToken);
      //   console.log(decodedToken);
      //   console.log(userData);
      
      }

   return (
      <div className="App">
         <Routes userData={userData} setuserData={setuserData}>
         <Route path="login" element={<Login userData={userData} saveUserData={saveUserData}/>} />
            <Route path="/" element={<PrivateRoute userData={userData} setuserData={setuserData} ><SideBar userData={userData}  setuserData={setuserData}/></PrivateRoute>}>
               <Route path="organizations" element={<Organization />} />
               <Route path="organizations/:id" element={<OrganizationInfo />} />
            </Route>
         </Routes>
         
      </div>
   );
}

export default App;
