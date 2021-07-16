console.log("JUJUTSU KAISEN");


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
        $('#timer__number').text(`${kaisen.time}s`);
        $('#level').text(`Sukuna: ${kaisen.sukuna}`);
        $('h1').text('Jujutsu Kaisen-gotchi!');
        $('.button.food').attr({ "disabled": false, "class": "button food nes-btn"});
        $('.button.train').attr({ "disabled": false, "class": "button train nes-btn" });
        $('.button.sleep').attr({ "disabled": false, "class": "button sleep nes-btn" });
        $('.display__character').attr({ "id": "animation__reset", "visibility": "visible", "src": "http://ami.animecharactersdatabase.com/uploads/chars/67712-2096367195.png"});
        $('.display__background').attr({"src": "https://i.pinimg.com/originals/09/5a/e8/095ae863a15f046100edf8efaa240452.jpg", style: "opacity:1"});
    },

    /* SECTION METHODS  ==== button functionality */
    // ANCHOR
    increaseHealth(){
        if(kaisen.health < 9){
            kaisen.health += 2;
            $('#health').text(`Health:  ${kaisen.health}`);
        }
        if(kaisen.hunger > 6){
            kaisen.hunger-=6;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }else if(kaisen.hunger>5){
            kaisen.hunger-=5;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }else if(kaisen.hunger>4){
            kaisen.hunger -= 4;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }else if(kaisen.hunger>3){
            kaisen.hunger-=3;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }else if(kaisen.hunger>2){
            kaisen.hunger-=2;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }else if(kaisen.hunger>=1){
            kaisen.hunger--;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }

        $('.display__character').attr("id","animation__feed");
        $('.button.food').attr({ "disabled": true, "class": "button food nes-btn is-disabled"});
        $('.button.train').attr({ "disabled": false, "class": "button train nes-btn" });
        $('.button.sleep').attr({ "disabled": false, "class": "button sleep nes-btn"});
        
        $('.display__background').attr({ "src": "images/jujutsu_kaisen_scenery_vending_machine_hd_jujutsu_kaisen-1920x1080.jpg", style: "opacity:1"});
    },
    
    training(){
        if(kaisen.sukuna < 9){
            kaisen.sukuna++;
            $('#level').text(`Sukuna: ${kaisen.sukuna}`);
        }
        if(kaisen.hunger < 9 ){
            kaisen.hunger+=2;
            $('#hunger').text(`Hunger:  ${kaisen.hunger}`);
        }
        // if(kaisen.health < 9){
        //     kaisen.health+=2;
        //     $('#health').text(`Health:  ${kaisen.health}`);
        // }
        
        if(kaisen.sleepiness < 10){
            kaisen.sleepiness++;
            $('#sleepiness').text(`Sleepiness: ${kaisen.sleepiness}`);
        }

        $('.display__character').attr("id", "animation__train");
        $('.button.food').attr({ "disabled": false, "class": "button food nes-btn" });
        $('.button.train').attr({ "disabled": true, "class": "button train nes-btn is-disabled" });
        $('.button.sleep').attr({ "disabled": false, "class": "button sleep nes-btn" });
        
        $('.display__background').attr({ "src": "https://i.pinimg.com/originals/09/5a/e8/095ae863a15f046100edf8efaa240452.jpg", style: "opacity:1"});
    },

    decreaseSleep(){
        
        if(kaisen.sleepiness > 5){
            kaisen.sleepiness-=5;
            $('#sleepiness').text(`Sleepiness: ${kaisen.sleepiness}`);
        }else if( kaisen.sleepiness >4){
            kaisen.sleepiness -=4;
            $('#sleepiness').text(`Sleepiness: ${kaisen.sleepiness}`);
        }else if( kaisen.sleepiness >3){
            kaisen.sleepiness -=3;
            $('#sleepiness').text(`Sleepiness: ${kaisen.sleepiness}`);
        }else if( kaisen.sleepiness >2){
            kaisen.sleepiness -=2;
            $('#sleepiness').text(`Sleepiness: ${kaisen.sleepiness}`);
        }else if(kaisen.sleepiness >=1){
            kaisen.sleepiness --;
            $('#sleepiness').text(`Sleepiness: ${kaisen.sleepiness}`);
        }
        $('.display__character').attr("id", "animation__sleep");
        
        $('.button.food').attr({ "disabled": false, "class": "button food nes-btn"});
        $('.button.train').attr({ "disabled": false, "class": "button train nes-btn" });
        $('.button.sleep').attr({ "disabled": true, "class": "button sleep nes-btn is-disabled"});

        $('.display__background').attr({
            "src": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84a4b3da-9529-4827-95f2-bccefd8d8869/dcy0ej2-7c548891-bb0c-475c-ba67-8e8fcfe6919d.png/v1/fill/w_1280,h_720,q_80,strp/anime_bedroom_backround_by_shinasty_dcy0ej2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODRhNGIzZGEtOTUyOS00ODI3LTk1ZjItYmNjZWZkOGQ4ODY5XC9kY3kwZWoyLTdjNTQ4ODkxLWJiMGMtNDc1Yy1iYTY3LThlOGZjZmU2OTE5ZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.orXJUHL2urpZNTJVZuRy4BJwXyWTMxkC-GblQOjkfn0", style:"opacity:0.8"});
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

        if (kaisen.time == 50 || kaisen.time == 40 || kaisen.time == 30 || kaisen.time == 20 || kaisen.time ==10){
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
        if(kaisen.sukuna >= 10){
            kaisen.winRound();
            clearInterval(kaisen.game);
            clearInterval(kaisen.timer);
        }else if (kaisen.sukuna >= 8){
            $('.display__character').attr("src", "https://www.jujutsukaisen.jp/images/chara_detail5.png");
        }else if (kaisen.sukuna > 5){
            $('.display__character').attr("src", "images/yuji.png");
        }else if (kaisen.sukuna > 3){
            $('.display__character').attr("src", "images/yuji2.png")
        }
        
    },
    winRound(){
        $('.display__character').attr("id", "character__hidden");
        $('.display__background').attr({"src": "https://static.zerochan.net/Jujutsu.Kaisen.full.3232404.jpg", style:"opacity:1"});
        $('h1').text('=== YOU WIN ===');
    },

    /* SECTION ==== Modifying the metric/ stats relative to time */
    //ANCHOR
    
    metricModify(){ 
        kaisen.increaseSleepiness();
        kaisen.increaseHunger();
},
    endGame(){
        $('.display__character').attr("id", "character__hidden");
        $('h1').text('=== GAME IS OVER ====');
        $('.display__background').attr("src", "https://recenthighlights.com/wp-content/uploads/2020/11/Jujutsu-Kaisen-Itadori-Death-1024x576.jpg");
        clearInterval(kaisen.game);
        clearInterval(kaisen.timer);
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
        if(this.health < 0){
            kaisen.endGame()
        }
    },

    increaseSleepiness(){
        if(this.sleepiness < 10){
            this.sleepiness++;
            $('#sleepiness').text(`Sleepiness: ${this.sleepiness}`);
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

//AUDIO
function play(){
    const audio = document.getElementById('music');
    audio.volume = 0.2;

}
play();