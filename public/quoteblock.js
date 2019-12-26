function toMakeNewBlock(post) {

    const quotes = document.createElement("div");
                quotes.classList.add("quote-block");
                quotes.innerText = "Price " + post.MinPrice;
                bigQuote.appendChild(quotes);
    
    const depDate = document.createElement("div");
                depDate.classList.add("dep-date");
                depDate.innerText = "Departure Date " + post.OutboundLeg.DepartureDate;
                bigQuote.appendChild(depDate);
    }

module.exports = toMakeNewBlock;