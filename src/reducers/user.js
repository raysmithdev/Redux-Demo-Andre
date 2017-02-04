const initialState = {
  name: 'Ray',
  location: 'Vancouver, BC',
  weather: 'Snowing'
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.name }

    default:
      return state
  }
}

export default user
