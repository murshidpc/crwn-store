import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from  'react-redux';
import { createStructuredSelector } from 'reselect'



//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// current user selector
import { selectCurrentUser } from './redux/user/user.selectors'; 

//header component
import Header from './components/header/header.component';

import { auth , createUserProfileDocument} from './utils/firebase.utils';

//user reducer actons
import { setCurrentUser } from './redux/user/user.actions';

const App = (props) => {

  const { setCurrentUser } = props

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
        if(user){
          const userRef = await createUserProfileDocument(user);
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id : snapshot.id,
              ...snapshot.data() 
            })
         })
        }else{
          setCurrentUser({});
        }

      })
  },[])

  // useEffect(() => {
  //   return () => subscribe();
  // },[])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path="/signin" render={ () => JSON.stringify(props.currentUser) !== '{}' ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)  } />
        <Route  path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
