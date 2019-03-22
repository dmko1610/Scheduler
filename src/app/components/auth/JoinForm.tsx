import * as React from 'react';
import git from '../../../assets/images/github-logo.svg';
import google from '../../../assets/images/google-plus.svg';
import linkedin from '../../../assets/images/linkedin.svg';
import vk from '../../../assets/images/vk-social-logotype.svg';
import {SignUpForm} from './SignUpForm';
import {DispatchThunk} from '@store';
import {connect} from 'react-redux';
import {Thunks} from '@store/app';
import {getSIFVisibility, getSUFVisibility} from '@store/app/app.selectors';
import {SignInForm} from '@components/auth/SignInForm';

interface IProps {
    toggleSignUpForm?: any;
    toggleSignInForm?: any;
    visibleSignUpForm: boolean;
    visibleSignInForm: boolean;

}

interface IState {
}

class JoinFormComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    toggleSignUpVisibility = () => {
        this.props.toggleSignUpForm();
        if (this.props.visibleSignInForm) {
            this.toggleSignInVisibility();
        }
    };

    toggleSignInVisibility = () => {
        this.props.toggleSignInForm();
        if (this.props.visibleSignUpForm) {
            this.toggleSignUpVisibility();
        }
    };

    add = (event) => {
        if (event.keyCode === 27) {
            if (this.props.visibleSignUpForm) {
                // this.toggleSignInVisibility();
                console.log('SIGNUP CLOSED');
            } else if (this.props.visibleSignInForm) {
                console.log('SIGNIN CLOSED');
                // this.toggleSignUpVisibility();
            }
        }
    };

    public render() {
        return (
            <div className="register-form" onKeyPress={this.add}>
                <button className="sign-up" onClick={this.toggleSignUpVisibility}>SIGN UP</button>
                <button className="sign-in" onClick={this.toggleSignInVisibility}>SIGN IN</button>
                <img src={vk} alt="vk" width="50px" height="50px"/>
                <img src={git} alt="git" width="50px" height="50px"/>
                <img src={linkedin} alt="linkedin" width="50px" height="50px"/>
                <img src={google} alt="google" width="50px" height="50px"/>
                {
                    this.props.visibleSignUpForm && <SignUpForm/>
                }
                {
                    this.props.visibleSignInForm && <SignInForm/>
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        visibleSignUpForm: getSUFVisibility(state),
        visibleSignInForm: getSIFVisibility(state),
    };
};

const mapDispatchToProps = (dispatch: DispatchThunk) => ({
    toggleSignUpForm: () => {
        dispatch(Thunks.toggleSUFVisibility());
    },
    toggleSignInForm: () => {
        dispatch(Thunks.toggleSIFVisibility());
    },
});

export const JoinForm = connect(mapStateToProps, mapDispatchToProps)(JoinFormComponent);
