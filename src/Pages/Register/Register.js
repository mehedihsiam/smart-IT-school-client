import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Header />
            <Container className='d-flex justify-content-center'>
                <Col md={5} className='my-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control {...register("name")} size="md" type="text" placeholder="Full Name" />
                        <br />
                        <Form.Control {...register("email")} size="md" type="email" placeholder="Email" />
                        <br />
                        <Form.Control {...register("password")} size="md" type="password" placeholder="Password" />
                        <button type='submit'>Register</button>
                    </form>

                </Col>
            </Container>
            <Footer />
        </div>
    );
};

export default Register;