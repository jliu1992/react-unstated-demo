import React from 'react';
import { render } from 'react-dom';
import AddRemark from './components/AddRemark';
import RemarkList from './components/RemarkList';

import { Provider } from 'unstated';

import 'antd/dist/antd.css';

function App() {
  return (
    <Provider >
      <div style={{ margin: 20 }}>
        <AddRemark />
        <RemarkList />
      </div>
    </ Provider>)
}

render(<App />, document.getElementById('root'));
