import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Home from './Home/Home'
import { CHARITY, MENTORS, HOME } from '../pages'
import Charity from './Charity'
import Mentors from './Mentors'

const App = ({
  page,
}) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }}>
    <div style={{
      backgroundColor: '#FF9A43',
      width: 880,
      minHeight: '100vh',
      fontFamily: 'Montserrat',
    }}>
      {(!page || page === HOME) &&
        <Home />
      }
      {page === CHARITY &&
        <div>
          <Header />
          <Charity />
        </div>
      }
      {page === MENTORS &&
        <div>
          <Header />
          <Mentors />
        </div>
      }
    </div>
  </div>
)

export default connect(state => ({
  page: state.page,
}))(App)
