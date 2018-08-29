//uses the `request` package which makes working with Node's native http methods easier
const request = require('request');

var requestAsync = function(url) {
    return new Promise((resolve, reject) => {
        var req = request(url, (err, response, body) => {
            if (err) return reject(err, response, body);
            //resolve(JSON.parse(body));
            console.log(body);
        });
    });
};

const urls = [
    'http://yahoo.com',
    'http://google.com',
    'http://xet.me'
];

/* Works as of Node 7.6 */
var getParallel = async function() {
    //transform requests into Promises, await all
    try {
        var data = await Promise.all(urls.map(requestAsync));
    } catch (err) {
        console.error(err);
    }
    console.log(data);
}

getParallel();