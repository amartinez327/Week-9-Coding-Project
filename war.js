 class Card{// This class defines the card class. 
    consturctor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.name = name;    
    }
 }

 class Deck{//This class will define the deck of cards, and create a deck with 52 cards.
    constructor() {
        this.cards = [];
        this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.name = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.value = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }  
 }
 
    createDeck() {//this method creates a deck of cards
        console.log('Creating a new Deck');
        for (let i = 0; i < this.suits.length; i++) {//first loop will iterate through the suits of the cards.
            for (let n = 0; n < this.names.length; n++) {//nested loop will iterate through the names and values of cards. 
                this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]))
            }//(ABOVE) This will push the cards objects to the empty cards array. 
        }
    };

    shuffleDeck() {//This method will Shuffle the deck of cards. 
        console.log('Shuffling Deck');
        const shuffleDeck = [];
        for (let i = 0; i < 52; i++) {//This for loop was set for 52 iterations so 52 cards will be shuffled. 
            let randomPosition = Math.floor((this.cards.length - 1) * Math.random());//multiply by random number
            let randomItem = this.cards.splice(randomPosition, 1);
            shuffleDeck.push(...randomItem);//Push random object from above into a new empty array called shuffledDeck 
        }
        return shuffledDeck;
    }

    dealDeck(players, shuffledCards) {//This method will deal the cards to the players. 
        console.log('Dealing Cards');
        let dealingCards1 = shuffledCards.splice(0, 26);
        players[0].hands.push(...dealingCards1);//Pushing the first half of shuffled cards to player 1. 
        let dealingCards2 = shuffledCards.splice(0,26);//splice the last 26 cards of the shuffled deck and assign at array
        players[1].hands.push(...dealingCards2);//Pushing the last half of the shuffled cards to player 2. 
    
 }

 class Players {
    consturctor(name) {
        this.name = name;
        this.points = 0;
        this.hands = [];
    }
 }

 class Game {
    consturctor () {
        this.players = [];
    }

    start() {//This method will start the game
        this.players.push(new Players ('AARON'));//create players and assign names
        this.players.push(new Players('AAIHB'));
        console.log('Declare WAR!!', this.players);

        let myDeck = new Deck();//create deck and shuffle cards
        myDeck.createDeck();
        let shuffledDeck = myDeck.shuffledDeck();

        myDeck.dealDeck(this.players, shuffledDeck);//deal cards to players

        this.playGame();//This is the game play, will run until players are out of cards

        this.endGame();//outcome of game and output game results. 
    }

    playGame(){
        console.log('Declare WAR');
        let player1 = this.players[0];
        let player2 = this.players[1];

        let roundWinner = '';
        let turn = 0;//Keep track of the turns, 26.

        while (player1.hands.length !== 0 && player2.hands.length !== 0) {
            let player1Card = player1.hands.pop();
            let player2Card = player2.hands.pop();
            if (player1Card.value > player2Card.value) {
                roundWinner = player1.name;
                player1.points += 1;
                console.log('Turn:', (turn += 1),  '\Player 1 card:', player1Card.name, ' of ', player1Card.suit, '\Player 2 card:', player2Card.name, ' of ', player2Card.suit,)
            }
            else if( player2Card.value > player1Card.value) {
                roundWinner = player2.name;
                player2.points += 1;
                console.log('Turn:', (turn += 1), '\Player 1 card:', player1Card.name, ' of ', player1Card.suit, '\Player 2 card:', player2Card.name, ' of ', player2Card.suit,)
            }
            else {
                console.log('Turn:', (turn += 1), '\Player 1 card:', player1Card.name, ' of ', player1Card.suit, '\Player 2 card:', player2Card.name, ' of ', player2Card.suit,)            
            }
        }
    }

    endGame() {//this method will run 26 times and will annouce the winner. 
        let gameWinner = '';
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winnerPoints = 0;

        if(player1.points > player2.points) {//if statement compares scores from each player, will see who won the game, console.log out the winner. 
            gameWinner = player1.name;
            winnerPoints = player1.points;
            alert('GAME OVER! ' + gameWinner + "Won the game!\nFINAL SCORES:\n" + player1.name + ": " + player1.points + "\n" + player2.name + ': ' + player2.points + "\nThanks for playing!");
        } else if(player2.points > player1.points) {
            gameWinner = player2.name;
            winnerPoints = player2.points;
            alert('GAME OVER!' + gameWinner + "Won the game!\nFINAL SCORES:\n" + player1.name + ": " + player1.points + "\n" + player2.name + ': ' + player2.points + "\nThanks for playing!");
        } else {
            alert('GAME OVER! \nTIED GAME\nFINAL SCORES:\n' + player1.name + ": " + player2.name + ': ' + player2.points + "\nThanks for Playing!");
        }
    }
}

let game = new Game();
game.start();

//https://www.youtube.com/watch?v=KhaY4cpaJyw
 

