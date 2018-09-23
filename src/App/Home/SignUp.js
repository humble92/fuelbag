import React from 'react'

export default () => (
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
)
