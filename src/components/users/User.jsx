import React, { useCallback, useState } from 'react';
import DataGrid, { Column, Grouping, GroupPanel, Paging, SearchPanel } from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';
import { API_LINK } from '../../utils/api';
import Header from '../Header/Header';
import { apiData } from '../../hooks/useRoute';

export const Users = () => {
   const { data } = apiData(`${API_LINK}`, 'users')
   const [autoExpandAll, setAutoExpandAll] = useState(true);
   const [showRowLines] = useState(true);
   const [rowAlternationEnabled] = useState(true);

   function showQr(rowData) {
      return (
         <img src={rowData.data.qrcode} alt='qrcode' style={{ width: '40px', height: '40px' }} />
      );
   }

   const onAutoExpandAllChanged = useCallback(() => {
      setAutoExpandAll((previousAutoExpandAll) => !previousAutoExpandAll);
   }, []);

   return (
      <div className="col-md-9">
         <Header />
         <DataGrid
            dataSource={data}
            keyExpr="_id"
            allowColumnReordering={true}
            width="100%"
            showBorders={true}
            showRowLines={showRowLines}
            rowAlternationEnabled={rowAlternationEnabled}
         >
            <GroupPanel visible={true} />
            <SearchPanel visible={true} />
            <Grouping autoExpandAll={autoExpandAll} />
            <Paging defaultPageSize={5} />
            <Column dataField="_id" dataType="string" width={200} />
            <Column dataField="username" dataType="string" />
            <Column dataField="email" dataType="string" />
            <Column dataField="phone" dataType="number" />
            <Column dataField="coins" dataType="number" />
            <Column caption='qrcode' cellRender={showQr} />
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
