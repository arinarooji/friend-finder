//LOAD
//Link route to the friends data source
var friendData = require("../data/friends");

//ROUTES
module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        // Server will respond to requests and push validated users to friendData[]
        // req.body is available since we're using the body-parser middleware
        friendData.push(req.body);
        res.json(req.body);
    });
}