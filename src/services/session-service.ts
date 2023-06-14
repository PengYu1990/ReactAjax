import { User } from "./user-service";


export const setSessionUser = (user : User) =>{
    if(user != null){
        sessionStorage.setItem("user",JSON.stringify(user));
    }
    
}

export const getSessionUser = () =>{
    const u = sessionStorage.getItem("user");
    if(u != null){
        const user: User = JSON.parse(u);
        return user;
    }
   return null;
}

export const removeSessionUser = () =>{
    sessionStorage.removeItem("user");
}