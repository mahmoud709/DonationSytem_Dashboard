import React, { useCallback, useState } from 'react';
import DataGrid, { Column, Grouping, GroupPanel, Paging, SearchPanel } from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';
import { apiData } from '../../hooks/useRoute';
import { API_LINK } from '../../utils/api';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export const Organization = () => {
   const { allOrganizaions } = apiData(`${API_LINK}`, 'organizations');
   const [autoExpandAll, setAutoExpandAll] = useState(true);
   const [showRowLines] = useState(true);
   const [rowAlternationEnabled] = useState(true);
   const onAutoExpandAllChanged = useCallback(() => {
      setAutoExpandAll((previousAutoExpandAll) => !previousAutoExpandAll);
   }, []);
   function actionsTemplate(rowData) {
      return (
         <>
            <Link className="fa-solid mx-2 fa-2x fa-circle-info text-dark" to={`${rowData.data._id}`}></Link>
            <Link className="fa-solid mx-2 fa-2x text-danger fa-trash"></Link>
            <Link className="fa-solid mx-2 fa-2x fa-pen-to-square"></Link>
         </>
      );
   }
   return (
      <div className="col-md-9">
         <Header />
         <DataGrid dataSource={allOrganizaions} keyExpr="_id" allowColumnReordering={true} width="100%" showBorders={true} showRowLines={showRowLines} rowAlternationEnabled={rowAlternationEnabled}>
            <GroupPanel visible={true} />
            <SearchPanel visible={true} />
            <Grouping autoExpandAll={autoExpandAll} />
            <Paging defaultPageSize={5} />

            <Column dataField="_id" dataType="string" />
            <Column dataField="title" dataType="string" />
            <Column caption="Actions" cellRender={actionsTemplate} />
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
