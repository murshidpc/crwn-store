import './App.css';
import {Route} from 'react-router-dom';

//pages
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={Hats} />
    </div>
  );
}

const Hats = () => {
  return(
    <h1>helloo</h1>
  )
}

export default App;
