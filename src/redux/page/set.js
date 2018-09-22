export const set = (value) => ({
  type: 'SET_PAGE',
  value,
})

export default (state, action) =>
  action.type === 'SET_PAGE' ?
    action.value :
    state
