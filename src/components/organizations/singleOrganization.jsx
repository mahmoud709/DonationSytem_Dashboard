import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiSingleItem } from '../../hooks/useRoute';
import { API_LINK } from '../../utils/api';

export default function OrganizationInfo() {
   const [selectedImg, setSelectedImg] = useState(null);
   const { id } = useParams();
   const { data } = apiSingleItem(`${API_LINK}`, 'organizations', id);

   const handleImgChange = (url) => {
      setSelectedImg(url);
   };

   return (
      <div className="col-md-9">
         {data ? (
            <>
               <div className="row">
                  <div className="col-md-5 mt-3">
                     <img src={selectedImg || data.images[1].url} className="w-100" alt="cover" />
                     <div className="row mt-3">
                        {data.images.length > 0
                           ? data.images.slice(2).map((el, index) => (
                              <div className="col-6" key={index}>
                                 <img src={el.url} className="w-100 h-100" alt="small-img" loading="lazy" onClick={() => handleImgChange(el.url)} />
                              </div>
                           ))
                           : null}
                     </div>
                  </div>
                  <div className="col-md-6 offset-md-1">
                     <div className="info px-2">
                        <p className="lead mt-0">{data.title} information</p>
                        <h5>{data.organizationInfo}</h5>
                     </div>
                  </div>
               </div>
            </>
         ) : (
            <div className="d-flex h-100vh justify-content-center align-content-center">
               <i className="fa-solid fa-spinner spin"></i>
            </div>
         )}
      </div>
   );
}
