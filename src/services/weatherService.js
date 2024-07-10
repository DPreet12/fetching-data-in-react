
// const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
const BASE_URL = `http://localhost:3000/weather/`;

const show = async(city) => {

    try {
        // const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + city);
        const data = await res.json();
        console.log("Data", data);
        return data;
    } catch (error) {
        console.log("error", error)
    }
}

// show("New York");

export { show };