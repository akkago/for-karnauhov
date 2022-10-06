import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import trackTableColumns from './TrackTable.columns';
import DataType from './TrackTable.model';

export default function TrackTable() {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            // age: 32,
            // address: 'New York No. 1 Lake Park',
            start: [51.0, 19.0],
            end: [61.0, 19.0],
            track: [
                [
                    [51.5, -0.1],
                    [51.5, -0.12],
                    [51.52, -0.12],
                ],
                [
                    [51.5, -0.05],
                    [51.5, -0.06],
                    [51.52, -0.06],
                ],
            ]
        },
        {
            key: '2',
            name: 'Jim Green',
            // age: 42,
            // address: 'London No. 1 Lake Park',
            start: [51.0, 19.0],
            end: [71.0, 19.0],
            track: [
                [
                    [51.5, -0.1],
                    [51.5, -0.12],
                    [51.52, -0.12],
                ],
                [
                    [51.5, -0.05],
                    [51.5, -0.06],
                    [51.52, -0.06],
                ],
            ]
        },
        {
            key: '3',
            name: 'Joe Black',
            // age: 32,
            // address: 'Sidney No. 1 Lake Park',
            start: [51.0, 19.0],
            end: [51.0, 19.0],
            track: [
                [
                    [51.5, -0.1],
                    [51.5, -0.12],
                    [51.52, -0.12],
                ],
                [
                    [51.5, -0.05],
                    [51.5, -0.06],
                    [51.52, -0.06],
                ],
            ]
        },
    ];

    return (
        <Table
            pagination={false}
            columns={trackTableColumns}
            dataSource={data}
            rowSelection={rowSelection}
        />
    )
}