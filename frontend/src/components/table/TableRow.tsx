import React from 'react';
import { DataType } from '../../serialize/types';
import { locationOptions } from '../../serialize/variables';

interface Props {
    data: DataType
}
const TableRow = ({data}: Props) => {

    const location = locationOptions.find(option => option.value === data.locationId)
    return (
        <tr>
            <td>{data.name}</td>
            {location && <td>{location.label}</td>}
            <td>{data.price}</td>
            <td>წაშლა</td>
        </tr>
    );
};

export default TableRow;