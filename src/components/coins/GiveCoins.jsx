import axios from 'axios';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_LINK } from '../../utils/api';

export default function GiveCoins() {
   const navigate = useNavigate();
   const { id } = useParams();
   const [amount, setCoinsValue] = useState({
      amount: "",
   })
   function takeCoinsValue(e) {
      const { name, value } = e.target;
      setCoinsValue(prev => ({ ...prev, [name]: +value }))
   }
   async function addCoins() {
      const { data } = await axios.post(`${API_LINK}/coins/order/add/${id}`, amount);
      if (data.success) {
         alert(data.message);
         navigate("/orders")
      }
   }
   function handleSubmit(e) {
      addCoins()
      e.preventDefault();
   }
   return (
      <div className='col-md-9' onSubmit={handleSubmit}>
         <h2 className='text-body mb-5'>Give user coins </h2>
         <form action="" className="my-3">
            <label className='form-label fs-5 text-capitalize fw-bold'>user id</label>
            <input type='text' value={id} readOnly placeholder='order id' className='form-control w-50 mb-3' />
            <label className='form-label fs-5 text-capitalize fw-bold'>coins value</label>
            <input onChange={takeCoinsValue} type='text' name='amount' placeholder='value' className='form-control w-50 mb-3' />
            <button type='submit' className='btn btn-outline-primary fs-5 text-capitalize'>give coins</button>
         </form>
      </div>
   )
}
