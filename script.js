var square
var classSquare=[]
var classSquare2=[]
var classOptions=[]
var controlMove = 0
var idPromotion

function move(clicked_id){
    if(controlMove == 0){
        if(document.getElementById(clicked_id).classList[2] != "x"){
            square = clicked_id;
            controlMove++;
        }
        else{
            window.alert("Você não selecionou nenhuma peça")
            controlMove = 0;
        }
    }
    else{
        if(clicked_id == "trashCan"){
            classSquare = document.getElementById(square).classList;
            console.log(document.getElementById(square).classList[2]);
            document.getElementById(square).classList.remove(classSquare[2]);
            console.log(document.getElementById(square).classList);
            controlMove--;
        }
        else{
            classSquare = document.getElementById(square).classList;
            classSquare2 = document.getElementById(clicked_id).classList;
            document.getElementById(clicked_id).classList.remove(classSquare2[2]);
            document.getElementById(clicked_id).classList.add(classSquare[2]);
            document.getElementById(square).classList.remove(classSquare[2]);
            document.getElementById(square).classList.add("x")

            if(clicked_id.includes("8") || clicked_id.includes("1")){
                if(document.getElementById(clicked_id).classList[2] == "pawnw"){
                    document.getElementById("optionsWhite").style.display = "block";
                }
                else if(document.getElementById(clicked_id).classList[2] == "pawnb"){
                    document.getElementById("optionsBlack").style.display = "block";
                }
                idPromotion = clicked_id
            }
            controlMove--;
        }        
    }
}

function promotion(clicked_className){
    classOptions = document.getElementsByClassName(clicked_className).classList;
    classSquare2 = document.getElementById(idPromotion).classList;
    document.getElementById(idPromotion).classList.remove(classSquare2[2]);
    document.getElementById(idPromotion).classList.add(clicked_className.substr(15,21));

    document.getElementById("optionsWhite").style.display = "none";
    document.getElementById("optionsBlack").style.display = "none";
}
