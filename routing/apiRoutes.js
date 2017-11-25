//LOAD
//Link route to the friends data source
var friendData = require("../data/friends");

//ROUTES
module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });
}