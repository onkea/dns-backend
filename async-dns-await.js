const dns = require('dns');

urls = ["onkea.com", "yahoo.com", "google.com", "ask.com", "dsfsdlfjkljrgdfjslg.ca"];
dnsArray = [];

var requestAsync = function(url) {
    return new Promise((resolve, reject) => {
        dns.resolve(url, function (err, address) 
        {
        dnsArray.push(url);
            console.log(url, address)
            return resolve();
        });
    });
};

var getParallel = async function() {
    //transform requests into Promises, await all

        var data = await Promise.all(
                urls.map(item => requestAsync(item))
                
            )
            .then(result => console.log('done!!!!!' + dnsArray.length))
           


};



// always complete function even on errors, there will
// always be some dns errors...






getParallel();

