import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MainPage from './components/MainPage'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.less'

ReactDOM.render(
  <MainPage />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
