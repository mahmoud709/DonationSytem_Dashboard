import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header/Header';
import OrganizationInfo from './components/organizations/singleOrganization.jsx';
import { Organization } from './components/organizations/organizations.jsx';
import Login from './components/Login/Login.jsx';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import PrivateRoute from './components/PrivteRoute/PrivteRoute.jsx';
import Brands from './components/brands/brands.jsx';
import BrandInfo from './components/brands/singleBrand.jsx';
import { Orders } from './components/donationOrders/Orders.jsx';
import GiveCoins from './components/coins/GiveCoins.jsx';
import { Users } from './components/users/User.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import AddBrand from './components/brands/AddBrand.jsx';

function App() {

   useEffect(() => {
      if (localStorage.getItem('token') !== null) {
         saveUserData();
      }
   }, [])
   const [userData, setuserData] = useState(null);
   function saveUserData() {
      let encodedToken = localStorage.getItem("token");
      let decodedToken = jwtDecode(encodedToken);
      setuserData(decodedToken);

   }

   return (
      <div className="App">
         <Routes userData={userData} setuserData={setuserData}>
            <Route path="login" element={<Login userData={userData} saveUserData={saveUserData} />} />
            <Route path="/" element={<PrivateRoute><SideBar userData={userData} setuserData={setuserData} /></PrivateRoute>}>
               <Route path="organizations" element={<Organization />} />
               <Route path="organizations/:id" element={<OrganizationInfo />} />
               <Route path="brands" element={<Brands />} />
               <Route path="brands/:id" element={<BrandInfo />} />
               <Route path="brands/add" element={<AddBrand />} />
               <Route path="orders" element={<Orders />} />
               <Route path='/coins/order/add/:id' element={<GiveCoins />} />
               <Route path='users' element={<Users />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
