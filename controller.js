var characters = [];

var Character = function( name, hp, decksize, cards, items, mcards ){
    this.name = name;
    this.hp = hp;
    this.decksize = decksize;

    this.cards = cards;
    this.items = items;

    this.mcards = mcards;
};

var Card = function( clname, id, name, upperText, lowerText, upperFunc, lowerFunc, initiative )
{
    this.clname = clname;
    this.id = id;
    this.name = name;
    this.upperText = upperText;
    this.lowerText = lowerText;
    this.upperFunc = upperFunc;
    this.lowerFunc = lowerFunc;
    this.initiative = initiative;
};

var bruteCards = 
[
    {
        clname: "BR",
        id: 1,
        name: "Trumple",
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 72
    },
    {
        name: "Eye for an Eye",
        clname: "BR",
        id: 2,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 18
    },
    {
        name: "Sweeping Blow",
        clname: "BR",
        id: 3,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 64
    },
    {
        name: "Provoking Roar",
        clname: "BR",
        id: 4,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 10
    },
    {
        name: "Overwhelming Assault",
        clname: "BR",
        id: 5,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 61
    },
    {
        name: "Grab and Go",
        clname: "BR",
        id: 6,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 87
    },
    {
        name: "Warding Strength",
        clname: "BR",
        id: 7,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 32
    },
    {
        name: "Sheild Bash",
        clname: "BR",
        id: 8,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 15
    },
    {
        name: "Leaping Cleave",
        clname: "BR",
        id: 9,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 54
    },
    {
        name: "Spare Dagger",
        clname: "BR",
        id: 10,
        upperText: "",
        lowerText: "",
        upperFunc: null,
        lowerFunc: null,
        initiative: 27
    }
]

// generate standard modifier deck for player
function generateMcards(){
    var mcards = [];
    for ( var i = 0; i < 6; i++ ){
        mcards.push( {effect: "0"});
    }
    for ( var i = 0; i < 5; i++ ){
        mcards.push( {effect: "+1"});
    }
    for ( var i = 0; i < 5; i++ ){
        mcards.push( {effect: "-1"});
    }
    mcards.push( {effect: "+2"});
    mcards.push( {effect: "-1"});
    mcards.push( {effect: "x0"});
    mcards.push( {effect: "x2"});
}


function initCharacter()
{
    var cards = [];
    characters = [];
    for ( var i in bruteCards ){
        var c = bruteCards[i];
        var card = new Card(
            c.cname, c.id, c.name, c.upperText, c.lowerText, c.upperFunc, c.lowerFunc, c.initiative 
        );
        cards.push( card );
    }

    var ch = new Character( "BRUTE", 10, 10, cards, [], generateMcards() );
    characters.push( ch );
    currentCh = ch;
}
