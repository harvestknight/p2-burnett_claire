'use strict';

var colorGrid = document.getElementsByClassName('colorGrid');
var colorGrid2 = document.getElementsByClassName('colorGrid2');
var colorGrid3 = document.getElementsByClassName('colorGrid3');
var fortuneColor = document.getElementsByClassName('colors');
var fortuneNumber2 = document.getElementsByClassName('numbers2');
var fortuneNumber3 = document.getElementsByClassName('numbers3');

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
            }, i * 500);
        }
        //Display numbers instead of colors
        setTimeout(function () {
            colorGrid[0].classList.add('hide');
            colorGrid2[0].classList.remove('hide');
            colorGrid2[0].classList.add('show');
        }, thisColorLength * 1000);
    };
    runColor();
};

for (var i = 0; i < fortuneColor.length; i++) {
    fortuneColor[i].addEventListener('click', functionWrapper);
};

//Choose a number + loop through the same number of times as the number chosen


//Choose a number + display fortune

//magicFortunes.sort(function(a, b){return 0.5 - Math.random()});


//Random fortunes
/*var magicFortunes = ['Now is the time to try a new hair color!','Stay home Saturday night!', 'You will become a JavaScript jedi!', 'The gym is calling your name!', 'You will get your dream job upon graduation!', 'You will live a long, healthy life!', 'Your Christmas bonus will be generous!', 'Now is the time to send a thoughtful message to a loved one!', 'Call your mother!', 'Sleep in tomorrow!'];*/