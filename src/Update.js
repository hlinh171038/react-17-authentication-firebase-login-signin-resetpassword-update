import React,{useRef,useState} from 'react'
import {Button,Form,Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalContext } from './context';
import {Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Update() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordCofirmRef=useRef()
    const {updateEmail,updatePassword,currentUser} = useGlobalContext();
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        setLoading(true);
        setError('')
        if(passwordRef.current.value !== passwordCofirmRef.current.value){
            return setError("password not matching")
        }
        const promise =[]
        if(emailRef.current.value !==currentUser.email){
            promise.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value !==currentUser.password){
            promise.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promise).then(()=>{
            navigate('/')
        }).catch(()=>{
            setError('fail to update account')
        }).finally(()=>{
            setLoading(false)
        })
    }
  return (
    <div className='w-100 d-flex align-items-center justify-content-center mt-5 ' style={{'flex-direction':"column"}}>
        
        <Form className='w-60 p-1 ' style={{border:'1px solid black'}} onSubmit={handleSubmit}>
        {error&&<Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>update</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={emailRef} defaultValue={currentUser.email}/>
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
            <Form.Control type="password" placeholder="Password" ref={passwordCofirmRef} />
        </Form.Group>
        
        <Button variant="primary" type="submit" disabled={loading}>
        update
        </Button>
        </Form> 
        <div className="w-100 text-center"><Link to="/">Cancel</Link></div>
    </div>
  )
}

export default Update
