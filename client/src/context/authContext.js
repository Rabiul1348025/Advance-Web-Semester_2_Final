import { createContext, useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null))

    const signin = async(inputs) => {
        const res = await axios.post('/auth/signin', inputs)
        setCurrentUser(data)
     }
     
     const signout = async(inputs) => {
         const res = await axios.post('/auth/signout', inputs)
         setCurrentUser(null)
      }
     
      useEffect((()=>{
         //
         localStorage.setItem('user', JSON.stringify(currentUser))
      },[currentUser]))
     
      return (
        <AuthContext.Provider value={{ currentUser, signin, signout }}>
            {children}
        </AuthContext.Provider>
      )
}

