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
        },
        word4  = {
            CorrectWord : "LIME",
            ClueWords : ["SEEDS", "JUICE", "GREEN", "YELLOW", "FRUIT"]
        },
        word5  = {
            CorrectWord : "CHILDREN",
            ClueWords : ["KIDS", "LITTLE", "PEOPLE", "YOUNG", "YOUTH"]
        },
        word6  = {
            CorrectWord : "TIME",
            ClueWords : ["WATCH", "CLOCK", "NOON", "MIDNIGHT", "STOP"]
        },
        word7  = {
            CorrectWord : "GOOFY",
            ClueWords : ["MICKEYMOUSE", "DONALDDUCK", "DISNEY", "CHARACTER", "DOG"]
        },
        word8  = {
            CorrectWord : "BILLIONARE",
            ClueWords : ["BILL GATES", "MONEY", "CASH", "WARREN BUFFETT", "LOOT"]
        },
        word9  = {
            CorrectWord : "MORTGAGE",
            ClueWords : ["OWN", "LOAN", "DEBT", "HOME", "RENT"]
        },
        word10  = {
            CorrectWord : "BADGE",
            ClueWords : ["COPS", "LAW", "RULES", "TICKET", "POLICE"]
        },
        word11  = {
            CorrectWord : "SAN FRANCISCO",
            ClueWords : ["CITY", "GOLDEN GATE", "BRIDGE", "BAY", "ALCATRAZ", "CALIFORNIA"]
        },
        word12 = {
            CorrectWord : "SCARY MOVIE",
            ClueWords : ["FRIGHT", "FUNNY", "COMEDY", "SEQUEL", "MOCK"]
        },
        word13  = {
            CorrectWord : "ORANGE JUICE",
            ClueWords : ["APPLE", "DRINK", "VITAMINC", "BREAKFAST", "PULP"]
        },
        word14  = {
            CorrectWord : "GRANDSON",
            ClueWords : ["GENERATION", "KIDS", "MOM", "CHILDREN", "PARENT"]
        },
        word15  = {
            CorrectWord : "GOVERN",
            ClueWords : ["RULE", "ESTABLISH", "WATCH", "PRESIDE", "DICTATE"]
        },
        word16  = {
            CorrectWord : "PRESCRIPTION",
            ClueWords : ["MEDICINE", "PHARMACY", "DOCTOR", "CVS", "REFILL"]
        },
        word17  = {
            CorrectWord : "COMPUTER",
            ClueWords : ["IBM", "DESKTOP", "LAPTOP", "INTERNET", "APPLE"]
        },
        word18  = {
            CorrectWord : "PIZZA",
            ClueWords : ["HUT", "PIE", "PEPPERONI", "TOPPING", "DEEP DISH"]
        },
        word19  = {
            CorrectWord : "KOALA BEAR",
            ClueWords : ["AUSTRALIA", "ANIMALS", "WILD", "TREE", "CLIMB"]
        },
        word20  = {
            CorrectWord : "QUIZNOS",
            ClueWords : ["SANDWICH", "SHOP", "FOOD", "RESTAURANT", "SUBWAY"]
        },
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
var timeCounter = 0;
function startTimer() {
    var counter = 61;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
            // disable the play button  while timer counting down
            document.getElementById("playbtn").disabled = true;
        }
        if (counter === -1) {
            demo.style.visibility = 'visible';
            text = "Sorry, out of time! Next Player!"

            document.getElementById("demo").innerHTML = text;
       
            // disable button:
            document.getElementById("check").disabled = true; 
            
            document.getElementById("playbtn").disabled = false;

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

