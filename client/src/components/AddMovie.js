import React, { Component } from 'react';

export default class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state=
            {
                movieName:'',
                movieGenre:'',
            }
    }

    saveMovie = (e) =>
    {
        var data= {
            movieName:this.state.movieName,
            genre: this.state.movieGenre
        };
        e.preventDefault();
        fetch("/add",
            {
                method: "POST",
                headers:
                    {
                        "Accept":"appliction/json",
                        "Content-type":"application/json"
                    },
                body: JSON.stringify(data)
            })
    };

    setName =(e)=>
    {
        this.setState({movieName:e.target.value})
    };



    setGenre =(e)=>
    {
        this.setState({movieGenre: e.target.value})
    };

    render() {
        return (
            <form id={"submitForm"} onSubmit={this.saveMovie}>
                <p>
                <label htmlFor={"MovieName"}>Movie Name:</label>
                <input id={"MovieName"} name={"MovieName"} onChange={this.setName} type="text"/>
                </p>
                <p>
                <label htmlFor={"MovieGenre"}>Movie Genre:</label>
                <input id={"MovieGenre"} name={"MovieName"} onChange={this.setGenre} type="text"/>
                </p>
                <button>Submit Movie</button>
            </form>
        );
    }
}

