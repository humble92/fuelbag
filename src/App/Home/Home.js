import React from 'react'
import Header from './Header'

export default () => (
  <div>
    <Header />
    <div style={{
      backgroundColor: '#5381F3',
      height: 200,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        paddingTop: 20,
        fontSize: 20,
      }}>
        <div>1. Volunteer</div>
        <div style={{paddingTop: 20}}>2. Earn fuel</div>
        <div style={{paddingTop: 20}}>3. Meet mentors</div>
      </div>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        paddingTop: 40,
        paddingBottom: 40,
      }}>
        <div>
          <input type="text" style={{
            outline: 'none',
            fontSize: 20,
            height: 50,
            width: 300,
            borderRadius: 5,
            padding: 15,
            border: '1px solid white',
          }}/>
        </div>
        <button style={{
          fontSize: 20,
          marginTop: 20,
          width: 300,
          height: 50,
          borderRadius: 5,
          backgroundColor: 'green',
          border: 0,
        }}>
          Sign Up
        </button>
      </div>
    </div>
  </div>
)
