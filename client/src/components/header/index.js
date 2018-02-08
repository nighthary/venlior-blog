import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.less';

import { Link } from 'react-router-dom';
import Resource from '../../common/Resource';

class Header extends Component{

    static propTypes = {
        active: PropTypes.number
    }

    changeActiveNav = () => {
        const pathname = window.location.pathname;
        switch(pathname){
            case '/about':
                return 1;
            case '/growth':
                return 2;
            case '/amuse':
                return 3;
            case '/mood':
                return 4;
            case '/commets':
                return 5;
            default: 
                return 0;
        }
    }

    render(){
        const nowPage = this.changeActiveNav();
        console.log(nowPage)
        return (
            <nav>
                <div className='header-logo'>
                    大家好，我是logo
                </div>  
                <ul className='header-tag'>
                    <li className={nowPage === 0 ? 'active' : ''}><Link to='/'>首页</Link></li>
                    <li className={nowPage === 1 ? 'active' : ''}><Link to='/about'>关于</Link></li>
                    <li className={nowPage === 2 ? 'active' : ''}><Link to='/growth'>成长</Link></li>
                    <li className={nowPage === 3 ? 'active' : ''}><Link to='/amuse'>娱乐</Link></li>
                    <li className={nowPage === 4 ? 'active' : ''}><Link to='/mood'>心情</Link></li>
                    <li className={nowPage === 5 ? 'active' : ''}><Link to='/commets'>留言</Link></li>
                </ul>
                <div className='header-search'>
                    <input placeholder='搜索...' className='header-search-input'/>
                    <img src={ Resource.getImg('search') } className='search-png' alt='搜索'/>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);