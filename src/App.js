import React from 'react';
import HomePage from './pages/home-page/homepage'
import PetsPage from './pages/pets-page/pets-page'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import FormPage from './pages/form-page/form-page'
import MorePetInfo from './components/more-pet-info/more-pet-info'


function App() {
  // god forgive my code
  let photo = 'randomphoto'
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/pets' component={PetsPage}></Route>
        <Route exact path='/pets/info' component={FormPage}></Route>
        <Route exact path='/pets/:id' component={(props) => {
          let {id} = props.match.params
          return <MorePetInfo id={id} photo={photo}></MorePetInfo>
        }}></Route>
      </Switch>
    </div>
  );
}

export default App;
