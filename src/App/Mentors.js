import React from 'react'
import mentors from '../data/mentors'

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
      {mentors.map((mentor, index) =>
        <div
          key={index}
          style={{
            fontSize: 18,
            border: '1px solid black',
            padding: 10,
            display: 'flex',
          }}
        >
          <div style={{
            minWidth: 100,
            minHeight: 100,
            marginRight: 10,
            backgroundColor: 'gray',
          }} />
          <div>
            <div><h3>{mentor.firstName} {mentor.lastName}</h3></div>
            <div>{mentor.role}</div>
            <div>{mentor.company}</div>
          </div>
        </div>
      )}
    </div>
  </div>
)
