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
export const userDataById = () =>{
    const query = `*[_type == 'userdata' ] | order(_createAt desc){
        username,
        email,
        city,
        password,
        uid,
        bank,
        cardName,
        cardNumber
    }` 
    return query;
}