rightwristX = 0;
leftwristX = 0;
difference = 0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
   background('#65FFF1');
   fill('#a8392a');
   stroke('#a8392a');
   textSize(difference)
   document.getElementById("square_side").innerHTML="font size of the text would be" + difference;
   text('Adhitya Prasanna',50,400)
}

function modelLoaded() {
    console.log("your model is loaded");
}
function gotPoses(results) {
    if (results.length > 0){
    console.log(results)
    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX - rightwristX)
    console.log("left wrist x =" + leftwristX + "rightwristX = " + rightwristX + "difference = " + difference)
    }
};