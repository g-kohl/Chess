var square
var classSquare=[]
var classSquare2=[]
var controlMove = 0

function move(clicked_id){
    if(controlMove == 0){
        square = clicked_id;
        controlMove++;
    }
    else{
        classSquare = document.getElementById(square).classList;
        classSquare2 = document.getElementById(clicked_id).classList;
        document.getElementById(clicked_id).classList.remove(classSquare2[2])
        document.getElementById(clicked_id).classList.add(classSquare[2]);
        document.getElementById(square).classList.remove(classSquare[2]);
        controlMove--;
    }
}