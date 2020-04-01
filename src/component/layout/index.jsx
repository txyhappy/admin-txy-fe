/*
* @Author: Dtvikey
* @Date:   2020-04-01 13:10:10
* @Last Modified by:   Dtvikey
* @Last Modified time: 2020-04-01 13:29:22
*/

import React from 'react';

import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';

import './theme.css';
import './index.scss';

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="wrapper">
                 <NavTop /> 
                 <NavSide/>
                 {this.props.children}
            </div>
        );
    }
}

export default Layout;