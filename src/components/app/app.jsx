import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import PropTypes from "prop-types";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";

const App = (props) => {

  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen placesCount={placesCount}/>
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/property">
          <PropertyScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

App.propTypes = {
  placesCount: PropTypes.number
};

export default App;
