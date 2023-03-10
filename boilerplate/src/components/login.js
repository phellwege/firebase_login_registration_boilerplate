import React, { useState, useRef } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { Button, Card, Form, Alert} from 'react-bootstrap';
import {useAuth} from '../../context/authContext';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useNavigate ();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
        login(emailRef.current.value, passwordRef.current.value)
    }
    
    return (
        <div className="LoginWrap">
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Log In</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' ref={passwordRef} required/>
                            </Form.Group>
                            <br/>
                            <Button disabled={loading} className='w-100' type='Submit'>
                                Login
                            </Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to='/forgotPassword'>Forgot Password?</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Need an Account?
                    <br/>
                    <Link to='/SignUp'>
                        Sign Up
                    </Link>
                </div>
        </div>
    )
}
