# Project-Zero-TomagotchiGame


# Jujutsu Kaisen-Gotchi!

![KAISEN](https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABenF3_UnaazjvWtxJrkgO66DOTKiMqaHO4kWi1Hs5T2HmCtjwVopytB2Vk9mdqe_IitU3BwvUSsMmxckw9BdVUtNmJQQt9e0RBqV.png?r=1e9)

# Objective
An interactive game where player will play as Itadori Yuji from the show called Jujutsu Kaisen. The objective of the game is to survive and reach Sukuna Level 20 to win the game! To survive, player has to keep an eye on the metric bar / progress bar and use the FOOD, TRAIN and SLEEP to keep Itadori Yuji alive!

# User Stories
1.  In the beginning of the game, user/player will be ask for the nickname they want to use for the game. Before starting the game, Itadori will start with Health stats of 8 out of 10, Hunger stats of 2 out 10, Sleepiness stats of 1 out 10 and Sukuna level of 0. 

2. Player has to press the start button to begin the game. Once pressed, TIMER will start from 0s and reaching to 60s. Reaching the 60s will increment the sukuna level by 1 === every 20s is equal to +1 Sukuna. Reaching 20 Sukuna, the player wins the game! or beat the game.

3. Things to keep an eye for is the Health, Hunger and Sleepiness stats. Once the game begins, Each metric will fluctuate respective to time. Hunger will increase over time, once it reaches 10/10 Hunger - Health will decrease by 1. Same thing goes for sleepiness, reaching 10/10 Sleepiness - Health decrease by 1.  Unable to keep the Health bar above 0 will result to GAME OVER --- Itadori dies 😔.

4. How to survive? Player has 3 functional buttons that will keep Itadori alive and player surviving the game WIN! YAY. 
    - FOOD -- using the food button will increase the health of Itadori by 2 and decrease his hunger by 6.
    - TRAIN -- using the train button will increase the health of Itadori by 2 and also increase his hunger by 2.
    - SLEEP -- using the sleep button will decrease sleepiness by 8. 




# WireFrame 
![WIREFRAME](https://i.imgur.com/cN9tW1w.png)

# Milestone

    1. Set-up the html,css, and javascript file. Added the basic css and index.html ✔️DONE
    2. Create the USER STORY / GAME LOGIC ✔️DONE
    3. Use jquery to test game buttons works properly ✔️ DONE
    4. UPDATE the CSS File to look more viewable ✔️DONE
    5. add the basic game logic = changing key value pair and showing on the html ✔️ DONE
    6. Create a time function ✔️ DONE
    7. Add metric modifier and if statements to cap the health and hunger metric ✔️ DONE
    8. Add a reset function, increase level (sukuna) and fix start time ✔️ DONE
    9. Add root colors on css ✔️ DONE
    10. Add font-family and link it to the local repo ✔️DONE
    11. Add a increaseHunger method ✔️ DONE
    12. Add a increaseSleepines method ✔️ DONE
    13. Update reset method and added a reset button ✔️ DONE
    14. 

# Feature Creep
    * Food button ----> decrease hunger by 1
    * Train button -----> and increase sleepiness by 1
    * Sleep button --->Hunger will increase by 1 
    * add a power lvl metric that act as a (the level of the game / the higher the number the harder it gets to keep Itadori alive)
    * add a confidence boost that will boost up the SAKUNA BOOST = each SAKUNA BOOST INCREASES the POWER LEVEL === the faster the game progress
    * add more monster having differently damage level , also increasing the SAKUNA BOOST == faster the game progress
    * add sounds
    * add animations when button is being press
    * disables other buttons, one button at a time and no repeating button

# Resources
    * https://www.animecharactersdatabase.com/characters.php?id=104841
    * https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Kaisen_Wiki
    * https://www.fontget.com/font/vtks-love-u/
    * https://www.fontget.com/font/midnight/