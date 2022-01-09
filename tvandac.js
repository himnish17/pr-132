img = " ";
status = " ";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('tv and ac.jpg');
}

function draw(){
    image(img, 0,0,640,420);
    fill("#FF0000");
    text("AC", 47,75);
    noFill();
    stroke("#FF0000");
    rect(30,30,450,150);

    fill("#FF0000");
    text("TV", 65,210);
    noFill();
    stroke("#FF0000");
    rect(60,200,300,150);

    fill("#FF0000");
    text("Switches", 5,390);
    noFill();
    stroke("#FF0000");
    rect(0,380,200,200);
    
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