const useCars = async (car: string) => {
    const url: string = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${car}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a7e081c893msh5df46ac558eefaep1871a1jsn501fab9f436b',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        return await response.json()
    } catch (error) {
        console.error(error);
    }
}

export default useCars;