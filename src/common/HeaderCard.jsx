import React from 'react';

export default function HeaderCard(props) {
   return (
      <div className="col-md-3 p-2">
         <div className="card shadow ">
            <div className="card-body">
               <p className="text-muted">{props.title}</p>
               <b className="num">{props.length}</b>
            </div>
         </div>
      </div>
   );
}
