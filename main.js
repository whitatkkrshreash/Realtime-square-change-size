noseX=0;
noseY=0;
left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,500);
    canvas.position(560,150);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("NoseX value:"+noseX+"  noseY Value:"+noseY);
        left_wrist_x= results[0].pose.leftWrist.x;
        right_wrist_x= results[0].pose.rightWrist.x;
        difference= floor(left_wrist_x-right_wrist_x);
        console.log("left_wrist_x"+left_wrist_x+"right_wrist_x"+right_wrist_x+"difference"+difference);
    }
}
function draw(){
    background('#FF0000');
    document.getElementById('square_side').innerHTML="Size of the square will be:  "+difference+"px";
    fill('#00ff3c');
    stroke('#00d9ff');
    square(noseX,noseY,difference);
}