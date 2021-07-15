console.log("JUJUTSU KAISEN");

/*  ==== MVP ==== */
// KEEP IT MINIMUM and FUNCTIONING then add feature later

//===== SECTION ====
/*  USER STORIES/ GAME LOGIC */ 

/* NOTE */
// In the beginning of the game user will be prompted and ask for their the nickname they want to use TODO
// Main Character of the game will Yuji Itadori, the objective of the game is Role - Play as him 
// HEALTH STATS will start at 8 out 10 TODO DONE
// HUNGER STATS will start at 2 out 10  TODO DONE
// SLEEPINESS will start at 1 out 10  TODO DONE
// SUKUNA bar will start at 0 it will increase over time (use of timer) and shows the round  ===== MAX LEVEL is 20. TODO DONE
//TIME has max time of 120s



/* NOTE */
//For the player there's three metrics to keep an eye on for: Health, Hunger, Sleepiness and SUKUNA level/bar
//There's a time interval where per 30sec Hunger and Sleepiness will increase by 1. TODO
//Theres a time interval where per minute SUKUNA Level increase acts a round indication and morphing

/*  SECTION */
//Health ----> Maintaning his health bar will keep the Itadori alive ---> Losing health to empty health bar = GAMEOVER 
/* Itadori will start the game with 8 health out of 10  ---> keeping it high enough will let survie the game*/

//Hunger ----> As hunger increases Itadori's health deplete slowly ---> Losing health = GAME OVER
/* Itadori hunger stats need to be keptlow if it reaches more than 8 out of 10 === Itadori health will decrease by 2 */

//Sleepiness ----> As sleepiness increases and reaching max -----> will also affect his Health
/* Itadori sleepiness stats need to be kept low when it reaches 10 or 10  ==== Itadori health will decrease by 1 */



/* NOTE */
// Itadori has three actions (buttons) it will be FOOD, TRAIN and SLEEP. 
/* SECTION */
//FOOD --> will increases Itadori health and lower his hunger level    TODO
/*  FOOD button when clicked Health stats will increase by 2  */

//TRAIN --> will increase Itadori health by a little and increase his hunger & sleepiness level as well TODO
/* TRAIN button when clicked Health stats will increase by 1 and Increase hunger by 2 */

//SLEEP ---> will lower his sleepiness level and increase his health level  TODO
/* Sleep button will act as a rest --> Sleep will decrease by 2 */



/* NOTE */
// As the game progress, user will be prompted to level up and Itadori will eat the SAKUNA's finger.
// SUKUNA finger acts as a level or round counter === max level is 20 (20 fingers)=== once it reach the GAME IS OVER YOU WIN!





/* NOTE */
/* REVIEW feature creep */  
// For random period of time monster/foe/enemy will spawn and decrease his health and hunger
// User has to the ability to use FOOD,SLEEP and TRAIN to increase his health or hunger



/* REVIEW */
//EXTRA FEATURE ===== Feature Creep ======= ICE BOX ======== STRETCH GOALS
/* 
    * Food button ---->decrease hunger by 1
    * Train button -----> and increase sleepiness by 1
    * Sleep button --->Hunger will increase by 1 
    * add a power lvl metric that act as a (the level of the game / the higher the number the harder it gets to keep Itadori alive)
    * add a SAKUNA METRIC  ( experience level)
    * add a confidence boost that will boost up the SAKUNA BOOST = each SAKUNA BOOST INCREASES the POWER LEVEL === the faster the game progress
    * add more monster having differently damage level , also increasing the SAKUNA BOOST == faster the game progress
    * add sounds
    * add animations when button is being press
    * disables other buttons, one button at a time and no repeating button

*/

