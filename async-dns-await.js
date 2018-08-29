\//uses the `request` package which makes working with Node's native http methods easier
const request = require('request');
const dns = require('dns');

const urls = [
    'salonmonster.com',
    'onkea.com',
    'cbc.ca',
    'foo.com'
];


var requestAsync = function(url) {
    return new Promise((resolve, reject) => {
        dns.resolve(url, function (err, address) 
        {
        console.log(url, address)
        });

        /*
        var req = request(url, (err, response, body) => {
            if (err) return reject(err, response, body);
            //resolve(JSON.parse(body));
            console.log(body);
        });
        */

    });
};



/* Works as of Node 7.6 */
var getParallel = async function() {
    //transform requests into Promises, await all
    try {
        var data = await Promise.all(urls.map(requestAsync));
    } catch (err) {
        console.error(err);
    }
    console.log('await finished: ' + data);
}

getParallel();