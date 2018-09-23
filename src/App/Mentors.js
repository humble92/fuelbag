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
      margin: 20,
    }}>
      <div style={{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#35a2ca',
        paddingBottom: 20,
      }}>
        Mentors
      </div>
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
