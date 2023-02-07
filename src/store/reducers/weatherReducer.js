
export const weatherReducer = (state = {}, action) => {
  console.log('ACTION:', action)

  switch (action.type) {
    case '@weather/get': {
      return action.payload
    }
    default:
      return state
  }
}

export const suggestedWeathersReducer = (state = [], action) => {
  console.log('ACTION:', action)

  switch (action.type) {
    case '@suggestedWeathers/get': {
      return [...state, action.payload]
    }
    default:
      return state
  }
}