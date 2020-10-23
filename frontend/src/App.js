import React, {Component} from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Nav from "./components/layout/Nav";
import Home from "./components/pages/home/Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Redirect from="*" to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps)(App);
