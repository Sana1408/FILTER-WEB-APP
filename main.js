lipstickX= 0;
lipstickY=0;

function preload(){
    lipstick = loadImage('https://i.postimg.cc/QCTmwY91/l1.png');
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas= canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick, lipstickX, lipstickY, 45, 25);
}

function take_snapshot(){
    save("selfie.png");
    }

function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            lipstickX = results[0].pose.nose.x - 40;
            lipstickY = results[0].pose.nose.y;
            console.log("nose x ="+ results[0].pose.nose.x);
            console.log("nose y ="+ results[0].pose.nose.y);
        }
    }