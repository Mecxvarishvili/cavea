import React from 'react';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

const ItemsTable = () => {
    const items = Array.from(Array(20).keys())
    return (
        <Table className="" >
            <thead>
                <tr>
                    <th>სახელი</th>
                    <th>მდებარეობა</th>
                    <th>ფასი</th>
                    <th>ოპერაცია</th>
                </tr>
            </thead>
            <tbody>
                {items.map((i) => (
                    <TableRow key={i} />
                ))}
            </tbody>

        </Table>
    );
};

export default ItemsTable;