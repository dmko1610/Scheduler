import * as React from 'react'
import logo from '../images/organize.svg'
import '../styles/MainPageHeader.less'


class MainPageHeader extends React.Component {
  public render() {
    return (      
        <header className="main-page__header">
          <img src={ logo } className="main-page__logo" alt="logo" />
          <h2 className="main-page__title">Scheduler v.0.1</h2>
          <button className="main-page__button" value="JOIN">JOIN</button>
          <h1>PLAN.EXECUTE.DIVIDE</h1>
          <h3>we've developed it. and have made our best. <br />
            cuz' we are professionals</h3>
        </header>      
    )
  }
}

export default MainPageHeader;
