export const allCarsQuery = () =>{
    const query = `*[_type == "car" ] | order(_createAt desc){
        carId,
        name,
        image,
        cost,
        brand,
        transmision,
        seat,
        location,
        category,
        currency,
        urlImage,
        speed,
        width,
        height
    }` 
    return query;
}
export const carDetailQuery = () =>{
    const query = `*[_type == "car" ] | order(_createAt desc){
        carId,
        name,
        image,
        cost,
        brand,
        transmision,
        seat,
        location,
        category,
        currency,
        urlImage,
        speed,
        width,
        height
    }` 
    return query;
}