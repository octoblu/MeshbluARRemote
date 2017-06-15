import React from 'react'
import { Button, View, Text } from 'react-native'
import styled from 'styled-components/native'
import t from 'tcomb-form-native'

var Form = t.form.Form
var options = {}
var LoginForm = t.struct({
  email: t.String,
  password: t.String
})

const StyledView = styled.View`
  flex: 1;
  background-color: #14568F;
`

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 50 0 50;
`

const StyledText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 20 0 40 0;
  color: #fff;
`

const Margin = styled.View`
  margin-top: 10;
`

class Login extends React.Component {
  state = {
    value: null
  }

  onChange = (value) => {
    this.setState({ value })
  }

  clearForm = () => {
    this.setState({ value: null })
  }

  attemptLogin = () => {
    var value = this.refs.form.getValue()
    console.log(value)
    this.clearForm()
  }

  render() {
    return (
      <StyledView>
        <CenterView>
          <StyledText>
            Please login to Octoblu...
          </StyledText>

          <Form
            ref="form"
            type={LoginForm}
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />

          <Margin>
            <Button title='Sign in' onPress={this.attemptLogin}/>
          </Margin>
        </CenterView>
      </StyledView>
    )
  }
}

export default Login
