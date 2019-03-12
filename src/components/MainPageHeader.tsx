import * as React from 'react'
import logo from '../images/organize.svg'
import JoinForm from '../routes/JoinForm'
import '../styles/MainPageHeader.less'

interface IProps {
}

interface IState {
  showForm: boolean
}

class MainPageHeader extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  public toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  public render() {
    return (
      <header className="main-page__header">
        <img src={ logo } className="main-page__logo" alt="logo" />
        <h2 className="main-page__title">Scheduler v.0.1</h2>
        <button className="main-page__button" onClick={ this.toggleForm.bind(this) }>JOIN</button>
        <h1>PLAN.EXECUTE.DIVIDE</h1>
        <h3>we've developed it. and have made our best. <br />
          cuz' we are professionals</h3>
        {
          this.state.showForm ? <JoinForm /> : null
        }

      </header>
    )
  }
}

export default MainPageHeader
