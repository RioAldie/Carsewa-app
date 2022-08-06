import axios from "axios";
import jwtDecode from "jwt-decode"
import { stringify } from "querystring";

export const createAndGetUser = async (response: any, addUser: any) => {
    const decode: { name: string, picture: string, sub: string, email: string} = jwtDecode(response.credential);
    const { name, picture, sub, email} = decode;

    const user ={
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture
    }

    addUser(user);
    await axios.post('http://localhost:3000/api/auth',user);
}

