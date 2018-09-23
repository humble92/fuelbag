import React from 'react'
import mentors from '../data/mentors'
import ListBox from './ListBox'

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
        <ListBox key={index}>
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
        </ListBox>
      )}
    </div>
  </div>
)
