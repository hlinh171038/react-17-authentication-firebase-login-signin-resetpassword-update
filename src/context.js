import React,{useContext,useState,useEffect} from 'react'
import { auth } from './firebase'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const[currentUser,setCurrentUser] = useState('')
    const [isloading,setIsloading] = useState(true)
    const signup=(email, password)=> {
        return auth.createUserWithEmailAndPassword(email, password)
      }
    
      function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    const logout = ()=>{
        return auth.signOut()
    }
    const resetPassword = (email)=>{
        return auth.sendPasswordResetEmail(email)
    }
    const updateEmail = (email) =>{
      return currentUser.updateEmail(email)
    }
    const updatePassword = (password) =>{
      return currentUser.updatePassword(password)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setIsloading(false)
        })

        return unsubscribe
      }, [])
   return  <AppContext.Provider 
        value={{currentUser,
                signup,
                login,
                logout,
                resetPassword,
                updateEmail,
                updatePassword}}
    >{!isloading&&children}</AppContext.Provider>
}
const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext};