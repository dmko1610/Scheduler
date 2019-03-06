import * as React from 'react'
import logo from '../images/organize.svg'
import Form from '../routes/RegisterForm'
import '../styles/MainPageHeader.less'

interface Props {
}

interface State {
  showForm: boolean
}

class MainPageHeader extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      showForm: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  public toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  public handleSubmit(event: any): void {
    event.preventDefault()
    
    fetch('http://localhost:3000/register', {
      body: JSON.stringify({}),
      method: 'POST',
      // tslint:disable-next-line:object-literal-sort-keys
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    })
  }

  public render() {
    return (
      <header className="main-page__header">
        <img src={ logo } className="main-page__logo" alt="logo" />
        <h2 className="main-page__title">Scheduler v.0.1</h2>
        <button className="main-page__button" onClick={ this.toggleForm.bind(this) } >JOIN</button>
        <h1>PLAN.EXECUTE.DIVIDE</h1>
        <h3>we've developed it. and have made our best. <br />
          cuz' we are professionals</h3>
        {
          this.state.showForm ? <Form /> : null
        }
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="password">Enter your password</label>
          <input id="password" name="password" type="password" />

          <button>Send data!</button>
        </form>
      </header>
    )
  }

}

export default MainPageHeader
