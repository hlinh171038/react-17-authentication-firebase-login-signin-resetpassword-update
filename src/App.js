import logo from './logo.svg';
import './App.css';
import SignIn from './signIn';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import ResetPassword from './ResetPassword'
import Update from './Update'
import { useGlobalContext } from './context';

function App() {
  const {currentUser} = useGlobalContext()
  return (
    <Routes>
      {currentUser ? <Route path='/' element={<Home/>}/>:<Route path='/' element={<Navigate replace to='/login'/>}/>}
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/password' element={<ResetPassword/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
    
  );
}

export default App;
