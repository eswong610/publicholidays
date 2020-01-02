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