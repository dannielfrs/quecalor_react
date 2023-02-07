import { weatherReducer, suggestedWeathersReducer } from './reducers/weatherReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    weather: weatherReducer,
    suggestedWeathers: suggestedWeathersReducer 
})

export const store = createStore(reducer, applyMiddleware(thunk))