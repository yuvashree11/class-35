var ball;
var database;
var position;
var ballposition;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    ballposition = database.ref("ball/position");
    ballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
     database.ref("ball/position").set({
       'x':position.x+x,
       'y':position.y+y,
     })
    
}
function readposition(data){
    position = data.val();
    ballposition.x = position.x;
    ballposition.y = position.y;
}
function showerror(){
    console.log(errow)
}
