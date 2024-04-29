import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import OrganizationInfo from './components/organizations/singleOrganization';
import { Organization } from './components/organizations/organizations';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="*" element={<SideBar />}>
               {/* <Route path="home" element={<Header />} /> */}
               <Route path="organizations" element={<Organization />} />
               <Route path="organizations/:id" element={<OrganizationInfo />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
