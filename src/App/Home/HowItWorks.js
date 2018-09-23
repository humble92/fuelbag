import React from 'react'
import Volunteer from './Volunteer'
import Mentor from './Mentor'
import Fuel from './Fuel'
import HeaderText from './HeaderText'

export default () => (
  <div style={{
    backgroundColor: 'white',
    paddingTop: 40,
    paddingBottom: 80,
  }}>
    <HeaderText>
      How it works
    </HeaderText>
    <div style={{
      fontSize: 20,
      paddingTop: 40,
      display: 'flex',
      justifyContent: 'space-around',
    }}>
      <div style={{width: 230}}>
        <Volunteer />
        <div style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#3e4c5b',
          paddingTop: 10,
        }}>
          1. Volunteer
        </div>
      </div>
      <div style={{width: 230}}>
        <Fuel />
        <div style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#3e4c5b',
          paddingTop: 10,
        }}>
          2. Earn fuel points
        </div>
      </div>
      <div style={{width: 230}}>
        <Mentor />
        <div style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#3e4c5b',
          paddingTop: 10,
        }}>
          3. Meet mentors
        </div>
      </div>
    </div>
  </div>
)
