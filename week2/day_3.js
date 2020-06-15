// PALINDROME CHALLENGE
// Create a function that accepts a string as a parameter
// within the function write a conditional that checks if the word is the same forwards and backwards
// If it is the same both ways console.log 'The string is a palindrome'
// If it is not console.log 'It is not a palindrome'

function palindrome(string){
   
    var splitString = string.split("");
    
    reverseArray = splitString.reverse();
  
    reverseString = reverseArray.join("");
    
    if (string === reverseString){
        console.log("The string is a palindrome");
    } else {
        console.log("It is not a palindrome");
    }
}
palindrome("pop");
palindrome("chocolate");
palindrome("moron");



//another challenge
let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
      season1: {
        numberOfEpisodes: 5,
        episodeInfo: [
          { episode: 1, episodeName: "Pilot" },
          { episode: 2, episodeName: "Flying" },
          { episode: 3, episodeName: "Tahani Al-Jamil" },
          { episode: 4, episodeName: "Jason Mendoza" },
          { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis" }
        ]
      },
      season2: {
        numberOfEpisodes: 6,
        episodeInfo: [
          { episode: 1, episodeName: "Everything is Great!" },
          { episode: 2, episodeName: "Dance Dance Resolution" },
          { episode: 3, episodeName: "Team Cockroach" },
          { episode: 4, episodeName: "Existential Crisis" },
          { episode: 5, episodeName: "The Trolley Problem" },
          { episode: 6, episodeName: "Janet and Michael" }
        ]
      },
      season3: {
        numberOfEpisodes: 5,
        episodeInfo: [
          { episode: 1, episodeName: "Everything Is Bonzer!" },
          { episode: 2, episodeName: "The Brainy Bunch" },
          { episode: 3, episodeName: "The Snowplow" },
          { episode: 4, episodeName: "Jeremy Bearimy" },
          { episode: 5, episodeName: "The Ballad of Donkey Doug" }
        ]
      }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
}

 console.log(netflix.description);   //console.log the description
 console.log(netflix.seasonInfo.season2.episodeInfo[2]);   //console.log episode 3 of season 2
 for (let i = 0; i < netflix.seasonInfo.season3.episodeInfo.length; i++){
 console.log(netflix.seasonInfo.season3.episodeInfo[i].episodeName)};
   //console.log each episode name in season 3 using only one console.log