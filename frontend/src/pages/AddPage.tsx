import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormItem from '../components/FormItem';
import { useFormik } from 'formik';
import { number, object, string } from 'yup';
import { FormType } from '../serialize/types';

const AddPage = () => {
    const form: FormType = [
        {
            type: "select",
            id: "location",
            label: "ადგილმდებარეობა:",
            options: [
                "მთავარი ოფისი",
                "კავეა გალერია",
                "კავეა თბილისი მოლი",
                "კავეა ისთ ფოინთი",
                "კავეა სითი მოლი",
            ]
        },
        {
            type: "text",
            id: "name",
            label: "სახელი:",
        },
        {
            type: "number",
            id: "price",
            label: "ფასი:"
        }
    ]
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
            console.log("submited")
        }
    })
    return (
        <div className="item-add-page my-5">
            <div className="form-container mx-auto">
                <Form onSubmit={formik.handleSubmit} >
                    {form.map(item => (
                        <FormItem key={item.id} {...item} formik={formik} />
                    ))}
                    <Button type="submit">დამატება</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddPage;