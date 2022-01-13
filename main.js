noseX=0;
noseY=0;

function preload(){
    moustache= loadImage("https://th.bing.com/th/id/R.6425435d7a6c8c431b7cd31954c4b273?rik=hu2TkcFnBhVJgA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f11%2fNo-Shave-Movember-Day-Mustache-PNG-Image.png&ehk=agqd09Mq%2b21khIeVYnCSCv%2bUcDyMNKIfDXX9Om0XLxc%3d&risl=&pid=ImgRaw&r=0")
    glasses= loadImage("https://th.bing.com/th/id/R.9b22502a39ed64b619a6802701f80448?rik=l2wXrvNxopTxUQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fM%2fv%2fX%2fl%2fY%2f8%2fred-glasses-hi.png&ehk=56OUS%2bbdHZ2L5UsIQjwLIXidrjzr1r%2f%2fb8nHH5BOEmQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1")
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();

    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function modelLoaded() {
    console.log("Pose Net is initialised");
}

function gotPoses(results)
{
if (results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x-15;
    noseY= results[0].pose.nose.y-15;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}
}

function draw(){
image(video, 0, 0, 300, 300);

image(moustache, noseX-25, noseY+24, 80, 30);
image(glasses, noseX-48, noseY-40, 120, 60);
}

function takeSnapshot(){
    save('mySelfie.png');
}