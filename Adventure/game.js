// Single Line Comment
/*

Multi-Line Comment

*/

/*
alert("Warning!! Will Robinson... Warning!!");

confirm("Do you like Pokemon");

prompt("What type of Pokemon do you like?");*/



Game();

function Game(){
    
alert("The Legend of the Really Dark Forest");
    
    var PC = prompt("What shall I call you traveler?");
    
    alert("Welcome to the land of the semi-linving, "+PC);
    
    Forest();
    
    function Forest(){
        var forest1 = prompt("So here's the run down.. I guess you partied a bit to hard last night. You are now laying in the middle of a ridiculously dark forest and can't see much around yourself. \n -Look around \n -Sit down and cry a bit \n -Run and Scream").toLowerCase();
        
        if(forest1 == "look around" || forest1 == "look"){
            
            var forestLook = confirm("About three feet in front of you there is a super conveniently placed flash light, you're welcome. \n -Would you like to take the take the Flashlight?");
            if (forestLook){
                alert ("A Flashlight was added to your inventory.");
                
            var directiontogo = prompt("Now that you have a light you can see some of the things that are lurking around you. You notice there are two paths you can take. You can either go north or west. Which way do you want to go? \n -North \n -West").toLowerCase();{
                
                if(directiontogo == "north"){
                
            var northboundtown = alert("So, you see a small town further along the path.. Would you like to continue to the town or turn back?... Hah like you had a choice.");
                alert ("Ok, then lets get to that town!!");
                Town();}
                
            else if(directiontogo == "west"){
                
                var westward = alert ("Well.. I guess we are heading further into the forest. Here we go!!!");
                    DeepForest();
                }
            }
                
                
                
                
                
                
                
            }
            
            else if (!forestLook){
                alert ("Something really big and mean likes the dark as cover. This unfaced beast comes up behind you and \nBAM!! \nYou Died..");}
            }
        
    else if(forest1 == "sit down" || forest1 == "cry" || forest1 == "sit down and cry a bit" || forest1 == "sit" || forest1 == "cry a bit" || forest1 == "sit and cry"){
        
        var cryingabit = confirm("Okay.. so if this is how the whole adventure is going to be I don't think this is going to work out.. Do you want to continue playing?");
        if (cryingabit){
            alert ("Ok lets get going again.");
            Forest();
        }
        else if (!cryingabit){
            alert ("Well then I guest this is goodbye... Game Over.");
        }
    }
        else if(forest1 == "run and scream" || forest1 == "run" || forest1 == "scream"){
    alert("You start at a dead sprint... sadly you are in the dark so you hit a tree and passed out!! You wake up right where you started.");
        }
            Forest();
        
   //Forests end bracket
    }
    function Town(){
        var township = alert("Welcome to our Town.");
    }
    Town();
    
    
    function DeepForest(){
        var forest2 = prompt("OOF this is spooky..");
    }
    DeepForest();
    
 
}