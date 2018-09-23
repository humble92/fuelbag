export const signup = () => ({
  type: 'SIGNUP',
})

export default (state, action) =>
  action.type === 'SIGNUP' ?
    true :
    state
