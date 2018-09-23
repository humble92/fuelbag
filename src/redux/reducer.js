import page from './page'
import isSignedUp from './isSignedUp'

export default (state, action) => ({
  page: page(state.page, action),
  isSignedUp: isSignedUp(state.isSignedUp, action),
})
