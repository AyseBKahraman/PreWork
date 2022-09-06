const taboo = {
    words:
    [
        word1 = {
            CorrectWord : "SHIRT",
            ClueWords : ["BUTTON", "WEAR", "TEE","TOP","BLOUSE"]
        }, 

        word2 = {
            CorrectWord : "SUPERMAN",
            ClueWords : ["HERO", "MOVIE", "FLIES", "KRYPTONITE", "UNDERWEAR"]
        },
        word3 = {
            CorrectWord : "DISCOVER",
            ClueWords : ["LOOK", "SEE", "FIND", "COLUMBUS", "EXPLORER"]
        }
    ]
}

let wordNum = 0
const randomWords = (taboo) => {
    const keys = Object.keys(taboo.words);
    wordNum = keys[Math.floor(Math.random()* keys.length)];
    var custom = taboo.words[wordNum].ClueWords.join('<br>');
   // console.log(custom)
    return custom;
    //return taboo.words[wordNum].ClueWords;
    
}
console.log(randomWords(taboo))
//console.log("your clue words:" + taboo.words[wordNum].ClueWords )
document.getElementById("clue").innerHTML = randomWords(taboo);

function startTimer(){
    var counter = 60;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }

function start(){
    document.getElementById("count").style="color:green;";
    startTimer();
};
 
