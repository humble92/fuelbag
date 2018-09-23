export const signup = () => (dispatch) => {
  localStorage.setItem('isSignedUp', true)
  dispatch({ type: 'SIGNUP' })
}

export default (state, action) =>
  action.type === 'SIGNUP' ?
    true :
    state
