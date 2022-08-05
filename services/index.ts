import jwtDecode from "jwt-decode"

export const createAndGetUser = async (response: any) => {
    const decode: { name: string, picture: string, sub: string, email: string} = jwtDecode(response.credential);
    const { name, picture, sub, email} = decode;
    console.log(decode)
}

