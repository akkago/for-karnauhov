import React, { useState } from 'react';
import './App.css';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import { Polyline } from 'react-leaflet';
import TrackTable from './components/TrackTable/TrackTable';
import TrackMap from './components/TrackMap/TrackMap';

function App() {
  // const position = [51.505, -0.09];

  




  return (
    <div className='App'>
      {/* <Table
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
      /> */}
      <TrackTable />
      <TrackMap/>
      
    </div>
  );
}

export default App;
