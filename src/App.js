import './App.css';
import {Route, Switch} from 'react-router-dom';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

//header component
import Header from './components/header/header.component';
import { useEffect, useState } from 'react';

import { auth , createUserProfileDocument} from './utils/firebase.utils';

const App = () => {
  const [user, setUser] = useState({});
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
        if(user){
          const userRef = await createUserProfileDocument(user);
          userRef.onSnapshot(snapshot => {
            setUser({
              id : snapshot.id,
              ...snapshot.data() 
            })
         })
        }else{
          setUser({});
        }

      })
  },[])

  // useEffect(() => {
  //   return () => subscribe();
  // },[])
  console.log(user);

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
