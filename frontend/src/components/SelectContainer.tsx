import React from 'react';
import { Form } from 'react-bootstrap';
import { SelectOptionsType } from '../serialize/types';

interface Props {
    id: string,
    label: string
    options: SelectOptionsType[],
    def: string
}
const SelectContainer = ({id, options, label, def}: Props) => {
    return (
        <Form.Group>
            <Form.Label htmlFor={id} >{label}</Form.Label>
            <Form.Select id={id} onChange={(e) => console.log(e.target.value)}  >
                <option>{def}</option>
                {options.map(option => (
                    <option value={option.value} key={option.value} >{option.label}</option>
                ))}
            </Form.Select>
        </Form.Group>
    );
};

export default SelectContainer;