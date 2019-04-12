var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var MovieSchema = new Schema(
    {
        movieName:String,
        genre:String,
        actors:{
            mainActor:String,
            mainActress:String,
            supportingActor:String,
            supportingActress:String
        }
    }
);

module.exports = mongoose.model("Movie",MovieSchema);