const kaisen = {
    nickname : "",
    health :  8,
    hunger: 2,
    sleepiness: 1,
    sukuna: 0,
    time: 0,

    /* SECTION NICKNAME */
    enterName(){
        kaisen.nickname = $('#prompt__input').val();
        $('h3').text(`Yuji "${kaisen.nickname}" Itadori`);

        $('.prompt').css('visibility', 'hidden');
    },

    /*  SECTION  START GAME */
    game:null,
    timer: null,
    startGame(){
        kaisen.startTimer();
        kaisen.game = setInterval(kaisen.metricModify, 2000);
    },

    /*  SECTION  RESETS GAME */
    resetGame(){
        clearInterval(kaisen.game);
        clearInterval(kaisen.timer);
        kaisen.health = 8;
        kaisen.hunger = 2;
        kaisen.sleepiness = 1;
        kaisen.sukuna = 0;
        kaisen.time = 0;
        $('#health').text(`Health:  ${kaisen.health}`);
        $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        $('#sleepiness').text(`Sleepiness: ${kaisen.sleepiness}`);
        $('#timer__display').text(`Timer: ${kaisen.time}s`);
    },

    /* SECTION METHODS  ==== button functionality */
    // ANCHOR
    increaseHealth(){
        if(kaisen.health < 10){
            kaisen.health += 2;
            $('#health').text(`Health:  ${kaisen.health}`);
        }
        if(kaisen.hunger >= 4){
            kaisen.hunger-=6;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }else {
            kaisen.hunger-=2;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }
        $('.button.food').attr({ "disabled": true, "class": "button food nes-btn is-disabled"});
        $('.button.train').attr({ "disabled": false, "class": "button train nes-btn" });
        $('.button.sleep').attr({ "disabled": false, "class": "button sleep nes-btn"});

        $('#display__background').attr("src", "https://i.pinimg.com/originals/09/5a/e8/095ae863a15f046100edf8efaa240452.jpg");
    },

    training(){
        if(kaisen.hunger < 10 ){
            kaisen.hunger+=2;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }
        if(kaisen.health < 10){
            kaisen.health+=2;
            $('#health').text(`Health:  ${kaisen.health}`);
        }
        $('.button.food').attr({ "disabled": false, "class": "button food nes-btn" });
        $('.button.train').attr({ "disabled": true, "class": "button train nes-btn is-disabled" });
        $('.button.sleep').attr({ "disabled": false, "class": "button sleep nes-btn" });
        
        $('#display__background').attr("src", "https://i.pinimg.com/originals/09/5a/e8/095ae863a15f046100edf8efaa240452.jpg");
    },

    decreaseSleep(){
        if(kaisen.sleepiness > 0){
        kaisen.sleepiness-=8;
        $('#sleepiness').text(`Sleepiness: ${kaisen.sleepiness}`);
        }

        $('.button.food').attr({ "disabled": false, "class": "button food nes-btn"});
        $('.button.train').attr({ "disabled": false, "class": "button train nes-btn" });
        $('.button.sleep').attr({ "disabled": true, "class": "button sleep nes-btn is-disabled"});

        $('#display__background').attr("src", "https://i.pinimg.com/originals/4c/57/c5/4c57c5e898197e98768607df06a90010.jpg");
        // setTimeout(kaisen.pauseAndSleep, 5000);
    },

    pauseAndSleep(){
        console.log("sleeping");
    },

    /* SECTION ===== Time and Rounds/Level */
    //ANCHOR
    startTimer(){
        console.warn("===GAME START====");
        this.timer = setInterval(this.increaseTime, 1000);
    },

    increaseTime(){
        kaisen.time++;
        $('.number').attr('id', 'timer__number' );
        $('#timer__number').text(`${kaisen.time}s`);

        if (kaisen.time == 40 || kaisen.time == 20 ){
            kaisen.increaseSukunaLevel();
        } else if( kaisen.time == 60){
            kaisen.increaseSukunaLevel();
            clearInterval(kaisen.timer);
            kaisen.startTimer();
            kaisen.time = 0;
        }
        
    },
    
    increaseSukunaLevel(){
        kaisen.sukuna++;
        $('#level').text(`Sukuna: ${kaisen.sukuna}`);
        if(kaisen.sukuna >= 20){
            $('h1').text('=== YOU WIN ===');
            kaisen.resetGame();
        }
        
    },


    /* SECTION ==== Modifying the metric/ stats relative to time */
    //ANCHOR
    
    metricModify(){ 
        
        kaisen.increaseHunger();
        kaisen.increaseSleepiness();

        if(kaisen.health == 0){
            $('h1').text('=== GAME IS OVER ====');
        }
    },
    
    increaseHunger(){
        if(this.hunger < 10){
            this.hunger++;
            $('#hunger').text(`Hunger: ${this.hunger}`);
        }
            
        if(this.hunger >= 10){
            this.health--;
            $('#health').text(`Health: ${this.health}`); 
        } 
    },

    increaseSleepiness(){
        if(this.sleepiness < 10){
            this.sleepiness++;
            $('#sleepiness').text(`Slepiness: ${this.sleepiness}`);
        }
            
        if(this.sleepiness >= 10){
            this.health--;
            $('#health').text(`Health: ${this.health}`);
        }
    },

};


$('.button.enter').on("click", kaisen.enterName);

$('.button.food').on("click", kaisen.increaseHealth);

$('.button.train').on("click", kaisen.training);

$('.button.sleep').on("click", kaisen.decreaseSleep);

$('#start').on("click", kaisen.startGame);

$('#reset').on("click", kaisen.resetGame);