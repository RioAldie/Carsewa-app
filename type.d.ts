export interface Car{
    carId: string,
    brand: string,
    cost: number,
    image:{
        asset:{
            _ref:string,
            _type: string
        },
        _type: string
    },
    name: string,
    transmision: string,
    seat: number,
    currency: string,
    category: string,
    location: string,
    urlImage: string,
    speed: string,
    width: number,
    height: number
}
export interface userdata{
    username: string,
    city: string,
    email: string,
    password: string,
    uid: string
}