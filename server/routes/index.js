var express = require('express');
var router = express.Router();
var MovieCollection = require("../models/MovieSchema");

/* Gets all movies in the database */
router.get('/listing', function (req, res, next) {
    console.log("Getting server");
    MovieCollection.find((errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    })
});


// This will be for adding a new Movie to the DataBase
router.post('/add', function (req, res, next) {
    MovieCollection.create(req.body, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    })
});

// Gets the movie to be updated
router.get('/get/:id',(req,res)=>
{
    MovieCollection.findOne({_id:req.params.id},(errors,results)=>
    {
        if(errors) res.send(errors);
        else{console.log(results); res.send(results);}
    })
});

// Updates the movie gotten and reformatted
router.put("/update",(req,res)=>
{
    console.log(req.body.id);
    MovieCollection.updateOne({_id:req.body.id},req.body,(errors,results)=>
    {
        if(errors) res.send(errors);
        else{ console.log(results); res.send(results);}
    })
});

// This is a one time use for adding data to the database for use.
// router.get("/DummyData", (req, res) => {
//     var data = [
//         {
//             movieName: "Boy and the Beast",
//             genre: "Fantasy",
//             actors: {
//                 mainActor: '',
//                 mainActress:'' ,
//                 supportingActor: '',
//                 supportingActress:''
//             }
//         },
//         {
//             movieName: "Shin Godzilla",
//             genre: "Monster",
//             actors: {
//                 mainActor: "",
//                 mainActress: '',
//                 supportingActor: '',
//                 supportingActress: ''
//             }
//         },
//         {
//             movieName: "Bad Movie",
//             genre: "Action",
//             actors: {
//                 mainActor: '',
//                 mainActress: '',
//                 supportingActor: '',
//                 supportingActress: ''
//             }
//         },
//     ];
//     MovieCollection.create(data,(errors,results)=>
//     {
//         if(errors) res.send(errors);
//         else res.send(results);
//     })
// });

module.exports = router;