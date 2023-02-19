import React from 'react'
import Register from '../components/user/registerUser'
import { Button, Card, Form, Alert, Container} from 'react-bootstrap';
import '../components/user/login.css';

export default function signup() {
    
    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center" 
                style={{minHeight: '100vh'
                }}>
                <div className="w-100" style={{maxWidth: '400px'}}>
                    <Register />
                </div>
            </Container>
        </div>
    )
}
