//apiRoutes.js is for data. It deteremine what user can see and post. 
var friends = require ("../data/friends.js");

module.exports = function(app){   
//API route displaying all friends. 여기서 아직 friends는 define이 안되어있다. 
app.get("/api/friends", function(req, res){
  res.json(friends)
});


// user answers question, create new friend.
app.post("/api/friends", function(req, res){
    friends.push(req.body);
    res.json(true);
})

};