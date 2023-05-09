import React from 'react';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import { DataType } from '../../serialize/types';

interface Props {
    data: DataType[]
}
const ItemsTable = ({data}: Props) => {
    const items = Array.from(Array(20).keys())
    return (
        <Table className="" >
            <thead>
                <tr>
                    <th>სახელი</th>
                    <th>მდებარეობა</th>
                    <th>ფასი (ლარი)</th>
                    <th>ოპერაცია</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data: DataType) => (
                    <TableRow key={data.id} data={data} />
                ))}
            </tbody>

        </Table>
    );
};

export default ItemsTable;