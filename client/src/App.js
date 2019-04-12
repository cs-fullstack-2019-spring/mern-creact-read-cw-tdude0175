import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import HomePage from "./components/HomePage";
import EditMovie from "./components/EditMovie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state=
        {
          id:null
        }
  }


  editFeed = (e) =>
  {
    this.setState({id:e})
  };

  render() {
    return (
      <div className="App">
        <Router>
          <h1>Nav Bar</h1>
          <Link to="/Home">Home</Link>
          <Link to="/MovieList">List</Link>
          <Link to="/AddMovie">Add</Link>
          <Route exact path={"/Home"} component={HomePage}/>
          <Route exact path={"/MovieList"} component={()=><MovieList clickedit={this.editFeed}/>}/>
          <Route exact path={"/AddMovie"} component={AddMovie}/>
          <Route exact path={"/editMovie"} component={()=><EditMovie id={this.state.id}/>}/>
        </Router>
      </div>
    );
  }
}

export default App;
