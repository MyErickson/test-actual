import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/Home'
import InformationContainer from './containers/Information'
import './App.scss';

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path="/acceuil/" component={ HomeContainer } />
        <Route exact path="/acceuil/:id" component={ HomeContainer } />
        <Route path="/informations" component={InformationContainer} />
        <Route render={() => <h1>404 Not found</h1>} />
      </Switch>
      </header>
    </div>
  );
}

export default App;
