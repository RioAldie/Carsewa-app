export const allCarsQuery = () =>{
    const query = `*[_type == "car" ] | order(_createAt desc){
        carId,
        name,
        image,
        cost,
        brand,
        transmision
    }` 
    return query;
}