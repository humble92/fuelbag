import React from 'react'
import organizations from '../data/organizations'
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
        Charity organizations
      </div>
      {organizations.map((org, index) =>
        <ListBox key={index}>
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
        </ListBox>
      )}
    </div>
  </div>
)
