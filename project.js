noseX=0;
noseY=0;
leftWrist=0;
rightWrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    document.getElementById("square_side").innerHTML="Width and the Height of the text will be:"+difference+"px";
    canvas= createCanvas(400,400);
    canvas.position(800,100);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    background('pink');
    textSize(difference);
    fill("#cb60e6");
    text('Hello', leftWrist, rightWrist);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function gotPoses(results){
    if(results.length > 0){
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        console.log("leftWrist x="+leftWrist);
        console.log("rightWrist y="+leftWrist);
        console.log(results);
        console.log("leftWrist x="+results[0].pose.leftWrist.x);
        console.log("rightWrist y="+results[0].pose.rightWrist.y);
        difference=floor(leftWrist-rightWrist);
        console.log("leftWrist="+leftWrist+"rightWrist="+rightWrist+"difference="+difference);

    }
}