let twitterKeys = require("./keys.js")
const Twitter = require('twitter');

let arg0 = process.argv[0];
let arg1 = process.argv[1];
let arg2 = process.argv[2];
let arg3 = process.argv[3];

// capture user args and call specific function

// look into switch statement
if (arg2 === "my-tweets") {
    getTweets();

} else if (arg2 === "spotify-this-song") {
    getSongs(arg3);

} else if (arg2 === "movie-this") {
    getMovies(arg3);

} else if (arg2 === "do-what-it-says") {
    doSomething();
} else {
    console.log("not a valid input \n\n valid commands are: \n 1. node liri.js my-tweets \n 2. node liri.js spotify-this-song");
}


function getTweets() {
    let client = new Twitter(twitterKeys);

    var params = {
        screen_name: '@BarackObama'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            tweets.forEach((val, index) => {
                console.log(` Tweet #${index + 1}) ${val.text}\n`);
            });
        }
        if (error) {
            console.log(error);

        }
    });

}

function getSongs(song) {
    console.log("song function");


}

function getMovies() {
    console.log("movie function");


}

function doSomething() {
    console.log("do what it says function");


}