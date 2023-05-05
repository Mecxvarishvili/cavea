import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormItem from '../components/FormItem';
import { useFormik } from 'formik';
import { number, object, string } from 'yup';

const AddPage = () => {
    const formik = useFormik({
        initialValues: {
            location: "",
            name: "",
            price: "",
        },
        validationSchema: object({
            location: string()
                .required("ადგილმდებარეობის მითითება სავალდებულოა"),
            name: string()
                .required("სახელის მითითება სვალდებულოა"),
            price: number()
                .required("ფასის მითითება ")
        }),
        onSubmit: value => {
            console.log("s")
        }
    })
    return (
        <div className="item-add-page my-5">
            <div className="form-container mx-auto">
                <Form onSubmit={formik.handleSubmit} >
                    <FormItem formik={formik} id="location" label="ადგილმდებარეაობა:" >
                        <Form.Select id="location" name="location"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.location} 
                        >
                            <option defaultChecked hidden>ადგილმდებარეობა</option>
                            <option>მთავარი ოფისი</option>
                            <option>კავეა გალერია</option>
                            <option>კავეა თბილისი მოლი</option>
                            <option>კავეა ისთ ფოინთი</option>
                            <option>კავეა სითი მოლი</option>
                        </Form.Select>
                    </FormItem>
                    <FormItem formik={formik} id="name" label="სახელი:" >
                        <Form.Control id="name" name="name" type="text" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}/>
                    </FormItem>
                    <FormItem formik={formik} id="price" label="ფასი:">
                        <Form.Control id="price" name="price" type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    </FormItem>
                    <Button type="submit">დამატება</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddPage;