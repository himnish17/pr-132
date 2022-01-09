img = " ";
status = " ";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload(){
    img = loadImage('living room.jpg');
}

function draw(){
    image(img, 0,0,640,420);
    
    
    fill("#FF0000");
    text("Plants", 5,90);
    noFill();
    stroke("#FF0000");
    rect(0,80,150,400);

    fill("#FF0000");
    text("Couch and Pillows", 155,160);
    noFill();
    stroke("#FF0000");
    rect(150,150,400,200);

    fill("#FF0000");
    text("Plants", 335,230);
    noFill();
    stroke("#FF0000");
    rect(330,220,400,200);

    fill("#FF0000");
    text("Lights", 275,10);
    noFill();
    stroke("#FF0000");
    rect(270,0,200,100);
}
function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error, results ){
    if(error){
        console.log(error);
    }
    console.log(results);
}