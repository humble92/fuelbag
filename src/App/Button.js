import styled, { css } from 'styled-components'

export default styled.div`
  user-select: none;
  padding: 15px;
  color: white;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  ${props => !props.isDisabled && css`
    cursor: pointer;
    background-color: #35a2ca;
  `}
  ${props => props.isDisabled && css`
    background-color: gray;
  `}
  font-weight: bold;
  text-align: center;
`
