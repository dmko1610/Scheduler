import * as React from 'react';

interface IProps {
}

export class SignUpForm extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/register', {
            body: JSON.stringify({
                password: event.target.password.value,
                username: event.target.username.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        }).then(response => response.json());
    };

    public render() {
        return (
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <label htmlFor="username">Enter username</label>
                <input id="username" name="username" type="text" placeholder="Username"/>

                <label htmlFor="password">Enter your password</label>
                <input id="password" name="password" type="password" placeholder="Password"/>

                <button>Register</button>
            </form>
        );
    }
}
