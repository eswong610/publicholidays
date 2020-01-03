let bigQuoteContainer = document.querySelector('.bigQuotes-container');

export function newQuote(post) {

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

let bigAirportContainer = document.querySelector('.country-returns-container')

export function locationNode(element) {
    const airportName = document.createElement('div');
        airportName.classList.add('airport-name');
        bigAirportContainer.appendChild(airportName);

    const airportNameTitle = document.createElement('h3');
        airportNameTitle.innerText = "Airport Name";
        airportName.appendChild(airportNameTitle);

    const airportNameText= document.createElement('p');
        airportNameText.innerText = element.PlaceName
        airportName.appendChild(airportNameText);
    
    const airportCode = document.createElement('div');
        airportCode.classList.add('airport-code');
        bigAirportContainer.appendChild(airportCode);
    
    const airportCodeText = document.createElement('p');
        airportCodeText.innerText=element.PlaceId;
        airportCode.appendChild(airportCodeText)
}