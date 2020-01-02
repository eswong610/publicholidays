
let bigQuoteContainer = document.querySelector('.bigQuotes-container');

function newQuote(post) {

    const bigQuotes = document.createElement('div');
    bigQuotes.classList.add('bigQuotes');
    bigQuoteContainer.appendChild(bigQuotes);

const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-destination-container');
    bigQuotes.appendChild(headerContainer);

const header = document.createElement('p');
    header.classList.add('header');
    header.innerText = "Price: $" + post.MinPrice;
    headerContainer.appendChild(header);


const datesContainer = document.createElement('div');
    datesContainer.classList.add('dates-container');
    bigQuotes.appendChild(datesContainer);

const departureDate = document.createElement('div');
    departureDate.classList.add('departure-date');
    datesContainer.appendChild(departureDate);

const departureDateText= document.createElement('p');
    departureDateText.innerText = "Departure: " + post.OutboundLeg.DepartureDate;
    departureDate.appendChild(departureDateText);


    }


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

    let userInput = yearInput + '-' + monToNum[monthInput]; // eg 2019-01
    let fromHolidayApi = '2020-01-01'

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

        
        for (i=0; i<json.length; i++){
            let str = regexp.exec(json[i].date);
            if (str) {
                datesObj[json[i].name] = str.input; //str.input = "2020-01-01"
            }
        }

        //loop datesObj to to fill in holiday api
        
        

       

        //skyscanner

        function fromSkyscanner(outDate) {
        let testurl = 'https:skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/' + outDate + '?inboundpartialdate=2020-02-01'

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

    for (let date in datesObj) {
        let numDate = (datesObj[date]);
        fromSkyscanner(numDate);
        
    }

    })
//end
    .catch(err => {
        console.log(err);
    });

    })


