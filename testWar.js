const expect = chai.expect;


describe("Create a card", function () {
    it("Should create an object with 3 Parameters", function () {
        console.log('card');
        let suit = 'Diamonds';
        let name = 'Ace';
        let value = 14;
        let card = new Card(suit, name, value)
        console.log(card);
        console.log({suit: suit, name: name, value: value});
        expect(card).to.deep.equal({suit: suit, name: name, value: value});
    });

    it("should return an array that is not in the same order as the original", function() {
        const deck = new Deck
        let shuffle = deck.shuffleDeck();
        const controlDeck = new Deck;
        const shuffleDeck = new Deck;
        shuffle = shuffleDeck.shuffleDeck();
        chai.assert.notEqual(shuffle, controlDeck.deck);
    });

});