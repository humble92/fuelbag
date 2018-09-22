import React from 'react'

export default () => (
  <div style={{
    backgroundColor: '#40E9F1',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 50,
  }}>
    <div style={{
      paddingLeft: 20,
    }}>
      Logo
    </div>
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    }}>
      <div>Home</div>
      <div style={{
        paddingLeft: 50,
      }}>
        Charity organizations
      </div>
      <div style={{
        paddingLeft: 50,
      }}>
        Mentors
      </div>
    </div>
  </div>
)
