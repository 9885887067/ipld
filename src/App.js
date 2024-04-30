import {Route,Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

import NotFound from "./components/NotFound"

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound}/>
  </Switch>
)

export default App
