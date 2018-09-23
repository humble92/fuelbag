import React from 'react'

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
            borderRadius: 5,
            padding: 15,
          }}
          value="Email"
        />
      </div>
      <button style={{
        fontSize: 20,
        marginTop: 20,
        width: 400,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#35a2ca',
        color: 'white',
        textTransform: 'uppercase',
        border: 0,
      }}>
        Sign Up
      </button>
    </div>
  </div>
)
