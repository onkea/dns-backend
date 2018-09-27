const dns = require('dns');
const fs = require('fs');
const parse = require('parse-domain');
const csv = require('fast-csv');
var domains = new Array();
var LineByLineReader = require('line-by-line');

function createFile(outputFilename) {
    var outputFilename = 'io-domains-' + Math.floor(Date.now() / 1000) + '.csv';
    var csvStream = csv.createWriteStream({headers: true}),
    writableStream = fs.createWriteStream("/Users/me/Documents/" + outputFilename);
    csvStream.pipe(writableStream);
    for(var key in dnsArray)
    {
    var value = dnsArray[key];
    var value2 = dnsArray[key]['address'];
    csvStream.write({domain: value.domain, address: value2});
    //console.log('dom: ' + value.domain)
    //console.log(value2)
  // iplist = value2.split;
    }


    csvStream.end();
}

/*
writableStream.on( function(){
  //console.log("DONE! in array: ");
});
*/

lr = new LineByLineReader('auto.txt');
console.time('test');



// Remove duplicate items from an array  -----------// -----------// ----------- // 
function removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}
// -----------// -----------// -----------// -----------// -----------// -----------





dnsArray=[];
dns.setServers([
    '8.8.8.8',
    '8.8.4.4',
 ]);


var requestAsync = function(domain) {
    return new Promise((resolve, reject) => {
        dns.resolve(domain, function (err, address) 
        {
            //console.log('!IMPORTANT!');
            //console.log(domain)
           // console.log(address);
            dnsArray.push({domain: domain, address: address});

            /*
            dnsArray = [
                {
                    
                    domain: domain,
                    ip1: '1.1.1.1',
                    ip2: '2.2.2.2',
                    ip3: '3.3.3.3'
                }

            ];
            */
            //console.log(domain);
            //console.log
            return resolve();
          
        });

        
    });
};



var writeResults = function() {
    
    console.log('There are: ' + dnsArray.length + ' domains in the array.')
    
    createFile();

    /* EXPLODE ARRAY
   dnsArray.map(function (val) {
        console.log(); console.log(val);  +val + 1; 
    });
*/

}

var getParallel = async function() {
    //transform requests into Promises, await all

        var data = await Promise.all(
                uniqueDomains.map(item => requestAsync(item)) 
            )
            .then(result => writeResults(result)
        )
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
