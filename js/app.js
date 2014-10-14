(function() {
    var app = angular.module('LoADBapp', []);
    
    app.controller('LoADB', function (){
        this.cards = cardsSample;
    });
    
    var cardsSample = [{
        id: 0,
        image: "http://placehold.it/40",
        name: "Card Sample",
        cost: "16",
        star: "3",
        race: "Kingdom",
        wait: "3",
        atk: "680",
        hp: "2200"
    },
    {
        id: 1,
        image: "http://placehold.it/40",
        name: "Card Sample 2",
        cost: "15",
        star: "4",
        race: "Forest",
        wait: "4",
        atk: "6%0",
        hp: "1700"
    }
    ]
})();