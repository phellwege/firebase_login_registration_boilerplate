import React from 'react'
import Login from '../components/user/login'
import { Button, Card, Form, Alert, Container} from 'react-bootstrap';

export default function signin() {
    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center"
                style={{minHeight: '100vh',
                zIndex: '1'
                }}>
                <div className="w-100" style={{maxWidth: '400px'}}>
                    <Login />
                </div>
            </Container>
        </div>
    )
}
