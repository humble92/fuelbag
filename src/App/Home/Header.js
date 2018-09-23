import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import img from './background.jpg'
import Links from './Links'

const Slogan = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
`

const Header = () => (
  <div>
    <Slogan>
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
          <Logo />
          <div style={{
            fontWeight: 'bold',
            paddingLeft: 10,
            textTransform: 'uppercase',
          }}>fuelbag</div>
        </div>
        <div style={{
          height: 50,
          lineHeight: '50px',
          fontSize: 12,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}>
          <Links />
        </div>
      </div>
      <div style={{
        paddingTop: '20%',
        paddingLeft: '5%',
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
      }}>
        Let's break the cycle of poverty together!
      </div>
    </Slogan>
  </div>
)

export default Header

