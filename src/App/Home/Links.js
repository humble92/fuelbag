import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { set as setPage } from '../../redux/page/set'
import {
  HOME,
  CHARITY,
  MENTORS,
} from '../../pages.js'

const Item = styled.div`
  padding-left: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Links = ({
  page,
  onSetPage,
}) => (
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
)

export default connect(state => ({
  page: state.page,
}), {
  onSetPage: setPage,
})(Links)
