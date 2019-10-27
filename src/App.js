import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import EventEdit from './components/EventEdit';
import EventForm from './components/EventForm';
import Locations from './components/Locations';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import './App.css';
import Header from './components/Header';

class App extends Component{

  render() {
  return (
<div className="main-wrap clearfix">
    <Header />
<main role="main" className="container">
  <div className="row">
    <div className="col-md-3">
    <Navigation />
    </div>
    <div className="col-md-9">
      <div className="ct-box">
        <Switch>
          <Route path="/events/add" component={EventForm}/>
          <Route path="/events/edit/:id" component={EventEdit}/>
          <Route path="/events/details/:id" component={EventDetails}/>
          <Route path="/events" component={Events}/>
          <Route path="/locations" component={Locations}/>
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home}/>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  </div>

</main>
    </div>

  );

}
}

export default App;
