import {createContext,useState,useEffect,useContext} from 'react';
const GlobalContext =createContext();
import { getCurrentUser } from '../lib/appwrite';


export const useGlobalContext=()=>useContext(GlobalContext)



  const GlobalProvider=({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [user,setUser]=useState(null);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getCurrentUser().then((res)=>{
            if(res){
                setIsLoggedIn(true);
                setUser(res);
                console.log(res);
            }else{
                setIsLoggedIn(false);
                setUser(null);

            }
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setIsLoading(false)

        })
        
    
      
    }, [])
    
    return(
        <GlobalContext.Provider
        value={{
            isLoggedIn,
            isLoading,
            user,
            setUser,
            setIsLoggedIn

        }}
        
        >
            

            {children}


        </GlobalContext.Provider>
    )
}
export default GlobalProvider;