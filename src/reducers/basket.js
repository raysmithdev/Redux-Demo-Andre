const initialState = {
  items: [
    {
      name: 'Chocolate'
    },
    {
      name: 'Pizza'
    }
  ]
}

const basket = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {}

    default:
      return state
  }
}

export default basket
