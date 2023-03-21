import React,{useState} from 'react'
import { useGlobalContext } from './context'
import {Link,useNavigate} from 'react-router-dom'
function Home() {
    const {logout,currentUser} = useGlobalContext()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogout = async (e)=>{
        setError('')
        try {
            await logout();
            setLoading(true)
            navigate('/login')
        } catch (error) {
            setError('log out failes')
        }
        setLoading(false)
    }
  return (
    <div className='w-100 d-flex align-items-center justify-content-center mt-5 ' style={{'flex-direction':"column"}}>
        {error&&<p>{error}</p>}
        <p className=''>{currentUser.email}</p>
        <button onClick={handleLogout}><Link to="/login">log out</Link></button>
        <p><Link to='/update'>update</Link></p>
    </div>
  )
}

export default Home
