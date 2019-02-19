import * as React from 'react'
import MainPageBody from './MainPageBody'
import MainPageFooter from './MainPageFooter'
import MainPageHeader from './MainPageHeader'

class MainPage extends React.Component {
  public render() {
    return (
      <div className="container">
        <MainPageHeader />
        <MainPageBody />
        <MainPageFooter />
      </div>
    )
  }
}

export default MainPage;
