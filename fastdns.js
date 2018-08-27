const fs = require('fs');
var dns = require('dns');
var parse = require('parse-domain');
var domains = new Array();
var currentUrl = 0;
var totalLoop = 500;
var totalUrl = 100000;
//var http = require('http');
//var cheerio = require('cheerio');


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
    lr = new LineByLineReader('auto.txt');
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

    domains.push(fullTLD);
    dns.lookup(fullTLD, function (err, address) 
    {
    

        if(typeof(address)=='undefined')
        {
            console.log(fullTLD + " : " + address + ' too bad :(')
            nodns++;
        }
        else
        {
            console.log(fullTLD + " : " + address + 'woohoo!!')
            hasdns++;
	}
    });
    }

}); 


lr.on('end', function () {
	// All lines are read, file is closed now.
	// log to the console the number of domains
//console.log('finished! There are now: ' + domains.length + ' in the domains array ')

uniqueDomains = removeDuplicateUsingSet(domains);
console.log("There are " + hasdns + " domains with dns and " + nodns + " domains without");

//console.log('unique domains in array: ' + uniqueDomains.length);


var totalUrl = uniqueDomains.length;
//console.log(uniqueDomains);
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




// Possibly all shit domains have nubmers in them?
// If needed, skip all domains with numbers
// or at least starts with number? contains more than one number?


// what's a good way to find all victoria doctors etc
// as victoriaflorists and physio, build niche directory and fork referer traffic



