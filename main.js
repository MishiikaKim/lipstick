noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    tint_color = "";
}

function draw(){
    image(video,0,0,500,500);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose, noseX-80, noseY-10, 40, 40);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
