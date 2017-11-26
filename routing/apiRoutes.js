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
        var newUser    = req.body;
        var friendRank = [];

        //Compare each friend's individual scores with newUser's
        friendData.forEach( friend => {
            //Reference a new totalDifference for each potential friend
            var totalDifference = 0;
            //Iterate through the scores, increment totalDifference by the absolute value of the newUser score subtracted from the friend score
            for(var i = 0; i < friend['scores[]'].length; i++) {
                totalDifference += (Math.abs(parseInt(friend['scores[]'][i]) - parseInt(newUser['scores[]'][i])));
            }
            //Push the total difference to the friendRank array, which will contain the commonality rank of all possible friends
            friendRank.push(totalDifference);
        })

        //Find the highest rank (lowest difference value) and the index of the highest rank (which will be the index of the most ideal friend)
        var highestRank      = Math.min(...friendRank);
        var highestRankIndex = friendRank.indexOf(highestRank);

        //Reference the topFriend using the highestRankIndex
        var topFriend = friendData[highestRankIndex];
        //Push newUser to friendData[]
        friendData.push(newUser);

        res.send({friend: topFriend, rank: highestRank});
    });
}