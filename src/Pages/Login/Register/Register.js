import React from 'react';
import logo from '../../../images/logo2.png';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container'>
            <div className="w-50 mx-auto my-5 form-container">
                <img className='mx-auto d-block mb-5' width={200} src={logo} alt="" />
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Button className='w-100 mb-3' variant="danger" type="submit">
                        Register
                    </Button>
                    <Link to='/login' className='text-decoration-none text-danger text-center d-block fw-bold'>Already have an account?</Link>
                </Form>
            </div>
        </div>
    );
};

export default Register;