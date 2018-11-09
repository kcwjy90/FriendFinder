//htmlroutes.js helps direct the user. 
//when user clicks, router knows what pg to deliver

//require path
var path = require("path");

// with this, other files can access this function
module.exports = function (app) {

    //route that takes to the survey page. at 8080/survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
    });

    //route for default home page. at localhost 8080
    // with .use, if we don't define what follows the localhost, it automatically sends to home.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    });


}