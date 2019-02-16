import * as React from 'react'
import MainPageHeader from './MainPageHeader'
import MainPageFooter from './MainPageFooter'
import MainPageBody from './MainPageBody'

class MainPage extends React.Component {
  render() {
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
