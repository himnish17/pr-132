img = " ";
status = " ";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('desk.jpg');
}

function draw(){
    image(img, 0,0,640,420);

    fill("#FF0000");
    text("Diary with pen ",35 ,150);
    noFill();
    stroke("#FF0000");
    rect(30,140,150,300);

    fill("#FFFF00");
    text("Laptop", 320,300);
    noFill();
    stroke("#FFFF00");
    rect(170,0,250,320);

    fill("#40FF00");
    text("Mobile",430,335);
    noFill();
    stroke("#40FF00");
    rect(420,220,50,120);

    fill("#00ffff");
    text("Coffee Mug",535,230);
    noFill();
    stroke("#00ffff");
    rect(530,220,90,120);

    fill("#0000ff");
    text("Note Book",425,30);
    noFill();
    stroke("#0000ff");
    rect(420,20,150,200);

    fill("#40ff00");
    text("Plant",20,140);
    noFill();
    stroke("#40ff00");
    rect(0,0,150,150);
    
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