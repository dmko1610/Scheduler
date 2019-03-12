import * as React from 'react'
import git from '../images/github-logo.svg'
import google from '../images/google-plus.svg'
import linkedin from '../images/linkedin.svg'
import vk from '../images/vk-social-logotype.svg'
import '../styles/RegisterForm.less'

function JoinForm() {
  return (
    <div className='register-form'>
        <button className="sign-up">SIGN UP</button>
        <button className="sign-in">SIGN IN</button>
        <img src={vk} alt="vk" width="50px" height="50px"/>
        <img src={git} alt="git" width="50px" height="50px"/>
        <img src={linkedin} alt="linkedin" width="50px" height="50px"/>
        <img src={google} alt="google" width="50px" height="50px"/>
        
        {/* <button onClick={this.props.closePopup}>close me</button> */}
    </div>
  );

}

export default JoinForm