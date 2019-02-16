import * as React from 'react'
import '../styles/MainPageFooter.less'

class MainPageFooter extends React.Component {
    public render() {
        return (
            <footer className="main-page__footer">
                <h1>Interested?</h1>
                <button className="main-page__button" value="JOIN US">JOIN US</button>
            </footer>

        )
    }
}

export default MainPageFooter