import React                from 'react';
import { Link, NavLink }    from 'react-router-dom';

class NavSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/">
                                <i className="fa fa-dashboard"></i>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/payment">
                                <i className="fa fa-list"></i> 
                                <span>稿费条目</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/payment" activeClassName="active-menu">稿费管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/payment-batman" activeClassName="active-menu">通讯员管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/payment-branch" activeClassName="active-menu">部门管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/payment-editor" activeClassName="active-menu">责编管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/score">
                                <i className="fa fa-list"></i> 
                                <span>打分</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/acore" activeClassName="active-menu">打分管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/score-verified" activeClassName="active-menu">核分管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/score-tobepaid" activeClassName="active-menu">待支付管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/score-paid" activeClassName="active-menu">已支付管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/score-collaboration" activeClassName="active-menu">合作/挂名管理</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="active">
                            <Link to="/finance">
                                <i className="fa fa-list"></i> 
                                <span>财务</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/finance-pendsms" activeClassName="active-menu">待短信通知</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/finance-smsed" activeClassName="active-menu">已短信通知</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="active">
                            <Link to="/user">
                                <i className="fa fa-user-o"></i> 
                                <span>用户</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="active">
                            <Link to="/recyclebin">
                                <i className="fa fa-user-o"></i> 
                                <span>回收站</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/recyclebin" activeClassName="active-menu">回收站管理</NavLink>
                                </li>
                            </ul>
                        </li>


                         <li className="active">
                            <Link to="/reportforms">
                                <i className="fa fa-list"></i> 
                                <span>报表</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/reportforms" activeClassName="active-menu">报表管理</NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>

        </div>
            
        );
    }
}

export default NavSide;