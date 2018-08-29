//uses the `request` package which makes working with Node's native http methods easier
const request = require('request');
const dns = require('dns');
const fs = require('fs');
var parse = require('parse-domain');
var urls = new Array();
var start = new Date().getTime();


var i = 0;
var requestAsync = function(url) {
    return new Promise((resolve, reject) => {
        dns.resolve(url, function (err, address) 
        {
           
        //console.log(url, address)

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

var endTimer = function() {
    console.log('finished!')
    var end = new Date().getTime();
    console.log(end - start);
}

/* Works as of Node 7.6 */
var getParallel = async function() {
    //transform requests into Promises, await all
    try {
        var data = await Promise.all(urls.map(requestAsync))
        .then(console.log('in then working'));
        
        
    } catch (err) {
        console.error(err);
       
    }
   
}


                                                                                                                            12

// maybe I should create a nodejs package that will check various things
// contains a number, cointains more than 1 number etc like is-alphanumeric

// Remove duplicate items from an array
function removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}
// -----------// -----------// -----------// -----------// -----------// -----------

// Create a mongodb style objectID
const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))

// LineByLine reads through text files by line adding them into an array
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('/Users/me/Documents/SourceCode/dns-backend/dns-backend/auto.txt');
// -----------// -----------// -----------// -----------// -----------// -----------

// Check to see if there's a number in the domain
    function hasNumber(myString) {
        return /\d/.test(myString);
      }
// -----------// -----------// -----------// -----------// -----------// -----------
    
lr.on('error', function (err) {
	// 'err' contains error object
});



var hasdns = 0;
var nodns = 0;

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
//console.log("'" + line + "'");

// Take the raw line from the text file and parse it using the parse-domain module
var parsed = parse(line);

// Full domain will have both the full tld domain with the dot and extension added back onto the end
var fullTLD = parsed.domain + '.' + parsed.tld;

// show the console what we did
//console.log('Full TLD:' + fullTLD);

// Check to see if the domain has a number, if it does we don't add it to the array currently
// as there seems to be a lot of junk domains with numbers in them
    if (hasNumber(fullTLD))
    {

    } else  {

    urls.push(fullTLD);
    

    }

}); 


lr.on('end', function () {
	// All lines are read, file is closed now.
	// log to the console the number of domains
//console.log('finished! There are now: ' + domains.length + ' in the domains array ')
console.log('found: ' + urls.length);

getParallel();

//urls = removeDuplicateUsingSet(domains);
//console.log("There are " + hasdns + " domains with dns and " + nodns + " domains without");

//console.log('unique domains in array: ' + uniqueDomains.length);


// uniqueDomains.reverse();


/*
for( var i = 0; i < 98000; i++ ) {
   
   // getNextUrl();
   // instead, we'll add to que

   dns.lookup(uniqueDomains[i], function (err, address) 
   {
   console.log(uniqueDomains[i] + " : " + address)
   });

}
*/


});

