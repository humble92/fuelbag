import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { set as setPage } from '../redux/page/set'
import {
  HOME,
  CHARITY,
  MENTORS,
} from '../pages.js'
import Logo from './Logo'

const Item = styled.div`
  padding-left: 20px;
  cursor: pointer;
  color: #35a2ca;
  &:hover {
    text-decoration: underline;
  }
`

const Header = ({
  onSetPage,
}) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      <div><Logo /></div>
      <div style={{
        fontWeight: 'bold',
        paddingLeft: 10,
        textTransform: 'uppercase',
        color: '#35a2ca',
      }}>
        Fuelbag
      </div>
    </div>
    <div style={{
      display: 'flex',
      height: 50,
      lineHeight: '50px',
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    }}>
      <Item onClick={() => onSetPage(HOME)}>Home</Item>
      <Item onClick={() => onSetPage(CHARITY)}>Charity organizations</Item>
      <Item onClick={() => onSetPage(MENTORS)}>Mentors</Item>
    </div>
  </div>
)

export default connect(null, {
  onSetPage: setPage,
})(Header)
