import React from 'react';
import { DataType } from '../../serialize/types';
import { locationOptions } from '../../serialize/variables';
import { api } from '../api';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import pathname from '../../serialize/pathnames';

interface Props {
    data: DataType,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
    lastInventory: boolean
}
const TableRow = ({data, setToggle, lastInventory}: Props) => {
    const navigate = useNavigate()
    function deleteInventory (id: number) {
        api.deleteInventory(id)
        .then(res => {
            if(lastInventory) {
                 navigate(pathname.HOME_PAGE)
                console.log("last")
            } else {
                setToggle((prevState: boolean)=> !prevState)
                console.log("hello")

            }
            
        })
    }

    const location = locationOptions.find(option => option.value === data.locationId)
    return (
        <tr>
            <td>{data.name}</td>
            {location && <td>{location.label}</td>}
            <td>{data.price}</td>
            <td className="cursor-pointer" >
                <Button className='py-1'  onClick={() => deleteInventory(data.id)}>წაშლა</Button>
            </td>
        </tr>
    );
};

export default TableRow;