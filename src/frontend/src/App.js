import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import {
//     Navbar,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink } from 'reactstrap';
import { auth } from './firebase.js';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            user: null,
            uid: null
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            console.log("App.js -> user: ", user);
            if (user) {
                this.setState({ user });
                this.setState({ uid: user.uid });
            }
        });
    }

    render () {
        return (
            <div>
                <main className='App-main'>
                    <Switch>
                        <Route exact path='/' render={() => (
                            this.state.user ? (
                                <Home uid={this.state.uid}/>
                            ) : (
                                <Redirect to='/login'/>
                            )
                        )}/>
                        <Route path='/lists' render={() => (
                            this.state.user ? (
                                <Home uid={this.state.uid}/>
                            ) : (
                                <Redirect to='/login'/>
                            )
                        )}/>
                        <Route exact path='/login' render={() => (
                            this.state.user ? (
                                <Redirect to='/lists'/>
                            ) : (
                                <Login />
                            )
                        )}/>
                        <Route exact path='/register' render={() => (
                            this.state.user ? (
                                <Redirect to='/lists'/>
                            ) : (
                                <Register />
                            )
                        )}/>
                        {/* <Route path='/groups' component={Groups}/> */}
                    </Switch>
                </main>
            </div>
        );
    }

    componentDidUpdate(prevState) {
        if (this.state.user !== prevState.user) {
            console.log("App", this.state.user, prevState.user);
        }
    }
}

export default App;