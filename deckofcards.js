//Deck of Cards Exercises
baseURL = 'https://deckofcardsapi.com/api/deck/';

//1.
$.getJSON(`${baseURL}/new/draw`).then(data => {
    console.log(`You've drawn the ${data.cards[0].value} of ${data.cards[0].suit}`);
});
//2.
let firstCard = '';
let deckID = '';

$.getJSON(`${baseURL}/new/draw/?count=1`). then(data => {
    let { value, suit } = data.cards[0];
    firstCard = `the ${value} of ${suit}`;
    deckID = data.deck_id;
    return $.getJSON(`${baseURL}/${deckID}/draw/?count=1`);
}).then(data => {
    let { value, suit } = data.cards[0];
    console.log(`Your first card is ${firstCard}`);
    console.log(`Your second card is the ${value} of ${suit}`);
}).catch(error => {
    console.error('An error occurred:', error);
});
  

//3.

