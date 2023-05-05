import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

type Props = {
    children: ReactElement,
    id: string,
    label: string,
}
const FormItem = ({children, id, label}: Props )=> {
    return (
        <Form.Group className="my-4" >
            <Form.Label for={id} >{label}</Form.Label>
            {children}
        </Form.Group>
    );
};

export default FormItem;