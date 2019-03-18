import * as React from 'react';

interface IProps {

}

export class SignUpForm extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            showForm: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //TODO: refactor to proper auth via actions
    public handleSubmit(event: any): void {
        event.preventDefault();
        const responsePromise = fetch('http://localhost:3000/register', {
            body: JSON.stringify({
                'password': event.target.password.value,
                'username': event.target.username.value
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        });
    }

    public render() {
        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <label htmlFor="username">Enter username</label>
                <input id="username" name="username" type="text" placeholder="Username"/>

                <label htmlFor="password">Enter your password</label>
                <input id="password" name="password" type="password" placeholder="Password"/>

                <button>Send data!</button>
            </form>
        );
    }
}

