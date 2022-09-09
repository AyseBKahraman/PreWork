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
    return custom;    
}
document.getElementById("clue").innerHTML = randomWords(taboo);

function newRandom() {
    document.getElementById("clue").innerHTML = randomWords(taboo);
}
let player1 = 0;
let player2 = 0;

var text = " "
function validateWord() {
    let x = document.getElementById("check").value;
    let inputText= x.toUpperCase();
    // let text;
   // console.log(counter+"counter123e2")
    demo.style.visibility = 'visible';
    if (inputText == taboo.words[wordNum].CorrectWord){
        text = "CORRECT!"
        if (timeCounter % 2 ==!0 ){
            player1 = player1 + 1
        }else{
            player2 = player2 + 1
        }   
        // Show me a new word
        document.getElementById("clue").innerHTML = randomWords(taboo);        
        span = document.getElementById("countplayer1");
        span.innerHTML = player1;
        span = document.getElementById("countplayer2");
        span.innerHTML = player2;

        // Clear the input box
        document.getElementById("check").value = "";
    }else if(inputText !== taboo.words[wordNum].CorrectWord) {
        text = "INCORRECT!"

        // Clear the input box
        document.getElementById("check").value = "";
    }
    document.getElementById("demo").innerHTML = text;
    setTimeout(() => {
        const demo = document.getElementById('demo');
  
        demo.style.visibility = 'hidden';
    }, 1000); // time in milliseconds

}
var input = document.getElementById("check");
input.addEventListener("keypress", function(validateWord) {
    if(validateWord.key === "Enter"){
        validateWord.preventDefault();
    document.getElementById("btn").click();
    }
});
var inner =0 ;
var timeCounter = 0;
function startTimer() {
    var counter = 5;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === -1) {
            demo.style.visibility = 'visible';
            text = "Sorry, out of time! Next Player!"

            document.getElementById("demo").innerHTML = text;
       
            // disable button:
            document.getElementById("check").disabled = true;  

            if(timeCounter === 4){
                win();
            }
        }
    }, 1000);
    timeCounter++;   
};
function start() {
    document.getElementById("count").style="color:green;";
    startTimer();
};

function inputbox() {
    document.getElementById("check").disabled = false;
    demo.style.visibility = 'hidden';
}
function win() {
    if(player1 > player2){
        demo.style.visibility = 'visible';
        text = "player1 won!"
        document.getElementById("demo").innerHTML = text;
    }else if(player1 == player2){
        demo.style.visibility = 'visible';
        text = "Draw!"
        document.getElementById("demo").innerHTML = text;
    }else{
        demo.style.visibility = 'visible';
        text = "Player2 won!"
        document.getElementById("demo").innerHTML = text;
    }
  
}

