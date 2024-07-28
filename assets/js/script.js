console.log("I live");
var player = false;
var gameEl = document.querySelector(".game");
for (var i = 0; i<9; i++){
    var spaceEl = document.createElement("div");
    spaceEl.classList = ("card "+i);
    spaceEl.dataset.number = i+1;
    gameEl.appendChild(spaceEl);
}

var cardEls = document.querySelectorAll(".card");

function clearSpaces(){
    for (var i =0; i<9;i++){
        cardEls[i].innerHTML = "";
        cardEls[i].dataset.player="";
        cardEls[i].classList.remove("O");
        cardEls[i].classList.remove("X");
        p1spaces=[];
        p2spaces=[];
        moves = 0;
        player = false;
        document.querySelector(".turn").innerHTML = "Player 1 Turn";
    }
}

var p1spaces  = [];
var p2spaces = [];
var p1score = 0;
var p2score = 0;
var moves = 0;

for (var i = 0; i<9;i++){
    cardEls[i].addEventListener("click",function(){
        console.log("click");
        if (player){
            moves++;
            document.querySelector(".turn").innerHTML = "Player 1 Turn";
            this.innerHTML = "O";
            this.dataset.player="O";
            this.classList.add("O");
            
            player = false;
            p2spaces.push(this.dataset.number);
            if(p2spaces.includes("1")&&p2spaces.includes("4")&&p2spaces.includes("7")){
                p2score++;
                document.querySelector(".score2").innerHTML = p2score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p2spaces.includes("1")&&p2spaces.includes("5")&&p2spaces.includes("9")){
                p2score++;
                document.querySelector(".score2").innerHTML = p2score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p2spaces.includes("1")&&p2spaces.includes("2")&&p2spaces.includes("3")){
                p2score++;
                document.querySelector(".score2").innerHTML = p2score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p2spaces.includes("2")&&p2spaces.includes("5")&&p2spaces.includes("8")){
                p2score++;
                document.querySelector(".score2").innerHTML = p2score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p2spaces.includes("3")&&p2spaces.includes("6")&&p2spaces.includes("9")){
                p2score++;
                document.querySelector(".score2").innerHTML = p2score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p2spaces.includes("3")&&p2spaces.includes("5")&&p2spaces.includes("7")){
                p2score++;
                document.querySelector(".score2").innerHTML = p2score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p2spaces.includes("7")&&p2spaces.includes("8")&&p2spaces.includes("9")){
                p2score++;
                document.querySelector(".score2").innerHTML = p2score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p2spaces.includes("5")&&p2spaces.includes("4")&&p2spaces.includes("6")){
                p2score++;
                document.querySelector(".score2").innerHTML = p2score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            
        }
        else if(!player){
            moves++;
            document.querySelector(".turn").innerHTML = "Player 2 Turn";
            this.innerHTML = "X";
            this.dataset.player="X";
            this.classList.add("X");
            player = true;
            p1spaces.push(this.dataset.number);
            if(p1spaces.includes("1")&&p1spaces.includes("4")&&p1spaces.includes("7")){
                p1score++;
                document.querySelector(".score1").innerHTML = p1score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p1spaces.includes("1")&&p1spaces.includes("5")&&p1spaces.includes("9")){
                p1score++;
                document.querySelector(".score1").innerHTML = p1score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p1spaces.includes("1")&&p1spaces.includes("2")&&p1spaces.includes("3")){
                p1score++;
                document.querySelector(".score1").innerHTML = p1score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p1spaces.includes("2")&&p1spaces.includes("5")&&p1spaces.includes("8")){
                p1score++;
                document.querySelector(".score1").innerHTML = p1score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p1spaces.includes("3")&&p1spaces.includes("6")&&p1spaces.includes("9")){
                p1score++;
                document.querySelector(".score1").innerHTML = p1score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p1spaces.includes("3")&&p1spaces.includes("5")&&p1spaces.includes("7")){
                p1score++;
                document.querySelector(".score1").innerHTML = p1score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p1spaces.includes("7")&&p1spaces.includes("8")&&p1spaces.includes("9")){
                p1score++;
                document.querySelector(".score1").innerHTML = p1score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(p1spaces.includes("5")&&p1spaces.includes("4")&&p1spaces.includes("6")){
                p1score++;
                document.querySelector(".score1").innerHTML = p1score;
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            else if(moves == 9){
                setTimeout(function(){
                    clearSpaces();
                }, 1000);
            }
            
        }
    })
}

