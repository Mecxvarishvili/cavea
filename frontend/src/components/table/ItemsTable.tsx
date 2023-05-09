import React from 'react';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import { DataType } from '../../serialize/types';

interface Props {
    data: DataType[]
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}
const ItemsTable = ({data, setToggle}: Props) => {
    console.log("table")
    return (
        <Table>
            <thead>
                <tr>
                    <th>სახელი</th>
                    <th>მდებარეობა</th>
                    <th>ფასი (ლარი)</th>
                    <th>ოპერაცია</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d: DataType) => (
                    <TableRow setToggle={setToggle} lastInventory={data.length <= 1} key={d.id} data={d} />
                ))}
            </tbody>

        </Table>
    );
};

export default ItemsTable;