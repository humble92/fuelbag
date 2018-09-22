import page from './page'

export default (state, action) => ({
  page: page(state.page, action),
})
