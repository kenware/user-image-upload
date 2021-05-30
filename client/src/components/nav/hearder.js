import { Link } from 'react-router-dom'
import React from 'react'
import brand from '../../images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/user/actions'

import './nav.scss'

const Header = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  const logoutUser = () => {
    dispatch(logout())
  }

  return (
<div className="">
      <ul id="dropdown1" className="dropdown-content">
      { user ? <li className="divider"></li> : <li/> }
      { user ? <li><a onClick={() => logoutUser()} href="#!">Logout</a></li> : <li/> }
    </ul>

    <nav className="nav nav-fixed-bar white">
        <div className="nav-wrapper">
            <Link className="brand-logo" to="/">
              <img className="logo-img" src={brand} alt="logo" />
            </Link>
            <a data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
                {user
                  ? <li><Link to="/dashboard">Dashboard</Link></li>
                  : (<li>
                    <Link to="/register">Signup</Link>
                </li>)}
                <li><a href="##">{user?.user.email}</a></li>

                  <li>
                    <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                  { user
                    ? (<div className="row">
                    <i className="col material-icons icon-menu-fix">person</i>
                    <i className="col material-icons icon-menu-fix">arrow_drop_down</i>
                    </div>)
                    : <div/>}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
    {user?.email
      ? <li><Link to="/dashboard">Dashboard</Link></li>
      : (<li>
        <Link to="/home">Signup</Link>
        </li>)}
          <li> {user ? <a onClick={() => logoutUser()} href="#!">Logout</a> : ''} </li>
        </ul>
</div>
  )
}

export default Header
