function test(direction) {
    moveDirection(direction)
}

let upMove = false;
let downMove = false;
let rightMove = false;
let leftMove = false;
let zigzag = false;
let lastDown = false;


function level2Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince) {
    // the prince should move down first, the problem is that the amount
    // of times to move changes from one level to another. Try to find out
    // based on the variables "elementLeftOfPrince", "elementRightOfPrince",
    // "elementUpOfPrince", "elementDownOfPrince"
    
    while(elementDownOfPrince !== 13 && downMove == false && rightMove == false){
        return test("down");
    };

    if (elementDownOfPrince == 13){
        downMove = true
    }

    while(elementRightOfPrince !== 13 && downMove == true && rightMove == false){
        return test("right")
    };

    if (elementRightOfPrince == 13){
        rightMove = true
    }

    while(elementUpOfPrince !== 13 && downMove == true &&  rightMove == true && upMove == false){
        return test("up")
    };

    if(elementUpOfPrince == 13){
        upMove = true
    }

    while(elementLeftOfPrince !== 13 && upMove == true && leftMove == false && downMove == true){
        return test("left")
    };
    if(elementLeftOfPrince == 13){
        leftMove = true

    }

    while (upMove == true && zigzag == false) {
        while (elementLeftOfPrince != 13) {
            return test("left");
        }

        if (elementLeftOfPrince == 13 && elementUpOfPrince != 13 && elementDownOfPrince == 13) {
            return test("up");
        }

        if (elementLeftOfPrince == 13 && elementUpOfPrince == 13 && elementDownOfPrince != 13 && lastDown == false) {
            return test("down");
        }

        if (elementUpOfPrince != 13 && elementRightOfPrince != 13 && elementDownOfPrince != 13) {
            zigzag = true;;
        }
    }

    while (zigzag == true && elementDownOfPrince != 13) {
        return test("down");
    }

    while (zigzag == true && elementDownOfPrince == 13 && elementRightOfPrince != 13) {
        return test("right");
    }

    if (zigzag == true && elementRightOfPrince == 13)  {
        final = true;
    }
    console.log(final);
    while (final) {
        return test("up");
    }
    

    // while(elementUpOfPrince !== 13 && leftmove == true && downMove == true && upMove == fals)

    
    // the prince should move right second, the problem is that the amount
    // of time to move changes from one level to another
    // HINT: try to create a function that would receive the parameters
    // up/down/left/right and the amount of times to move


    // the prince should move up third, the problem is that the amount
    // of time to move changes from one level to another
    // HINT: try to create a function that would receive the parameters
    // up/down/left/right and the amount of times to move

    // the prince should move in a zig-zag pattern. Unfortunately the amount
    // of times changes from one level to another
    // HINT: try to create a function that would receive the parameters

    // to finally reach the princess the prince should move down and sometimes
    // to left or right, depending on the level
}