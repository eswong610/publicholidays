//  //fetch quotes from api
//  function getQuotes (outboundDate, inboundDate) {
    
//     let urlBase = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0"
//     let urlCountry  = "/US" ;
//     let urlCurrency= "/USD";
//     let urlLocale = "/en-US";
//     let urlOrigin = "/SFO-sky";
//     let urlDestination = "/LAX-sky"
//     let outboundDate = "/2020-01-01" //outbounddate
//     let inboundDate = "?inboundpartialdate=2020-02-01" //inbound Date

    

//     let fullURL = urlBase + urlCountry + urlCurrency + urlLocale + urlOrigin + urlDestination + outboundDate + inboundDate;
//     //"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2020-01-01?inboundpartialdate=2020-02-01"

//     //let testurl = 'https:skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/' + 2020-01-01 + '?inboundpartialdate=2020-02-01'

//     fetch(fullURL, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "865169f4edmshe7ec10d9cf48163p14e90fjsn2b9b51c02cf1"
// 	}
//     })
//     .then(response => {
// 	    return response.json();
//     })

//     .then(json=> {
//         //console.log(json)
//         json.Quotes.forEach(item => newQuote(item));
//     })

//     .catch(err => {
// 	    console.log(err);
//     });
// }

import {newQuote, locationNode} from './newQuoteNode.js'

export function placeID (country, city) {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/" + country + "/GBP/en-US/?query=" + city, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "865169f4edmshe7ec10d9cf48163p14e90fjsn2b9b51c02cf1"
        }
    })
    .then(response => {
        return response.json();
       
    })
    .then(json=> {
        console.log(json["Places"][1])
        json['Places'].forEach(item => locationNode(item));
    })
    .catch(err => {
        console.log(err);
    });
}






export function fromSkyscanner(outDate, oriCountry, destCountry) {
    let testurl = 'https:skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/CAD/en-US/'+ oriCountry +'/' + destCountry + '/' + outDate + '?inboundpartialdate=2020-02-01'

    fetch(testurl, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "865169f4edmshe7ec10d9cf48163p14e90fjsn2b9b51c02cf1"
    }
    })
    .then(response => {
        return response.json();
    })

    .then(json=> {
        console.log(json)
        
        json.Quotes.forEach(item => newQuote(item));
        
    })

.catch(err => {
    console.log(err);
});
}

