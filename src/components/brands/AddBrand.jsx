import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_LINK } from '../../utils/api';

export default function AddBrand() {
   const navigate = useNavigate();
   const [image, setSelectedFile] = useState(null);
   const [brandData, setBrandData] = useState({
      title: "",
      info: "",
      image: null,
   });

   function takeData(e) {
      const { name, value } = e.target;
      setBrandData(prev => ({ ...prev, [name]: value }));
   }

   function takeFile(e) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setBrandData(prev => ({ ...prev, image: file }));
   }
   const config = {
      headers: {
         'Content-Type': 'multipart/form-data',
      },
   };


   async function createBrand() {
      try {
         const { data } = await axios.post(`${API_LINK}/brands/create`, brandData, config);
         if (data.success) {
            navigate('/brands');
         }
      } catch (error) {
         console.error(error);
      }
   }
   function handleSubmit(e) {
      e.preventDefault();
      createBrand();
   }
   return (
      <div className='col-md-9'>
         <form onSubmit={handleSubmit}>
            <h3 className='mb-5 pt-2'>Add New Brand</h3>
            <div className="mb-3">
               <label htmlFor="" className='form-label text-capitalize'>brand name</label>
               <input type='text' onChange={takeData} name='title' className='form-control w-50' placeholder='brand name' />
            </div>
            <div className="mb-3">
               <label htmlFor="" className='form-label text-capitalize'>brand description</label>
               <textarea type='text' onChange={takeData} name='info' className='form-control w-50' placeholder='brand description' />
            </div>
            <div className="mb-3">
               <label htmlFor="" className='form-label text-capitalize'>brand logo</label>
               <input type='file' onChange={takeFile} name='image' className='form-control w-50' placeholder='brand description' />
            </div>
            <button type='submit' className='btn btn-primary text-capitalize'>add brand</button>
         </form>
      </div>
   )
}
