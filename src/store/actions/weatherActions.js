import { getCityWeather } from '../../services/weatherService'

// --------------------- ACTION CREATORS --------------------

export const getWeather = data => {
    return async (dispatch) => {
        const cityWeather = await getCityWeather(data)
        console.log(cityWeather)
        dispatch({
            type: '@weather/get',
            payload: cityWeather
        })
    }
}

export const getSuggestedWeathers = data => {
    return async (dispatch) => {
        const randomItems = data.sort(() => .5 - Math.random()).slice(0, 10);
        await randomItems.map(async item => {
            const cityWeather = await getCityWeather(item)
            dispatch({
                type: '@suggestedWeathers/get',
                payload: cityWeather
            })
        })
    }
}