import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'

import Header from '../components/header';
import Home from '../views/home';
import About from '../views/about';
import Growth from '../views/growth';
import Amuse from '../views/amuse';
import Mood from '../views/mood';
import Commets from '../views/commets';

export default class extends React.Component {
    
    render(){
        return (
            <Router>
                <div>
                    <Header active={0}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/growth" component={Growth}/>
                        <Route exact path="/amuse" component={Amuse}/>
                        <Route path="/mood" component={Mood}/>
                        <Route path="/commets" component={Commets}/>
                    </Switch>
                </div>
            </Router>
        )
    }
};