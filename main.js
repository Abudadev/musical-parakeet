var noseX = 0;
var noseY = 0;
var rightWristX = 0;
var leftWristX = 0;
var diff = 0;

function preload(){

}

function setup(){
 canvas = createCanvas(450,450);
 canvas.position(750,150);
 video = createCapture(VIDEO);
 video.size(450,450);
 poseNet = ml5.poseNet(video,ML);
 poseNet.on("pose",gotposes);
}

function draw(){
 background("pink");
 textSize(diff);
 text("Abubaqr",noseX,noseY);
 document.getElementById("number").innerHTML = diff;
}

function ML(){
    console.log("I am ready to poseNet!");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        
        diff = Math.floor(leftWristX - rightWristX);
    }
}