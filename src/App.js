import logo from './logo.svg';
import './App.css';
import './custom.css';
import Header from './Header.js';
import WelcomeBanner from './WelcomeBanner.js';
import Register from './RegistrationForm';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';
import WelcomeNewUser from './WelcomeNewUser';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';


function App() {
  return (
  <Router>
   <div className="App">
   <div className="App-nav-header"><Header/></div>
    <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/WelcomePage" exact component={WelcomePage} />
    <Route path="/WelcomeNewUser" exact component={WelcomeNewUser} />
    <Route path="/About" exact component={About} />
    <Route path="/Services" exact component={Services} />
    <Route path="/ContactUs" exact component={ContactUs} />
    <Route path="/RegistrationForm" exact component={Register} />
    </Switch>
   </div>  
    </Router>
  );
}

export default App;
