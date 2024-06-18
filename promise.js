// Number Facts Exercises
let url = "http://numbersapi.com/";
let favNum = 3;
//1.
$.getJSON(`${url}${favNum}?json`).then(data => {
    console.log(data);
});
//2.
let multiNums = [3, 7, 12];
$.getJSON(`${url}${multiNums}?json`).then(data => {
    for (let num in data) {
        console.log(data[num]);
    }
});
//3.
let favNumber = 7;
favNumFacts = []
for(let i = 0; i < 4; i++){
    $.getJSON(`${url}${favNumber}?json`).then(data => {
        favNumFacts.push(data.text);
        if (favNumFacts.length===4){
            favNumFacts.forEach(fact => {
                $('#fav-facts').append(`<li>${fact}</li>`);
            });
        }
    }).catch(error =>{
        console.error('An error occurred', error);
    });
}