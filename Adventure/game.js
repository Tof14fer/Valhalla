// Single Line Comment
/*

Multi-Line Comment

*/

/*
alert("Warning!! Will Robinson... Warning!!");

confirm("Do you like Pokemon");

prompt("What type of Pokemon do you like?");*/



Game();
Inventory();

function Game(){
    
alert("The Legend of the Really Dark Forest");
    
    var PC = prompt("What shall I call you traveler?");
    
    alert("Welcome to the land of the semi-linving, "+PC);
    
    Forest();
    
    function Forest(){
        var Forest = prompt("So here's the run down.. I guess you partied a bit to hard last night. You are now laying in the middle of a ridiculously dark forest and can't see much around yourself. \n -Look around \n -Sit down and cry a bit \n -Start to sprint in the dark screaming").toLowerCase();
        
        if(Forest == "look around" || Forest == "look"){
            var forestLook = confirm("About three feet in front of you there is a super conveniently placed flash light, you're welcome. \n -Would you like to take the take the Flashlight?");
            if(resume){alert ("Flashlight added to you're inventory.")
            else if{alert ("Something really big and mean likes the dark as cover. This unfaced beast comes up behind you and \nBAM!! \nYou Died..")}
            }
        }
    }
}