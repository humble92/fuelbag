import React from 'react'
import styled from 'styled-components'

const MenuItem = styled.div`
  height: 50px;
  line-height: 50px;
  margin-left: 50px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`

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
      <MenuItem>Home</MenuItem>
      <MenuItem>Charity organizations</MenuItem>
      <MenuItem>Mentors</MenuItem>
    </div>
  </div>
)
