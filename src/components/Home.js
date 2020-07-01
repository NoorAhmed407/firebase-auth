import React, { Component } from 'react';
import fire from './../config/fire';

class Home extends Component{

    logOut = () =>{
        fire.auth().signOut();

    }

    render(){
        return(
            <div className="container text-center">
                <h1 className="my-5">You are Logged in</h1>
                <button className="btn btn-warning" onClick={this.logOut}>Logout</button>
            </div>
        );
    }
}

export default Home;