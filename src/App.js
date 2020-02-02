import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TaskList from './components/TaskList/TaskList';
import TaskEdit from './components/TaskEdit/TaskEdit';

import { 
    BrowserRouter as Router, 
    Switch, 
    Route 
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
       <Route exact path='/' component={TaskList} />
       <Route path='/items/:id' component={TaskEdit} />
      </Switch>
     </Router>
    </div>
  );
}

export default App;
