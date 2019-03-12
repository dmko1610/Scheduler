import * as React from 'react'
import git from '../images/github-logo.svg'
import google from '../images/google-plus.svg'
import linkedin from '../images/linkedin.svg'
import vk from '../images/vk-social-logotype.svg'
import '../styles/RegisterForm.less'
import { SignUpForm } from './SignUpForm'


interface IProps {

}

interface IState {
  showForm: boolean
}

export class JoinForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      showForm: false
    }

    this.toggleForm = this.toggleForm.bind(this)
  }

  public toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  public render() {
    return (
      <div className='register-form'>
        <button className="sign-up" onClick={ this.toggleForm }>SIGN UP</button>
        <button className="sign-in">SIGN IN</button>
        <img src={ vk } alt="vk" width="50px" height="50px" />
        <img src={ git } alt="git" width="50px" height="50px" />
        <img src={ linkedin } alt="linkedin" width="50px" height="50px" />
        <img src={ google } alt="google" width="50px" height="50px" />
        {
          this.state.showForm ? <SignUpForm /> : null
        }
        {/* <button onClick={this.props.closePopup}>close me</button> */ }
      </div>
    )
  }

}

export default JoinForm