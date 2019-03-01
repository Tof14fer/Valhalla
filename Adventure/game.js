// Single Line Comment
/*

Multi-Line Comment

*/

/*
alert("Warning!! Will Robinson... Warning!!");

confirm("Do you like Pokemon");

prompt("What type of Pokemon do you like?");*/

//Inventory
var inventory ={
    coins:500,
    food:0,
    weapon:0,
    map:0,
}

var you = 9.9;

Game();

function Game(){
    // Names for the Demons
    var demonnames = ["Shizroldir", "Ged'cainnon", "Ashar"];
    
    var newdemon = demonnames[Math.floor(Math.random()* 3)]
    
alert("The Legend of the Really Dark Forest");
    
    var PC = prompt("What shall I call you traveler?");
    
    while(!confirm("Are you sure you want "+PC+" to be your name?")){
        PC = prompt("What name do you want?");
    }
    
    alert("Welcome to the land of the semi-living, "+PC);
    // Start Area
    Forest();
    
    function Forest(){
        var forest1 = prompt("So here's the run down.. I guess you partied a bit to hard, drinking is never a good activity to do without real supervision. You are now laying in the middle of a ridiculously dark forest and can't see much around yourself. \n -Look around \n -Sit down and cry a bit \n -Run and Scream").toLowerCase();
        
        if(forest1 == "look around" || forest1 == "look"){
            
            var forestLook = alert("About three feet in front of you there is a super conveniently placed flash light, you're welcome.");
                alert ("Now you have a flashlight my friend.");
                Pathfromstart();
        }
                
      
          // Sit Command  
    else if(forest1 == "sit down" || forest1 == "cry" || forest1 == "sit down and cry a bit" || forest1 == "sit" || forest1 == "cry a bit" || forest1 == "sit and cry"){
        
        var cryingabit = confirm("Okay.. so if this is how the whole adventure is going to be I don't think this is going to work out.. Do you want to continue playing?");
        if (cryingabit){
            alert ("Ok lets get going again.");
            Forest();
        }
        else if (!cryingabit){
            alert ("Well then I guest this is goodbye...");
            EndGame();
        }
    }
        else if(forest1 == "run and scream" || forest1 == "run" || forest1 == "scream"){
    alert("You start at a dead sprint... sadly you are in the dark so you hit a tree and passed out!! You wake up right where you started.");
        }
            Forest();
        
   //Forests end bracket    
    }
    // Direction North or West
      function Pathfromstart(){       
            var directiontogo = prompt("Now that you have a light you can see some of the things that are lurking around you. You notice there are two paths you can take. You can either go north or west. Which way do you want to go? \n -North \n -West").toLowerCase();
                
                if(directiontogo == "north"){  
            var northboundtown = alert("So, you see a small town further along the path.. Would you like to continue to the town or turn back?... Hah like you had a choice.");
                alert ("Ok, then lets get to that town!!");
                Town();}
                
            else if(directiontogo == "west"){
                
                var westward = alert ("Well.. I guess we are heading further into the forest. Here we go!!!");
                    DeepForest();
                }
                
            else(alert("I don't know what "+directiontogo+" is."))
                Forest();
        }
    // Town function
    function Town(){
        var township = alert("As you approach the small shore town you smell the salt in the air and the fresh fish being filleted in the towns core. The town is full of sound and people rushing for the morning rush. A man brushes past you with a dazed look in his eye. There is a shop you can see with the door open and a warm light luring you in.");
        TownSquare();
    }
    // Town center choice
    function TownSquare(){
    var town1core = prompt ("The towns center seems to have a lot to offer. You can go to the Blacksmith's, the Inn, or back to the forest. \n -Blacksmith \n -Inn \n -Woods").toLowerCase();
    switch(town1core){
        case "blacksmith":
        Blacksmith();
        break;
        
        case "inn":
        Inn();
        break;
        
        case "woods":
        DeepForest();
        break;
        
        default:
        alert ("I don't know what "+town1core+" is.")
                    TownSquare();
    }
    }
        
        // Inn Function
        function Inn(){
            var innskeeper = prompt("Welcome to my humble home, we can get you in a room and food in your belly of 50 coins. Would you like to stay? \n-Stay \n-Leave").toLowerCase();
            if (innskeeper == "stay" && inventory.coins >= 50){
                inventory.food += 1 ;
                    alert("You own "+inventory.food+ " piece(s) of bread.");
                    inventory.coins -= 50;
                    alert("You now have "+inventory.coins+ " coins");
                alert("You feel well rested and eager to continue the adventure.")
                    Inn();
            }
            else if (innskeeper == "leave"){
                TownSquare();
            }
            else
                alert("I don't know what "+innskeeper+" is.");
            Inn();
        }
         
        
        
        
        
        //Blacksmith
        function Blacksmith(){
            var blacksmith = prompt("I have all of your traveling needs. What are you looking for? \n-Sword \n-Food \n-Map \n-Leave").toLowerCase();
            if (blacksmith == "sword" || blacksmith == "buy sword" && inventory.coins == 100){
                var swordBuy = confirm("Are you sure you want to get this fine blade? It will cost a total of 100 coins.");
                if(swordBuy){
                    //Add sword plus one
                    inventory.weapon += 1;
                    alert("You own "+inventory.weapon+ " weapon(s)");
                    inventory.coins -= 100;
                    alert("You now have "+inventory.coins+ " coins");
                    Blacksmith();
                }
                
                else if (blacksmith == "sword" || blacksmith == "buy sword" && inventory.coins == 100){
                    alert("You don't have enough money for that.")
                    Blacksmith();
                }
                
                else{
                    Blacksmith();
                }
            } 
            
            else if (blacksmith == "food" || blacksmith == "buy food" && inventory.coins == 10){
                var foodBuy = confirm("Are you sure you want to get this fine bread? It will cost a total of 10 coins.");
                if(foodBuy){
                    //Add food plus one
                    inventory.food += 1;
                    alert("You own "+inventory.food+ " piece(s) of bread.");
                    inventory.coins -= 10;
                    alert("You now have "+inventory.coins+ " coins");
                    Blacksmith();
                }
                
                else if (blacksmith == "food" || blacksmith == "buy food" && inventory.coins == 100){
                    alert("You don't have enough money for that.")
                    Blacksmith();
                }
                
                else{
                    Blacksmith();
                }
                
                
            }
            
            else if (blacksmith == "map" || blacksmith == "buy map" && inventory.coins == 50){
                var mapBuy = confirm("Are you sure you want to get this fine map? It will cost a total of 50 coins and has no use in the rest of the adventure.");
                if(mapBuy){
                    //Add map plus one
                    inventory.map += 1;
                    alert("You own "+inventory.map+ " map(s).");
                    inventory.coins -= 50;
                    alert("You now have "+inventory.coins+ " coins");
                    Blacksmith();
                }
                
                else if (blacksmith == "map" || blacksmith == "buy map" && inventory.coins == 100){
                    alert("You don't have enough money for that.")
                    Blacksmith();
                }
                
                else{
                    Blacksmith();
                }
                
                
            }
            
            else if (blacksmith == "leave"){
                 alert("Have a nice day!");
                TownSquare();
            }
            
            
            else{
                    alert("I don't know what "+blacksmith+" is.");
                    Blacksmith();
                }
            
        } 

        Town();
    
    
    // Deep Forest Function
    function DeepForest(){
        var spookyforest = prompt("You can't see much in front of you. It is really dark and even the brightest of lights could not be shown a couple of feet infront of you. You see that there is something hanging in a tree, you can stop to investigate or you can jsut continue down the path. \nWhat will it be? \n -Investigate \n -Continue").toLowerCase();
            switch(spookyforest){
                case "investigate":
                    var bodyinvest = prompt("As you approach the tall dark tree, you notice the silhouette of a person in the tree. It appears to be motionless, but there is a small seize coming from the body. You can either stay and see what happens or run. \n -Stay \n -Run").toLowerCase();
                    switch(bodyinvest){
                        case "stay":
                            alert("The body begins to move and falls from the tree, it hits the ground and a arm emerges for the sack. The arm pulls the mysterious mass towards you.");
                            
                            Bodyinteraction();
                            
                           break; 
                        case "run":
                            DeeperForest();
                            break;
                        default:
                            alert("I don't know what "+bodyinvest+" is.")
                            DeepForest();
                    }
                break;
            
            case "continue":
            DeeperForest();
            break;
            
                    
                default:
                    alert("I don't know what "+spookyforest+" is.")
                    DeepForest();
            }
            DeepForest();
        }
    
    
    //new area
    function DeeperForest(){
        var goblinGathering = prompt("As you walk down this dark path you notice a fire. Around the fire there are some goblins. You can sneak away, attack, or pull up a chair and have a drink with them. What will it be? \n-Sneak \n-Attack \n-Sit down").toLowerCase();
        switch(goblinGathering){
            case "sneak":
                alert("You literally know nothing about sneaking...")
                GoblinFight();
                break;
            case "attack":
                GoblinFight();
                break;
            case "sit down":
            case "sit":
                alert("These Goblins seem really kind. They pass you a drink and you have a wonderful evening hanging out with your new friends.")
                Forest();
                break;
            default:
                 alert("I don't know what "+goblinGathering+" is.")
                DeeperForest();
        }
        
        
        DeeperForest();
    }
                    
// Gobliln Fight
   function GoblinFight(){
           var attackgaboboy = prompt("There are a total of three goblins here. You can take on all three, or you can try just two, or I guess you can try your luck with one. What will you choose? \n-One \n-Two \n-Three").toLowerCase();
       switch(attackgaboboy){
           case "one":
            case"1":
               alert("You do manage to take this guy out.. two more to go.")
           case "two":
           case "2":
               alert("Two, now thats an honest number. With a nail bitingly close fight, you do manage to prevail. Lets keep this show on the road.")
               DeeperestestForestestes();
               break;
               
           case "three":
           case "3":
               alert("You are a bold being taking on three goblins at once, congrats...")
               Death();
               break;
               
           default:
               alert("I don't now what "+attackgaboboy+" is.")
               GoblinFight();
       }
   } 
    
    // Body Interaction
    function Bodyinteraction(){
        var bodymovement = prompt("The mass is within feet of you. You see the arm stop and begin to tug on the knot holding the bag closed. You can help untie the knot or kick the bag. \n -Help \n -Kick").toLowerCase();
        switch(bodymovement){
            case "help":
                AhelpingHand();
                break;
            case "kick":
                alert("The Thing in the bag really didn't like that. You get attacked..")
                Death();
                break;
                
            default:
                alert("I don't know what "+bodymovement+" is.")
                Bodyinteraction();
        }
    }
    
// Handyman
    function AhelpingHand(){
        var openbag = prompt("You reach down and grab the knot. The bag opened easily and revealed a arm.. Yep just a arm.. the arm crawls toward you. You can embrase this little helping hand as your own or you can leave it here. \n-Take \n-Leave").toLowerCase();
        switch(openbag){
            case "take":
                alert("Your new little friend seems to really like you. Now that you have a real friend, lets head out and finish this adventure.")
                DeeperForest();
                break;
                
            case "leave":
                alert("You made your little friend very sad.. Soo... he decided you aren't fit to continue.")
                EndGame();
                break;
                
            default:
                alert("I don't know what "+openbag+" is.")
                AhelpingHand();
        }
    }
  // PC can quit or go to the forest castle of death  
    function DeeperestestForestestes(){
        var partingchoices = prompt("It's now way darker and it is also really cold. You can either continue your adventure or return back to you humble home back in town. What will it be? \n-Continue \n-Leave").toLowerCase();
        switch (partingchoices){
            case "continue":
                ForestCastleOfDeath();
                break;
                
            case "leave":
                alert("I really enjoy your company, I do hope one day we will finish our adventure.")
                GGBOYS();
                break;
                
            default:
                alert("I don't know what "+partingchoices+" is.")
                DeeperestestForestestes();
        }
            DeeperestestForestestes();
    }
    
    // Forest castle of death.  
function ForestCastleOfDeath(){
    alert("Let me start by saying congrats on making it this far, many leave before this point, but "+PC+" you truly are different. Ok back to the quest.")
    var endgamecastle = prompt ("There seems to be a clearing in the middle of this ridiculous forest. In the clearing you see a massive castle with a sign that reads, 'THIS IS THE CASTLE OF DEATH' so.. take that as you please. You can turn around and quit now, or you can do the really smart thing.. and head stright into that big old castle. What do you wnat to do? \n-Quit \n-Continue").toLowerCase();  
switch (endgamecastle){
    case "quit":
        alert("I really enjoy your company, I do hope one day we will finish our adventure.")
                GGBOYS();
                break;
    case "continue":
        alert("You walk to the base of the grand stone monument of a castle. As you approach the gate at the entrance of the castle, the gate begins to open. You walk into the castle. Once you are inside you see a fire on the far end of the room and a grand tabel with a crimson velvet table runner. Silver chalices and table weres line the table. The castle looks like a well lived in establishment, yet you do not notice any signs of anyone actually being there.")
        InToTheCastle();
        break;
    default:
        alert("I don't know what "+endgamecastle+" is.")
        ForestCastleOfDeath();
}
       
}
    // Innner Castle Function
    function InToTheCastle(){
        var innerbeast = prompt("The castle is warm, but dark. You can take a look around, warm up by the fire, or you can take a drink from the chalices on the table. What will it be? \n-Warm up \n-Look around \n-Drink").toLowerCase();
        switch (innerbeast){
            case "warm up":
                alert("As you near the fire, something catches your eye to your side. You ultimately decide to you go and look around and skip the fire all together.")
                EyeOfTheDemon();
                break;
            case "look around":
            case "look":
                alert("As you begin to look around, something catches your eye to you side. So you decide to go and check it out.")
                EyeOfTheDemon();
                break;
            case "drink":
                alert("What went through your mind.. *It seems like a good idea to drink out of this random chalice in a castle in the middle of a forest* SMH, let's take a trip.")
                Forest();
                break;
            default:
                alert("I don't know what "+innerbeast+" is.")
                InToTheCastle();
        }
    }
    // First Demon Interaction
    function EyeOfTheDemon(){
        var demontime = prompt("Ya.. so, it turns out that eye catching detail to your side.. ya that is a demon. It is actually the Demon formally known as "+newdemon+". The likelihood of your survival is very small, it is actually just a "+you+"% chance. You can either run or stand your ground and fight back. What will you choose? \n-Run \n-Fight").toLowerCase();
        switch (demontime){
            case "run":
                alert("Runnning from a Demon usually isn't the best call..")
                Death();
                break;
            case "fight":
                DemonsFinalFight();
                break;
            default:
                alert("I don't know what "+demontime+" is.")
                EyeOfTheDemon();
        }
    }
    //Fight W/ The Demon
function DemonsFinalFight(){
    var fightclub = prompt("The demon begins to charge towards you... What will you do to survive, dive right or left? \n-Right \n-Left").toLowerCase();
    switch (fightclub){
        case "right":
            alert("Wrong call..")
            Death();
            break;
        case "left":
            alert("You make the correct call..")
                var nextpart = prompt("The demon does not seem to like the fact you survived.. He swings with his razor sharp claws. Dodge left or right? \n-Right \n-Left").toLowerCase();
            switch (nextpart){
                    case "right":
                        alert("You make the correct call.. kind of..")
                    LASTSTAND();
                    break;
                    case "left":
                        alert("Nope..")
                        Death();
                    break;
                    default:
                        alert("I don't know what "+nextpart+" is.")
                        DemonsFinalFight();
            }
        default:
            alert("I don't know what "+fightclub+" is.")
            DemonsFinalFight();
            
    }
}
    function LASTSTAND(){
    var lastchoice = prompt("The Demon on his last swing hit you and threw you into the corner over by the fireplace. The is a Black Steel blade on the mantle. You grab the sword and hold your ground. You can take offense or defense. \n-Offense \n-Defense").toLowerCase();
    switch (lastchoice){
        case "offense":
            alert("Taking a stand pulling the blade back and swingign with all of the might you can muster.. the blade connects. You feel the demons weight hit your blade. His blood falls like molasses down the blood letter of the blade. You now can bare claim to the castle and you now are the ruler of the forest.")
            GGBOYS();
        case "defense":
            alert("Giving the demon even a extra second cut your survival into pieces. You will not survive..")
            Death();
        default:
            alert("I don't know what "+lastchoice+" is.")
            LASTSTAND();
    }
    }
    
// Death Function
    function Death(){
    alert("You Died... Game Over");
    Death();
    }
// Game over
    function EndGame(){
        alert("Game over");
        EndGame();
    }
// Good Game
    function GGBOYS(){
        alert("Congrats, you finish the adventure. Have a wonderful day.")
        GGBOYS();
    }
    
    
 
}