const dns = require('dns');
const fs = require('fs');
const parse = require('parse-domain');
var domains = new Array();
var LineByLineReader = require('line-by-line');
lr = new LineByLineReader('auto.txt');

dnsArray = [];

// Remove duplicate items from an array  -----------// -----------// ----------- // 
function removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}
// -----------// -----------// -----------// -----------// -----------// -----------


var requestAsync = function(domain) {
    return new Promise((resolve, reject) => {
        dns.resolve(domain, function (err, address) 
        {
        dnsArray.push(domain);
            console.log(domain, address)
            return resolve();
        });
    });
};

var getParallel = async function() {
    //transform requests into Promises, await all

        var data = await Promise.all(
                domains.map(item => requestAsync(item))
                
            )
            .then(result => console.log('done!!!!!' + dnsArray.length))
};

lr.on('line', function (line) {
var parsed = parse(line);
var fullTLD = parsed.domain + '.' + parsed.tld;
    domains.push(fullTLD);
}); 

lr.on('end', function () {

uniqueDomains = removeDuplicateUsingSet(domains);
//console.log("There are " + hasdns + " domains with dns and " + nodns + " domains without");

var totalUrls = uniqueDomains.length;
console.log(totalUrls);
// uniqueDomains.reverse();
getParallel();

});

lr.on('error', function (err) {
	// 'err' contains error object
});