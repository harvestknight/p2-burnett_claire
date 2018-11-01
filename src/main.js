//Choose a color + loop through the number of times the name of the color is long
const fortuneColor = document.getElementsByTagName('h1'); //or use document.getElementsByClassName('colors') and add a CSS 'color' class to the h1's --- use this instead...change h1's to p

//function runColor() {
   // this.length('x');
//};

function functionWrapper () {
   const runColor = () => {
    
    let thisColorText = this.childNodes[0].nodeValue;
       
    let thisColorLength = thisColorText.length;
    
    for (let i=0; i < thisColorLength; i++) {
        console.log('hi');
        //call class list on the variable and toggle that class....put sections inside of a variable to add them to...just start with 'add' class instead of toggle
        //grab each section every time I click them and put them into an array variable...use loop to add classes
        //this is where I put functionality based on button length
        //set timeout method will come into play here to stagger CSS transition functionality
    }
   };  
    runColor();
};

for (let i=0; i < fortuneColor.length; i++) {
 fortuneColor[i].addEventListener('click', functionWrapper);
};


//Display numbers instead of colors
    //will need a new event listener -- Blakeley will cover this live in Mod12 

//Choose a number + loop through the same number of times as the number chosen


//Choose a number + display fortune

    //magicFortunes.sort(function(a, b){return 0.5 - Math.random()});


    //Random fortunes
    /*var magicFortunes = ['Now is the time to try a new hair color!','Stay home Saturday night!', 'You will become a JavaScript jedi!', 'The gym is calling your name!', 'You will get your dream job upon graduation!', 'You will live a long, healthy life!', 'Your Christmas bonus will be generous!', 'Now is the time to send a thoughtful message to a loved one!', 'Call your mother!', 'Sleep in tomorrow!'];*/