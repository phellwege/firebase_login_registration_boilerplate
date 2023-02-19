import React, { useEffect, useState, useRef } from 'react';
import {useAuth} from '../../context/authContext';
import { Link, useNavigate  } from 'react-router-dom';
import { Button, Card, Form, Alert} from 'react-bootstrap';
require('firebase/auth');


export default function RegisterUser() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useNavigate();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match');
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history('/')
        } 
        catch {
            setError('Failed to create account')
        }
        setLoading(false)
    }
    // const [newUsername, setNewUsername] = useState('')
    // const [users, setUsers] = useState([])
    // const createUser = async (users) => {
    //     await addDoc(usersCollectionRef, {username: newUsername})
    // }
    // useEffect(() => {
    //     const getUsers = async () => {
    //     const data = await getDocs(usersCollectionRef)
    //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //     }
    //     getUsers();
    // }, []);

    return (
        <div className="RegisterWrap">
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    
                    {error && 
                    <Alert variant='danger'>
                        {error}
                    </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <br/>
                        <Button disabled={loading} className='w-100' type='Submit'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            Already have an Account?
            <br/>
            <Link to='/SignIn'>
                Login
            </Link>
            </div>
        </div>
    )
}
