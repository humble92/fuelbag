import React from 'react'
import Volunteer from './Volunteer'
import Mentor from './Mentor'
import Fuel from './Fuel'

export default () => (
  <div style={{
    backgroundColor: 'white',
    paddingTop: 40,
    paddingBottom: 80,
  }}>
    <div style={{
      textTransform: 'uppercase',
      color: '#35a2ca',
      fontWeight: 'bold',
      fontSize: 26,
      width: '100%',
      textAlign: 'center',
    }}
    >
      How it works
    </div>
    <div style={{
      fontSize: 20,
      paddingTop: 40,
      display: 'flex',
      justifyContent: 'space-around',
    }}>
      <div style={{width: 200}}>
        <Volunteer />
        <div style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#3e4c5b',
          paddingTop: 10,
        }}>
          1. Volunteer
        </div>
        <div style={{
          fontSize: 14,
          color: '#737c84',
          paddingTop: 5,
        }}>
          Volunteer to charity organizations
        </div>
      </div>
      <div style={{width: 200}}>
        <Fuel />
        <div style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#3e4c5b',
          paddingTop: 10,
        }}>
          2. Earn fuel points
        </div>
        <div style={{
          fontSize: 14,
          color: '#737c84',
          paddingTop: 5,
        }}>
          Once you complete your volunteer work you will earn points in your profile.
        </div>
      </div>
      <div style={{width: 200}}>
        <Mentor />
        <div style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#3e4c5b',
          paddingTop: 10,
        }}>
          3. Meet mentors
        </div>
        <div style={{
          fontSize: 14,
          color: '#737c84',
          paddingTop: 5,
        }}>
          Meet mentors who will guide you through your future career
        </div>
      </div>
    </div>
  </div>
)
