import React from 'react';
import { Form } from 'react-bootstrap';
import { FormItemType } from '../serialize/types';

interface Props extends FormItemType {
    formik: any
}
const FormItem = ({type, id, label, options, formik}: Props )=> {
    return (
        <Form.Group className="my-4" >
            <Form.Label htmlFor={id} >{label}</Form.Label>
            {type === "select" ?
            <Form.Select id={id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[id]} 
            >
                <option defaultChecked hidden>ადგილმდებარეობა</option>
                {options?.map(option => (
                    <option key={option.value} value={option.value} >{option.label}</option>
                ))}

            </Form.Select>
            : <Form.Control
                type={type}
                id={id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[id]}
            />
            }
            {formik.touched[id] && formik.errors[id] && <Form.Text className="text-danger" >{formik.errors[id]}</Form.Text>}
        </Form.Group>
    );
};

export default FormItem;