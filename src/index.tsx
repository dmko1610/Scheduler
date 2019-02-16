import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import './styles/index.less'
import MainPageHeader from './components/MainPageHeader';

ReactDOM.render(
  <MainPageHeader />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
