import React,{useRef,useState} from 'react'
import {Button,Form,Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalContext } from './context';
import {Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login,currentUser} = useGlobalContext();
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
            setError('')
            await login(emailRef.current.value,passwordRef.current.value)
            setLoading(true)
            navigate('/');
        } catch (error) {
            setError('login not completed')
        }
        setLoading(false)
    }
  return (
    <div className='w-100 d-flex align-items-center justify-content-center mt-5 ' style={{'flex-direction':"column"}}>
        
        <Form className='w-60 p-1 ' style={{border:'1px solid black'}} onSubmit={handleSubmit}>
        {error&&<Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>login</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>
        
        <Button variant="primary" type="submit" disabled={loading}>
        Login
        </Button>
        </Form> 
        <div className='w-100 text-center mt-3'><Link to="/password">forgot password? </Link></div>
        <div className="w-100 text-center">Need account?<Link to="/signin">Sign In</Link></div>
    </div>
  )
}

export default Login
