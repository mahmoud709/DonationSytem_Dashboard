import { useCallback, useState } from 'react';
import DataGrid, { Column, Grouping, GroupPanel, Paging, SearchPanel } from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';
import { API_LINK } from '../../utils/api';
import Header from '../Header/Header';
import { apiData } from '../../hooks/useRoute';
import { Link } from 'react-router-dom';
export const Orders = () => {
   const { orders } = apiData(`${API_LINK}`, 'order/donationorders')
   const [autoExpandAll, setAutoExpandAll] = useState(true);
   const [showRowLines] = useState(true);
   const [rowAlternationEnabled] = useState(true);

   function actionsTemplate(rowData) {
      return (
         // userinfo?._id
         <>
            <Link className="fa-solid mx-2 fa-1x fa-plus text-dark" to={`/coins/order/add/${rowData.data._id}`}></Link>
         </>
      );
   }


   const onAutoExpandAllChanged = useCallback(() => {
      setAutoExpandAll((previousAutoExpandAll) => !previousAutoExpandAll);
   }, []);


   return (
      <div className="col-md-9">
         <Header />
         <DataGrid dataSource={orders} keyExpr="_id" allowColumnReordering={true} width="100%" showBorders={true} showRowLines={showRowLines} rowAlternationEnabled={rowAlternationEnabled}>
            <GroupPanel visible={true} />
            <SearchPanel visible={true} />
            <Grouping autoExpandAll={autoExpandAll} />
            <Paging defaultPageSize={10} />
            <Column dataField="itemsName" dataType="string" />
            <Column dataField="ordercoins" dataType="string" />
            <Column dataField="location" dataType="string" />
            <Column dataField="quantity" dataType="number" />
            <Column dataField="phone" dataType="number" />
            <Column dataField="status" dataType="string" />
            <Column
               caption="Username"
               dataField="userinfo.username"
            />
            <Column
               caption="Order"
               dataField="userinfo._id"
            />
            <Column
               caption="charity"
               dataField="charity.title"
            />
            <Column caption='give coins' cellRender={actionsTemplate} />
         </DataGrid>

         <div className="options">
            <div className="caption">Options</div>
            <div className="option">
               <CheckBox text="Expand All Groups" id="autoExpand" value={autoExpandAll} onValueChanged={onAutoExpandAllChanged} />
            </div>
         </div>
      </div>
   );
};
