import React, { Component } from 'react';

export default class editMovie extends Component {
    constructor(props) {
        super(props);
        this.state=
            {
                movieName:null,
                movieGenre:null,
                actors:[]
            }
    }


    componentDidMount() {
        this.getMovie()
    }

    getMovie = () =>
    {
        fetch("/get/"+this.props.id)
            // .then(data=>data.text())
            // .then(data=>console.log(data))
            .then(data => data.json())
            .then(conData =>{
                console.log(conData);
                this.setState({
                movieName:conData.movieName,
                movieGenre: conData.genre,
                actors: [conData.actors]
            })})

    };

    saveMovie = (e) =>
    {
        console.log(this.props.id);
        console.log(this.state.movieName);
        console.log(this.state.actors);
        var data= {
            id:this.props.id,
            movieName:this.state.movieName,
            genre: this.state.movieGenre
        };
        e.preventDefault();
        fetch("/update",
            {
                method: "PUT",
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
        console.log(e.target.value);
        this.setState({movieName:e.target.value})
    };
    setGenre =(e)=>
    {
        console.log(e.target.value);
        this.setState({movieGenre: e.target.value})
    };
    setActor =(e)=>
    {
        console.log(e.target.value);
        this.setState({actors: e.target.value})
    };
    setActress=(e)=>
    {
        console.log(e.target.value);
        this.setState({movieGenre: e.target.value})
    };
    setSActor=(e)=>
    {
        console.log(e.target.value);
        this.setState({movieGenre: e.target.value})
    };
    setSActress=(e)=>
    {
        console.log(e.target.value);
        this.setState({movieGenre: e.target.value})
    };

    render() {
        console.log(this.state.actors);
        return (
            <form id={"submitForm"} onSubmit={this.saveMovie}>
                <p>
                    <label htmlFor={"MovieName"}>Movie Name:</label>
                    <input value={this.state.movieName} id={"MovieName"} onChange={this.setName} type="text"/>
                </p>
                <p>
                    <label htmlFor={"MovieGenre"}>Movie Genre:</label>
                    <input value={this.state.movieGenre} id={"MovieGenre"} onChange={this.setGenre} type="text"/>
                </p>
                <p>
                    <label htmlFor={"MainActor"}>Movie Genre:</label>
                    <input value={this.state.actors.mainActor} id={"MainActor"} onChange={this.setGenre} type="text"/>
                </p>
                <p>
                    <label htmlFor={"MainActress"}>Movie Genre:</label>
                    <input value={this.state.actors.mainActress} id={"MainActress"} onChange={this.setGenre} type="text"/>
                </p>
                <p>
                    <label htmlFor={"supportingActor"}>Movie Genre:</label>
                    <input value={this.state.actors.supportingActor} id={"supportingActor"} onChange={this.setGenre} type="text"/>
                </p>
                <p>
                    <label htmlFor={"supportingActress"}>Movie Genre:</label>
                    <input value={this.state.actors.supportingActress} id={"supportingActress"} onChange={this.setGenre} type="text"/>
                </p>

                <button>Submit Movie</button>
            </form>
        );
    }
}