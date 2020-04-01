/*
* @Author: Dtvikey
* @Date:   2020-03-31 14:16:40
* @Last Modified by:   Dtvikey
* @Last Modified time: 2020-04-01 14:32:49
*/


import React          from 'react';
import ReactDOM       from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
}                     from "react-router-dom";

import Layout   from 'component/layout/index.jsx';

// 页面
import Home           from 'page/home/index.jsx';


class App extends React.Component{
    render(){
        return (
              <Router>
                <Layout>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/payment" component={Home}/>
                      <Route path="/payment-batman" component={Home}/>
                      <Route path="/payment-branch" component={Home}/>
                  </Switch>
                </Layout>
              </Router>
        );
        
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);