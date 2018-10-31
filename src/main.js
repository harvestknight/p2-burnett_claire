//Choose a color + loop through the number of times the name of the color is long
const fortuneColor = document.getElementsByTagName('h1'); //or use document.getElementsByClassName('colors') and add a CSS 'color' class to the h1's

function runColor() {
    this.length('x');
};

for (i=0; i < fortuneColor.length; i++) {
 fortuneColor[i].addEventListener('click', runColor);
};


//Display numbers instead of colors


//Choose a number + loop through the same number of times as the number chosen


//Choose a number + display fortune

    //magicFortunes.sort(function(a, b){return 0.5 - Math.random()});


    //Random fortunes
    /*var magicFortunes = ['Now is the time to try a new hair color!','Stay home Saturday night!', 'You will become a JavaScript jedi!', 'The gym is calling your name!', 'You will get your dream job upon graduation!', 'You will live a long, healthy life!', 'Your Christmas bonus will be generous!', 'Now is the time to send a thoughtful message to a loved one!', 'Call your mother!', 'Sleep in tomorrow!'];*/