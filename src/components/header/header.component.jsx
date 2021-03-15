import React from 'react';
import {Link} from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../utils/firebase.utils';
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

//scss
import './header.component.style.scss';

//selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const  Header = ({currentUser, hidden}) => {
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
            <CartIcon />
        </div>
        {!hidden ?  <CartDropdown /> : null}
       
    </div>
)}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);