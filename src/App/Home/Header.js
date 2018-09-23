import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import img from './background.jpg'
import Links from './Links'

const Wrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
`

const Header = () => (
  <Wrapper>
    <div style={{
      color: 'white',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: 20,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          backgroundColor: 'white',
          width: 50,
          height: 50,
          borderRadius: 25,
        }}>
          <Logo />
        </div>
        <div style={{
          fontWeight: 'bold',
          paddingLeft: 10,
          textTransform: 'uppercase',
        }}>
          Fuelbag
        </div>
      </div>
      <Links />
    </div>
    <div style={{
      paddingTop: '20%',
      paddingLeft: '5%',
      fontWeight: 'bold',
      fontSize: 48,
      color: 'white',
    }}>
      Let's break the cycle of poverty together!
    </div>
  </Wrapper>
)

export default Header

