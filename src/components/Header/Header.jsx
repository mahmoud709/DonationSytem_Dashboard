import './Header.css';
import HeaderCard from '../../common/HeaderCard';
export default function Header() {
   return (
      <div className="header col mb-5" style={{ height: 300 }}>
         <div className="row justify-content-center align-items-center" style={{ height: 'inherit' }}>
            <HeaderCard title="organizations" length="3" />
            <HeaderCard title="brands" length="4" />
            <HeaderCard title="users" length="520" />
         </div>
      </div>
   );
}
