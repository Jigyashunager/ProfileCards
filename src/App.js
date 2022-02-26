import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileListing from './containers/ProfileListing';
import Header from './containers/Header';
import ProfileDetails from './containers/ProfileDetails';



function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProfileListing}/>
          <Route path="/users/:userID" exact component={ProfileDetails} />
          <Route> 404 Not Found </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App