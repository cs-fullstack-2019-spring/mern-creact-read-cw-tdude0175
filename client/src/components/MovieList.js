import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state=
            {
                movieList:[]
            }
    }

    componentWillMount() {
        this.gatherMovies()
    }

    gatherMovies =()=>{
        fetch("/listing")
            .then(data=>data.json())
            // .then(data=>console.log(data));
            .then(conData => this.setState({movieList: conData}))
            // .then(data => console.log(data))
    };

    click =(e) =>
    {
        this.props.clickedit(e.target.name)
    };

    render() {
        var movieListing = this.state.movieList.map((Movie)=>
        {
            if(Movie.actors)
                return (<div key={Movie._id}>
                    <p >{Movie.movieName} has a genre of {Movie.genre} <Link to={"/editMovie"} onClick={this.click} name={Movie._id} >Edit</Link> </p>
                        <p>Actors:{Movie.actors.mainActor}, {Movie.actors.mainActress}, {Movie.actors.supportingActor} , {Movie.actors.supportingActress}</p>
                    </div>
                );
            else
            return(
                <p key={Movie._id} >{Movie.movieName} has a genre of {Movie.genre} <Link to={"/editMovie/"} onClick={this.click} name={Movie._id}>Edit</Link></p>
            )
        });
        return (
            <div>
                <h2>List</h2>
                {movieListing}
            </div>
        );
    }
}

