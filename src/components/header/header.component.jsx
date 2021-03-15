import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../utils/firebase.utils';
import { connect } from 'react-redux'

import './header.component.style.scss';

const  Header = ({currentUser}) => {
    return(
    <div className="header">
        <div className="logo-container">
            <Link to="/" >
                <Logo className='logo' />
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="#">
                CONTACT
            </Link>
            {
                JSON.stringify(currentUser) !== '{}' ? (
                    <div className="option"
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </div>    
                ):(
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )
            }
        </div>
    </div>
)}

const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);