import React from 'react'
import organizations from '../data/organizations'

export default () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
  }}>
    <div style={{
      width: 500,
      backgroundColor: 'white',
      margin: 20,
    }}>
      {organizations.map(org =>
        <div style={{
          fontSize: 18,
          border: '1px solid black',
          padding: 10,
          display: 'flex',
        }}>
          <div style={{
            minWidth: 100,
            minHeight: 100,
            marginRight: 10,
            backgroundColor: 'gray',
          }} />
          <div>
            <div><h3>{org.name}</h3></div>
            <div>{org.goal}</div>
          </div>
        </div>
      )}
    </div>
  </div>
)
