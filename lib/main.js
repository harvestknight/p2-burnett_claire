'use strict';

//Choose a color + loop through the number of times the name of the color is long
var fortuneColor = document.getElementsByClassName('colors');
var colorGrid = document.getElementsByTagName('section');

function functionWrapper() {
    var _this = this;

    var flashWhite = function flashWhite() {
        //toggle class flash on colorGrid
        colorGrid[0].classList.toggle('flash');
    };

    var runColor = function runColor() {
        var thisColorText = _this.childNodes[0].nodeValue;
        var thisColorLength = thisColorText.length;

        for (var i = 0; i < thisColorLength * 2; i++) {
            setTimeout(function () {
                flashWhite();
            }, i * 1000);
            //set timeout method comes into play here to stagger CSS transition functionality
            //options to try with the functionality: call class list on the variable and toggle that class....put sections inside of a variable to add them to...grab each section every time I click them and put them into an array variable...use loop to add classes
        }
    };
    runColor();
};

for (var i = 0; i < fortuneColor.length; i++) {
    fortuneColor[i].addEventListener('click', functionWrapper);
};

//Display numbers instead of colors
//start this section in it's own area/outside of the functions and loops above
//will need a new event listener -- Blakeley will cover this live in Mod12 


//Choose a number + loop through the same number of times as the number chosen


//Choose a number + display fortune

//magicFortunes.sort(function(a, b){return 0.5 - Math.random()});


//Random fortunes
/*var magicFortunes = ['Now is the time to try a new hair color!','Stay home Saturday night!', 'You will become a JavaScript jedi!', 'The gym is calling your name!', 'You will get your dream job upon graduation!', 'You will live a long, healthy life!', 'Your Christmas bonus will be generous!', 'Now is the time to send a thoughtful message to a loved one!', 'Call your mother!', 'Sleep in tomorrow!'];*/