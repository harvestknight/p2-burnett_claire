const colorGrid = document.getElementsByClassName('colorGrid');
const colorGrid2 = document.getElementsByClassName('colorGrid2');
const colorGrid3 = document.getElementsByClassName('colorGrid3');
const fortuneColor = document.getElementsByClassName('colors'); 
const fortuneNumber2 = document.getElementsByClassName('numbers2'); 
const fortuneNumber3 = document.getElementsByClassName('numbers3'); 

//Choose a color + loop through the number of times that the name of the color is long
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
            }, i * 500); 
            }
            //Display numbers instead of colors
            setTimeout(function(){
            colorGrid[0].classList.add('hide');
            colorGrid2[0].classList.remove('hide');
            colorGrid2[0].classList.add('show');   
            }, thisColorLength * 1000);
        };  
    runColor();
};


//Choose a number + loop through the same number of times as the number chosen
function functionWrapper2 () {
    
    const flashWhite2  = () => {
        colorGrid2[0].classList.toggle('flash');
    };
   
    const runColor2 = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        for (let i = 0; i < numberValue * 2; i++) {
            setTimeout(function(){ 
            flashWhite2(); 
            }, i * 500); 
            }
            setTimeout(function(){
            colorGrid2[0].classList.add('hide');
            colorGrid2[0].classList.remove('show');
            colorGrid3[0].classList.remove('hide');
            colorGrid3[0].classList.add('show');   
            }, numberValue * 1000);
        };  
    runColor2();
};


//Choose a number + display fortune
function functionWrapper3 () {
    
    const flashWhite3  = () => {
        colorGrid3[0].classList.toggle('flash');
    };
   
    const runColor3 = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        for (let i = 0; i < numberValue * 2; i++) {
            setTimeout(function(){ 
            flashWhite3(); 
            }, i * 500); 
            }
            setTimeout(function(){
            colorGrid3[0].classList.add('hide');
            colorGrid3[0].classList.remove('show');
            }, numberValue * 1000);
        };  
    runColor3();
};

for (let i=0; i < fortuneColor.length; i++) {
    fortuneColor[i].addEventListener('click', functionWrapper);
};

for (let i=0; i < fortuneNumber2.length; i++) {
    fortuneNumber2[i].addEventListener('click', functionWrapper2);
};

for (let i=0; i < fortuneNumber3.length; i++) {
    fortuneNumber3[i].addEventListener('click', functionWrapper3);
};



//magicFortunes.sort(function(a, b){return 0.5 - Math.random()});


//Random fortunes
/*let magicFortunes = ['Now is the time to try a new hair color!','Stay home Saturday night!', 'You will become a JavaScript jedi!', 'The gym is calling your name!', 'You will get your dream job upon graduation!', 'You will live a long, healthy life!', 'Your Christmas bonus will be generous!', 'Now is the time to send a thoughtful message to a loved one!', 'Call your mother!', 'Sleep in tomorrow!'];*/