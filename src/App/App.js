import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Home from './Home'
import { CHARITY, MENTORS, HOME } from '../pages'
import Charity from './Charity'
import Mentors from './Mentors'

const App = ({
  page,
}) => (
  <div style={{
    backgroundColor: '#FF9A43',
    minHeight: '100vh',
  }}>
    <Header />
    {(!page || page === HOME) &&
      <Home />
    }
    {page === CHARITY &&
      <Charity />
    }
    {page === MENTORS &&
      <Mentors />
    }
  </div>
)

export default connect(state => ({
  page: state.page,
}))(App)
