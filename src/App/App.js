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
    backgroundColor: '#f0f0f0',
  }}>
    <div style={{
      width: 880,
      minHeight: '100vh',
      fontFamily: 'Montserrat',
    }}>
      {(!page || page === HOME) &&
        <Home />
      }
      {page === CHARITY &&
        <div style={{width: '100%', backgroundColor: 'white'}}>
          <Header />
          <Charity />
        </div>
      }
      {page === MENTORS &&
        <div style={{width: '100%', backgroundColor: 'white'}}>
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
