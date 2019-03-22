import * as React from 'react';

interface IProps {
}

class SignInFormComponent extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <form className="sign-in-form">
                <label htmlFor="sign-in-username">Enter username</label>
                <input id="sign-in-username" name="sign-in-username" type="text" placeholder="Username"/>

                <label htmlFor="sign-in-password">Enter your password</label>
                <input id="sign-in-password" name="sign-in-password" type="password" placeholder="Password"/>

                <button>Login</button>
            </form>
        );
    }
}

export const SignInForm = SignInFormComponent;
