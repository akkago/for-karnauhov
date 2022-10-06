import type { ColumnsType } from 'antd/es/table';
import DataType from './TrackTable.model';
import { Space, Table, Tag } from 'antd';

const trackTableColumns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
    {
        title: 'Начало',
        key: 'start',
        render: (_, record) => (
          <Space size="middle">
            <a> {record.start}</a>
           
          </Space>
        ),
      },
      {
        title: 'Конец',
        key: 'end',
        render: (_, record) => (
          <Space size="middle">
            <a> {record.end}</a>
           
          </Space>
        ),
      },
      {
        title: 'Редактировать',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Edit</a>
            {/* <a>Delete</a> */}
          </Space>
        ),
      },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  export default trackTableColumns;