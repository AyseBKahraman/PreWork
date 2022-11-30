
const USSHelloWorld = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}

const alien = {
    hull: (Math.floor(Math.random() * (6 - 3)) + 3),
    
    firepower: (Math.floor(Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6) + .6).toFixed(2)
    
}
console.log(USSHelloWorld);
console.log(alien);

let aliens = [ ];
const newAlien = () => {
    const newalien = {

    }
    newalien.hull = (Math.floor(Math.random() * (6 - 3)) + 3),
    
    newalien.firepower = (Math.floor(Math.random() * (4 - 2)) + 2),
    newalien.accuracy = (Math.random() * (.8 - .6) + .6).toFixed(2)
    
    aliens.push(newalien) 
}
console.log(aliens);
newAlien()
console.log(aliens);
newAlien()
console.log(aliens);
newAlien()
console.log(aliens);
newAlien()
console.log(aliens);
newAlien()
console.log(aliens);
newAlien()
console.log(aliens);
let buttonHit = document.querySelector('button')
buttonHit.addEventListener('click', attack)


function attack() {
    if (USSHelloWorld.hull < 0 || aliens[0].hull <0){
    //    return document.querySelector('button').disabled = true;
    aliens.shift()
    let enemy = document.querySelector(".alien1")
    enemy.remove()
    } 
    if (USSHelloWorld.accuracy > aliens[0].accuracy){
        USSHelloWorld.hull -=aliens[0].firepower;
        aliens[0].hull -= USSHelloWorld.firepower;  
        console.log('Direct hit!');
        
    
    } else if(USSHelloWorld.accuracy = aliens[0].accuracy){ 
        USSHelloWorld.hull -=aliens[0].firepower;
        aliens[0].hull -= USSHelloWorld.firepower;        
        console.log("Your both have damage")
       
     } else{ 
        USSHelloWorld.hull -=aliens[0].firepower;
        aliens[0].hull -= USSHelloWorld.firepower;  
        console.log('Sorry! You missed!')}
    
        console.log(USSHelloWorld);
        console.log(aliens[0]);
    
    
}


