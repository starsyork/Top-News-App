import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import { Button } from 'antd';
import PCIndex from './components/pc_index.js';
import MobileIndex from './components/mobile_index.js';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCNewsDetails from './components/pc_news_detail';

export default class Root extends React.Component{
  render(){
    return(
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Router history={hashHistory}>
						<Route path="/" component={PCIndex}></Route>
						<Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
					</Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex/>
        </MediaQuery>

      </div>
    );
  };
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));
