import React from 'react'
import { connect } from 'react-redux'
import Button from '../Button'
import Input from './Input'
import HeaderText from './HeaderText'
import isValidEmail from './isValidEmail'
import { signup } from '../../redux/isSignedUp/signup'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({ email: e.target.value })
  }

  handleClick() {
    if (isValidEmail(this.state.email)) {
      this.props.onSignup()
    }
  }

  render() {
    const isEnabled = isValidEmail(this.state.email)
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
        {!this.props.isSignedUp &&
          <div style={{
            paddingBottom: 40,
            width: 400,
          }}>
            <HeaderText>Sign up <br/> and make a difference</HeaderText>
            <div>
              <Input
                style={{
                  marginTop: 20,
                }}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <Button
              style={{marginTop: 20}}
              isDisabled={!isEnabled}
              onClick={this.handleClick}
            >
              Sign Up
            </Button>
          </div>
        }
        {this.props.isSignedUp &&
          <div style={{
            paddingBottom: 40,
            width: 500,
          }}>
            <HeaderText>
              Thank you for signing up! <br/>
              We will contact you shortly.
            </HeaderText>
          </div>
        }
      </div>
    )
  }
}

export default connect(state => ({
  isSignedUp: state.isSignedUp,
}), {
  onSignup: signup,
})(SignUp)
