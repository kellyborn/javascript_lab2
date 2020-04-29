// Declare an arrow function named randomDamage that has no parameters and returns a
// random integer between 1 and 10.

const randomDamage = _ => Math.floor((Math.random() * 10) + 1);
//console.log(randomDamage());

// Declare an arrow function named chooseOption that has two parameters named opt1
// and opt2. chooseOption does two things:
// ○ Declares and initializes a variable named randNum to either a 0 or 1, randomly.
// ○ Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary
// operator)

//Ternary Operator
//variable_name = (condition) ? value_if_true : value_if false;

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;
}
//console.log(chooseOption("yes", "no"));

// Declare a function expression named attackPlayer that has one parameter named
// health which returns a number equal to health minus the product of the
// randomDamage function.
const attackPlayer = function (health) {
    return health - randomDamage();
}
//console.log(attackPlayer(7));

// Declare an arrow function named logHealth that has two parameters named player
// and health which has a console.log method to state the following message: “player
// health: health”.

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}
//console.log(logHealth("Kelly", 100));

// // Declare an arrow function named logDeath that has two parameters named winner
// and loser which has a console.log method to state the following message: “winner
// defeated loser”

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}
//console.log(logDeath("Kelly", "Mike"));

// //Declare an arrow function named isDead that has one parameter named health
// which returns a boolean value of true or false based on the following condition: health
// <= 0;

// const isDead = (health) => {
//     if (health <= 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isDead(120));

const isDead = (health) => {
    return (health <= 0 ? true : false);
}


function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);

            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        }
        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);

            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }

    }

}
fight("Kelly", "Mike", 100, 100);
