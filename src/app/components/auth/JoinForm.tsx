import * as React from 'react';
import git from '../../../assets/images/github-logo.svg';
import google from '../../../assets/images/google-plus.svg';
import linkedin from '../../../assets/images/linkedin.svg';
import vk from '../../../assets/images/vk-social-logotype.svg';
import {SignUpForm} from './SignUpForm';

interface IProps {

}

interface IState {
    showForm: boolean,
}

export class JoinForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div className="register-form">
                <button className="sign-up" >SIGN UP</button>
                <button className="sign-in">SIGN IN</button>
                <img src={vk} alt="vk" width="50px" height="50px"/>
                <img src={git} alt="git" width="50px" height="50px"/>
                <img src={linkedin} alt="linkedin" width="50px" height="50px"/>
                <img src={google} alt="google" width="50px" height="50px"/>
                {
                    this.state.showForm ? <SignUpForm/> : null
                }
                {/* <button onClick={this.props.closePopup}>close me</button> */}
            </div>
        );
    }

}

export default JoinForm;
