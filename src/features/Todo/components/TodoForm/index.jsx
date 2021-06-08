import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-controls/InputField';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('Please enter field'),
    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    }

    return (
        <Form className="mt-3" onSubmit={form.handleSubmit(handleSubmit)}>
            <Form.Row className="justify-content-center">
                <Col lg="9">
                    <InputField name="title" label="Todo" form={form} />
                </Col>
                <Col lg="2">
                    <Button variant="light" type="submit">
                        <FontAwesomeIcon icon={faPlusCircle} size="3x" color="green" />
                    </Button>
                </Col>
            </Form.Row>
        </Form>
        // <form >
        //     <InputField name="title" label="Todo" form={form} />
        //     <button onClick={form.handleSubmit(handleSubmit)}></button>
        // </form>
    );
}

export default TodoForm;