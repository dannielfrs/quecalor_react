
export const getCityWeather = async (cityData) => {
    try {
        const apikey = process.env.REACT_APP_OPENWEATHER_KEY;
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityData.city},${cityData.countryCode}&lang=es&appid=${apikey}&units=metric`
        const response = await fetch(URL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error in API: " + error)
    }
}