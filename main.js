function preload(){
}
function setup(){
    canvas = createCanvas(640,480);
    video = createCapture(VIDEO);
    canvas.position(650,100);
    video.size(640,480);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
   
}
function draw(){
    background('#2AD5AF');
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}