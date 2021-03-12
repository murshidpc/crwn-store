import './App.css';
import {Route, Switch} from 'react-router-dom';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

//header component
import Header from './components/header/header.component';
import { useEffect, useState } from 'react';

import { auth } from './utils/firebase.utils';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
      auth.onAuthStateChanged((user) => {
        setUser(user);
      })
  },[])

  // useEffect(() => {
  //   return () => console.log("unmount");
  // },[])


  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route to="/signin"  component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
