import {fromSkyscanner} from './fetch.js'
import {placeID} from './fetch.js'


//skyscanner country places api

let countryform = document.querySelector("#country-form");
countryform.addEventListener('submit', (event)=>{
    event.preventDefault();
    let outCity = document.querySelector('#outbound-city-form-input').value;
    let outCountry = document.querySelector('#country-form select#outbound-country-select').value;
    let inboundCity = document.querySelector('#inbound-city-form-input').value;
    let inboundCountry = document.querySelector('#country-form select#inbound-country-select').value;
    
    //placeID(inboundCountry, inboundCity)
    placeID(outCountry, outCity);
    placeID(inboundCountry, inboundCity);
})




//skyscanner quotes cache api 
const monToNum = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August" : "08",
    "September": '09',
    "October": '10',
    "November": '11',
    "December": '12',
}

let form = document.querySelector("#monthform");
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let yearInput = document.querySelector('#yearInput').value;
    let monthInput = document.querySelector('#monthform select').value;
    let oriCountryCode = document.querySelector('#origin-country-input').value;
    let destCountryCode = document.querySelector('#dest-country-input').value
    let userInput = yearInput + '-' + monToNum[monthInput]; // eg 2019-01

    //gets public holidays api
    fetch("https://public-holiday.p.rapidapi.com/2020/CA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "public-holiday.p.rapidapi.com",
		"x-rapidapi-key": "865169f4edmshe7ec10d9cf48163p14e90fjsn2b9b51c02cf1"
	    }
    })
    .then(response => {
       return (response.json());
       
    })
    .then((json)=> {
        //regex match to userInput(year and month), search api for holidays
        // let regexp = new RegExp (userInput, 'gi');
        // let str = regexp.exec(json[0].date); //matched!! and returns an object
        
        let regexp = new RegExp (userInput, 'gi');
        let datesObj = {} //event: date 

        for (let i=0; i<json.length; i++){
            
            let str = regexp.exec(json[i].date);
            if (str) {
                datesObj[json[i].name] = str.input; //str.input = "2020-01-01"
            }
        }

    for (let date in datesObj) {
        let numDate = (datesObj[date]);
        //let testCountry = 'ORD-sky'
        fromSkyscanner(numDate, oriCountryCode, destCountryCode);
        
    }

    })
//end
    .catch(err => {
        console.log(err);
    });

    })


