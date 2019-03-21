import * as React from 'react';

interface IProps {
}

export class SignUpForm extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            showForm: false,
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <form className="signup-form">
                <label htmlFor="username">Enter username</label>
                <input id="username" name="username" type="text" placeholder="Username"/>

                <label htmlFor="password">Enter your password</label>
                <input id="password" name="password" type="password" placeholder="Password"/>

                <button>Send data!</button>
            </form>
        );
    }
}

