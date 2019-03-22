import * as React from 'react';

interface IProps {
}

export class SignUpForm extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <form className="sign-up-form">
                <label htmlFor="sign-up-username">Enter username</label>
                <input id="sign-up-username" name="sign-up-username" type="text" placeholder="Username"/>

                <label htmlFor="sign-up-password">Enter your password</label>
                <input id="sign-up-password" name="sign-up-password" type="password" placeholder="Password"/>

                <button>Send data!</button>
            </form>
        );
    }
}
