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
  padding-left: 10px;
  cursor: pointer;
`

const Links = ({
  page,
  onSetPage,
}) => (
  <div style={{
    display: 'flex',
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
