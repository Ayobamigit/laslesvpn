import axios from "axios";

let token= null
// if (typeof window !== "undefined") {
    if(localStorage.getItem('userDetails'))
    {
        console.log(JSON.parse(localStorage.getItem('userDetails')))
        const {authToken}= JSON.parse(localStorage.getItem('userDetails'));
        token = authToken;
    }
// }
const instance = axios;

if (token){
    instance.defaults.headers.common['Authorization'] = `${token}`
}
instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;