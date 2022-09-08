/*
    Implement the functions below so that the prince can
    reach his beloved princess.

    HINT: use the BROWSER DEVELOPER TOOLS.
*/

let turn1 = "down";
let turn2 = "up";
function getStairsMovementDirection(stairNumber, isClimbingStairs) {
    /* Implement the function to return "left", "right", "up", "down"
       based on the values of the parameters "stairNumber" and "isClimbingStairs"
       so that prince will descend and ascend the stairs.
       HINT: to avoid writing a lot of if else, if else, if else...
       you can see if the stair number can be divided by a certain number
    */
       while(isClimbingStairs == false){
        if(turn1 == "down"){
           turn1 = "right";
            return "down";
        }else turn1 = "down";{
            return "right";
        }
    
        }
    while (isClimbingStairs == true){
        if(turn2 == "up"){
           turn2 = "right";
           return "up";
        }else turn2 = "up";
        return "right";
    }
    
            }


let step = 0;

function getZigZagMovementDirection(step) {
    /* Implement the function to return "left", "right", "up", "down"
       based on the values of the parameters "step" so that prince will reach the keyboard symbol on the map.
       HINT: to avoid writing a lot of if else, if else, if else...
       you can see if the step can be divided by a certain number for "up" and another number for "down"
    */
     
      
  if (step%3 == 0){
    if(step%2 == 0) return 'up'; 
    else return 'down';
  } else return 'right';
       
    
}



let changeValue = true;
function manuallyControl(key) {
    // when moving the prince using the keyboard you can call the already implemented
    // function `moveDirection` with the STRING as PARAMETER `left`, `right`, `up`, `down`.
    if(key === "KeyQ"){
        changeValue = !changeValue;
        console.log('changevalue is', changeValue)
    }

    if(changeValue) {

        if(key == "ArrowUp") moveDirection("up");
        if(key == "ArrowDown") moveDirection("down");
        if(key == "ArrowLeft") moveDirection("left");
        if(key == "ArrowRight") moveDirection ("right");
        //do something
    }

    if (!changeValue){
        if(key == "KeyW") moveDirection("up");
        if(key == "KeyS") moveDirection("down");
        if(key == "KeyA") moveDirection("left");
        if(key == "KeyD") moveDirection ("right");
        //do something else
    }
    console.log(`[manuallyControl] received key pressed: ${key}`)



}


function givePotion2Answer(list) {
    let sum =0;
   for(let i of list) { 
  if (i % 2 == 0) {
     sum = sum + i;
  }
}
return sum;
}

function givePotion3Answer(list){
    let max= list[0];
  
    for (let i of list) {
        if (i >= max) {
            max = i ;
        }

    }
    return max;
}




function givePotion6Answer(list){
    let sum = 0;

     let newArr = list.split("*");
     for ( i of newArr) {
        if (i != "") {
    sum = sum + parseInt(i);}
     }
     return sum;
 }

 
 function givePotion12Answer(list){

    let x= list.length;
    let s=0;
    for (let i = 0; i<x; i++){
        s = s + Math.abs(list[i]);
    }
return s;

 }
 
   
 function givePotion9Answer(list) {
    let s = 0;
list = list.sort ((a,b) => {
    return a-b;
});
s = list[0] + list[1];
return s;
 }
   
 function givePotion4Answer(list, test) {
    console.log(list[0])
    console.log(test)
    let result = ""
    for(let i=0; i<list.length; i++) {
        for(let x=0; x<test.lenght; x++){
            if(list[i]==text[x]) {
                result += list[i].toUpperCase();
            }  
            else{
                result = result + list[i];
            }
        }

    }
        return result;

  }
 
 function givePotion10Answer(letterToFind, letters) {
    let x= letters.length;
    let s=-1;
    for(var i=0; i<x; i++){
        if(letterToFind==letters[i])
        s=i;
    }
    return s;
   
}
function givePotion5Answer(hours, minutes, seconds, secondsToAdd) {
    let secondsTotal = seconds + secondsToAdd;
    if(secondsTotal>=60){
        seconds=secondsTotal%60;
        minutes++ ;

    };

    if(minutes>=60){
        minutes=minutes%60;
        hours++ ;

    };

    if(hours>=24){
       hours = 0;

    };
    let finalTime = `${hours}:${minutes}:${seconds}` ;
return finalTime;

}
function givePotion7Answer(input) {
	let sum = 0;
	for (let i = 0; i < input.length; i++){
		if (!isNaN(input.charAt(i))) {
			console.log(input.charAt(i));
			console.log(parseInt(input.charAt(i)));
			sum += parseInt(input.charAt(i));
		}
	}
	
	return sum;
}
function givePotion8Answer(x){
    if (x % x ==0) return true;
    else return false;
}
function givePotion11Answer(list, letterToReplace, letterToPutInstead){
    return list.split(letterToReplace).join(letterToPutInstead)
}