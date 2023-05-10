import React from 'react';
import { Form } from 'react-bootstrap';
import { SelectOptionsType } from '../serialize/types';
import { useSearchParams } from 'react-router-dom';

interface Props {
    id: string,
    label: string
    options: SelectOptionsType[],
    def: string,
    className?: string
}
const SelectContainer = ({id, options, label, def, className}: Props) => {

    const [ searchParams, setSearchParams ] = useSearchParams()
    let defaultValue: string | null = searchParams.get(id)

    function setParameter (e: string) {
        if(id === "locationId") {
            searchParams.delete("page")
            setSearchParams(searchParams)
        }
        if(e) {
            searchParams.set(id, e)
            setSearchParams(searchParams)
        } else {
            searchParams.delete(id)
            setSearchParams(searchParams)
        }
    }
    return (
        <Form.Group className={className}>
            <Form.Label className="fw-bold" htmlFor={id} >{label}</Form.Label>
            <Form.Select id={id} onChange={(e) => setParameter((e.target.value))} defaultValue={defaultValue as string} >
                <option value="">{def}</option>
                {options.map(option => (
                    <option value={option.value} key={option.value} >{option.label}</option>
                ))}
            </Form.Select>
        </Form.Group>
    );
};

export default SelectContainer;