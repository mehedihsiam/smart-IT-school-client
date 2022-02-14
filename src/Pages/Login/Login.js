import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { test } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data, test);
    };
    return (
        <div>
            <Header />
            <Container className='d-flex justify-content-center'>
                <Col md={5} className='my-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control {...register("email")} size="md" type="email" placeholder="Email" />
                        <br />
                        <Form.Control {...register("password")} size="md" type="password" placeholder="Password" />
                        <button type='submit'>Login</button>
                    </form>

                </Col>
            </Container>
            <Link to='/register'> Register</Link>
            <Footer />
        </div>
    );
};

export default Login;