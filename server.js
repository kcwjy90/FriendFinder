//Dependencies. Required for Server.js
var bodyParser = require('body-parser');
var express = require("express");
var path = require("path"); //built in node itself. 

//Setting up Express App
var app = express();
var PORT = process.env.PORT || 8070;

                                // If extended is false, you can not post "nested object"
                                //person[name] = 'cw'
                                // Nested Object = { person: { name: cw } }

// //Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

//makes the server listen
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});


//include html file in the server. with "app", we are using express defined above
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

