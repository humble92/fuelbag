import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import img from '../images/background.jpg'

const Slogan = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
`

export default () => (
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
          home | charity organizations | mentors
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
    <div style={{
      backgroundColor: '#5381F3',
      height: 200,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        paddingTop: 20,
        fontSize: 20,
      }}>
        <div>1. Volunteer</div>
        <div style={{paddingTop: 20}}>2. Earn fuel</div>
        <div style={{paddingTop: 20}}>3. Meet mentors</div>
      </div>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        paddingTop: 40,
        paddingBottom: 40,
      }}>
        <div>
          <input type="text" style={{
            outline: 'none',
            fontSize: 20,
            height: 50,
            width: 300,
            borderRadius: 5,
            padding: 15,
            border: '1px solid white',
          }}/>
        </div>
        <button style={{
          fontSize: 20,
          marginTop: 20,
          width: 300,
          height: 50,
          borderRadius: 5,
          backgroundColor: 'green',
          border: 0,
        }}>
          Sign Up
        </button>
      </div>
    </div>
  </div>
)
