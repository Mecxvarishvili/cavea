import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

type Props = {
    children: ReactElement,
    id: string,
    label: string,
    formik: any
}
const FormItem = ({children, id, label, formik}: Props )=> {
    return (
        <Form.Group className="my-4" >
            <Form.Label htmlFor={id} >{label}</Form.Label>
            {children}
            {formik.touched[id] && formik.errors[id] && <Form.Text>{formik.errors[id]}</Form.Text>}
        </Form.Group>
    );
};

export default FormItem;