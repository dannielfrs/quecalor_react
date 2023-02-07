import citiesData from '../assets/jsonData/citiesData.json'

export const getRandomCity = () => {
    const random = Math.floor(Math.random() * citiesData.length);
    const randomCity = citiesData[random]
    return randomCity
}

export const getLocationData = () => {
    let cityData = {}
    if (localStorage.getItem('city') === null) {
        cityData = getRandomCity();
    } else {
        cityData.city = localStorage.getItem('city')
        cityData.countryCode = localStorage.getItem('countryCode')
    }
    return cityData
}

export const setLocationData = (city, countryCode) => {
    localStorage.setItem('city', city);
    localStorage.setItem('countryCode', countryCode);
}