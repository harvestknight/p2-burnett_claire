const fortuneColor = document.getElementsByClassName('colors'); 
const colorGrid = document.getElementsByTagName('body');

function functionWrapper () {
    
    const flashWhite  = () => {
        //toggle class flash on colorGrid
        colorGrid[0].classList.toggle('flash');
    };
   
    const runColor = () => {
        let thisColorText = this.childNodes[0].nodeValue;
        let thisColorLength = thisColorText.length;
    
        for (let i = 0; i < thisColorLength * 2; i++) {
            setTimeout(function(){ 
            flashWhite(); 
            }, i * 1000); 

            }
        };  
    runColor();
};

for (let i=0; i < fortuneColor.length; i++) {
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