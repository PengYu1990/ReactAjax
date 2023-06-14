import axios from "axios";
import { getSessionUser } from "./session-service";


const createClient = () =>{
    const user = getSessionUser();
    let token = null;
    if(user != null){
        token = user.token;
    }
    
    return axios.create({
        // baseURL:"http://localhost:8080",
        baseURL:"https://itireland.herokuapp.com",

        headers:{
            Authorization:token
        }
    })
}

export default createClient;

