import React,{useRef,useState} from 'react'
import {Button,Form,Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalContext } from './context';
import {Link,useNavigate} from 'react-router-dom'
function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef= useRef()
    const {signup,currentUser} = useGlobalContext();
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit =async(e)=>{
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
           return setError('password not matching')
        }
        try {
            setError('')
            setLoading(true)
           await signup(emailRef.current.value,passwordRef.current.value);
           navigate('/') 
        } catch (error) {
            setError('wrong email or password')
        }
        setLoading(false)
    }
  return (
    <div className='w-100 d-flex align-items-center justify-content-center mt-5 ' style={{'flex-direction':"column"}}>
        
        <Form className='w-60 p-1 ' style={{border:'1px solid black'}} onSubmit={handleSubmit}>
        {error&&<Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>sign in</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control type="password" placeholder="PasswordCofirm" ref={passwordConfirmRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
            Submit
        </Button>
        </Form> 
        <div className="w-100 text-center">Need account?<Link to="/login">Login</Link></div>
    </div>
  )
}

export default SignIn
