
let bigQuote = document.querySelector('.bigQuotes');

function newQuote(post) {

    const quotes = document.createElement("div");
                quotes.classList.add("quote-block");
                quotes.innerText = "Price " + post.MinPrice;
                bigQuote.appendChild(quotes);
    
    const depDate = document.createElement("div");
                depDate.classList.add("dep-date");
                depDate.innerText = "Departure Date " + post.OutboundLeg.DepartureDate;
                bigQuote.appendChild(depDate);
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
    let fromHolidayApi = ''

    //gets public holidays api
    fetch("https://public-holiday.p.rapidapi.com/2021/CA", {
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
        console.log(json.length);
        //regex match to userInput(year and month), search api for holidays
        //let regex = userInput;
        let regexp = new RegExp (userInput, 'gi');
        let str = regexp.exec(json[0].date); //matched!! and returns an object

        
        

        fromHolidayApi = (str.input);

        


        //skyscanner
        let testurl = 'https:skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/' + fromHolidayApi + '?inboundpartialdate=2020-02-01'

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
            //console.log(json)
            if (json) {
            json.Quotes.forEach(item => newQuote(item));
            }else{
                bigQuote.innerText = "no Results";
            }
        })

    .catch(err => {
        
	    console.log(err);
    });

    })
//end
    .catch(err => {
        console.log(err);
    });

    })


