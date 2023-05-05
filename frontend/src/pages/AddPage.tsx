import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormItem from '../components/FormItem';

const AddPage = () => {
    return (
        <div className="item-add-page my-5">
            <Form className="form-container mx-auto" >
                <FormItem id="location" label="ადგილმდებარეაობა:" >
                    <Form.Select id="location" >
                        <option selected hidden>ადგილმდებარეობა</option>
                        <option>მთავარი ოფისი</option>
                        <option>კავეა გალერია</option>
                        <option>კავეა თბილისი მოლი</option>
                        <option>კავეა ისთ ფოინთი</option>
                        <option>კავეა სითი მოლი</option>
                    </Form.Select>
                </FormItem>
                <FormItem id="name" label="სახელი:" >
                    <Form.Control type="text" />
                </FormItem>
                <FormItem id="price" label="ფასი:">
                    <Form.Control id="price" type="number"/>
                </FormItem>
                <Button>დამატება</Button>
            </Form>
        </div>
    );
};

export default AddPage;