import React from 'react'
import Button from '../Button'

export default () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  }}>
    <div style={{
      paddingTop: 40,
      paddingBottom: 40,
    }}>
      <div>
        <input
          type="text"
          style={{
            outline: 'none',
            backgroundColor: '#f7f7f7',
            color: '#61788e',
            border: 'solid 1px #BFD4E8',
            fontSize: 20,
            height: 50,
            width: 400,
            borderRadius: 10,
            padding: 15,
          }}
          value="Email"
        />
      </div>
      <Button style={{marginTop: 10}}>
        Sign Up
      </Button>
    </div>
  </div>
)
