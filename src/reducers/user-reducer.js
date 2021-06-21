const init = {
    username: '',
    name: ''
}
export default function UserReducer(state = init, action) {
  const {payload, name, status} = action
  if (!action) {
    return state
  }
  
  if (name !== 'users/authenticate' && name !== 'users/update') return state
  if (name === 'users/authenticate') {
    switch (status) {
      case 'SUCCESS': {
        localStorage.setItem('token', payload.token)
        return {...state, ...payload}
      }
  
      default:
        return state
    }
  }

  if (name === 'users/update') {
    switch (status) {
      case 'SUCCESS': {
        return {...state, ...payload}
      }
  
      default:
        return state
    }
  }
  
}