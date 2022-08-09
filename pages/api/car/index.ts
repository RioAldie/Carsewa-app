import axios from "axios";
import { Car } from '../../../type';

export async function getCarDetails(id:any) {
    const { data } = await axios.get(
        'http://localhost:3000/api/post'
    );
    let Car:any;
    data.forEach((car: Car)=> {
        if(car.carId === id){
            return Car = car;
        }
    });
    return Car;
}
