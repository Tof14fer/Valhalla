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


Game();

function Game(){
    
    //var wizardNames = ["Zork", "AhCoo", "John"];
    
alert("The Legend of the Really Dark Forest");
    
    var PC = prompt("What shall I call you traveler?");
    
    while(!confirm("Are you sure you want "+PC+" to be your name?")){
        PC = prompt("What name do you want?");
    }
    
    alert("Welcome to the land of the semi-living, "+PC);
    
    Forest();
    
    function Forest(){
        var forest1 = prompt("So here's the run down.. I guess you partied a bit to hard last night. You are now laying in the middle of a ridiculously dark forest and can't see much around yourself. \n -Look around \n -Sit down and cry a bit \n -Run and Scream").toLowerCase();
        
        if(forest1 == "look around" || forest1 == "look"){
            
            var forestLook = alert("About three feet in front of you there is a super conveniently placed flash light, you're welcome.");
                alert ("Now you have a flashlight my friend.");
                Pathfromstart();
        }
                
      
            
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
        
        
        function Inn(){
            var innskeeper = prompt("Welcome to my humble home, we can get you in a room and food in your belly of 50 coins. Would you like to stay? \n-Stay \n-Leave").toLowerCase();
            if (innskeeper == "stay" && inventory.coins >= 50){
                inventory.food += 1;
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
    var = prompt ("There seems to be a clearing in the middle of this ridiculous forest. In thsi clearing you see a massive castle with a sign that reads, 'THIS IS THE CASTLE OF DEATH' so.. take that as you please.")
    
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