img = " ";
status = " ";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('bottles.jpg');
}

function draw(){
    image(img, 0,0,640,420);

    fill("#ff00bf");
    text(" Pink Bottle ",45 ,80);
    noFill();
    stroke("#ff00bf");
    rect(40,70,110,300);

    fill("#ff8000");
    text(" Peach Bottle ",155 ,60);
    noFill();
    stroke("#ff8000");
    rect(150,50,110,320);

    fill("#ffbf00");
    text(" Yellow Bottle  ",265 ,40);
    noFill();
    stroke("#ffbf00");
    rect(260,30,110,370);

    fill("#7FFFD4");
    text(" AquaMarine Bottle  ",375,60);
    noFill();
    stroke("#7FFFD4");
    rect(370,50,110,320);

    fill("#0000ff");
    text(" Blue Bottle  ",485,80);
    noFill();
    stroke("#0000ff");
    rect(480,70,110,300);



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