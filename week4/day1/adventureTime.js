// ADVENTURE TIME CHALLENGE
// Using the API documentation see how you can fetch from the Adventure Time Quote API. 
// You will need to used DOM manipulation to display a random quote and character photo. 
// Each time you refresh the page a new quote should be displayed.
// Advanced: Have a button that, when clicked, shows a new random quote and character.
// Documentation URL: https://adventure-time-quote-api.glitch.me

const url = "https://adventure-time-quote-api.glitch.me/api/quotes";
const charPic = [finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
"tart toter" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
lady : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
lsp : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
"duke Of nuts" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
"princess bubblegum" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
"ice king" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
jake : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"

    
    ];



//fetch to get data
fetch(url)
.then(function(response){  //the json() will turn the data into an object
    return response.json(); //MUST return! no console log here. Return returns the data to the next .then
})
.then(function(json){
    var ourData = json;
    displayResults(ourData);

})
.catch(err => console.error({error:err}))




//grabbing a random url from array above
const randomPicUrl = charPic[Math.floor(Math.random() * charPic.length)];
console.log('this is my random url', randomPicUrl);




function displayResults(e){
    console.log('this is my display function');
    let changingQuote = document.getElementById("random-quote");
    let randomNumber = [Math.floor(Math.random() * e.length)]
    let otherRandomNumber = [Math.floor(Math.random() * e[randomNumber].quotes.length)];
    let quoteSelection = e[randomNumber].quotes[otherRandomNumber];
    console.log(quoteSelection);
    changingQuote.innerHTML = quoteSelection;

     let charImage = document.createElement('img');
     //PARENT.appendChild(CHILDELEMENT)
     charImage.src = randomPicUrl;
     div.appendChild(charImage);

}

//Still need to get image working!!

///INGEBORGS CODE BELOW

// // console.log('hey, my files are connnected!');
// ​
// // const section = document.querySelector("div");
// // const section = document.querySelector(".randomDiv");
// const section = document.getElementById("ranDOMdivId");
// // console.log(section);
// ​
// const charPic = {
//   finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
//   'tart toter' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
//   lady : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
//   marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
//   'lumpy space princess' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
//   lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
//   'duke of nuts' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
//   fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
//   'princess bubblegum' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
//   'ice king' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
//   bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
//   'jake the dog' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"
// };
// ​
// let url = 'https://adventure-time-quote-api.glitch.me/api/random';
// ​
// fetch(url)
//   .then(function(result){
//     return result.json()
//   })
//   .then(function(data){
//     console.log(data);
//     displayResults(data) //invoke a function that displays our results
//   })
//   .catch(err => console.error({error: err}))
// ​
// function displayResults(json){
//   let quote = json;
//   console.log(`QUOTE RESULT ==> ${quote}`);
// ​
//   let heading = document.createElement('h2');
//   let image = document.createElement('img');
// ​
//   //PARENTELEMENT.appendChild(CHILDELEMENT)
//   section.appendChild(image);
//   section.appendChild(heading);
// ​
//   heading.textContent = quote.split(":")[1];
  
//   let character = quote.split(":")[0].toLowerCase();
  
// ​
//   for(pic in charPic) {
//     console.log('character', character); //character is the character from the quote from the API;
//     console.log('pic', pic); //represents each character in our charPic object;
//     if(character === pic) {
//       image.src = charPic[pic]
//     }
//   }
// ​
//   heading.style.textAlign = 'center';
// ​
// if (character === "Finn"){
//   //   img.src = charPic.finn
//   // } else if (character === "Tart Toter"){
//   //   img.src = charPic['tart toter']
//   // } else if (character === "Lady") {
//   //   img.src = charPic.lady
//   // } else if (character === "Marceline"){
//   //   img.src = charPic.marceline
//   // } else if (character === "Lumpy Space Princess"){
//   //   img.src = charPic['lumpy space princess']
//   // } else if (character === "Lemongrab") {
//   //   img.src = charPic.lemongrab
//   // } else if (character === "Duke of Nuts") {
//   //   img.src = charPic['duke of nuts']
//   // } else if (character === "Fionna") {
//   //   img.src = charPic.fionna
//   // } else if (character === "Princess Bubblegum"){
//   //   img.src = charPic['princess bubblegum']
//   // } else if (character === "Ice King") {
//   //   img.src = charPic['ice king']
//   // } else if (character === "BMO"){
//   //   img.src = charPic.bmo
//   // } else if (character === "Jake the Dog"){
//   //   img.src = charPic['jake the dog']
//   // }





