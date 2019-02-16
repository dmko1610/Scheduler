import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.less'
import MainPage from './components/MainPage'

ReactDOM.render(
  <MainPage />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
