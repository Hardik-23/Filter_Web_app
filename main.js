moustachex=0
moustachey=0

function preload() {
moustache = loadImage('https://i.postimg.cc/NFFYzj1z/moustache.webp')
}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, moustachex, moustachey, 30, 30);
}

function take_snapshot()
{
    save('moustache.png')
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        moustachex =results[0].pose.nose.x-15;
        moustachey =results[0].pose.nose.y;
        console.log("moustache x = " + moustachex);
        console.log("moustache y = " + moustachey);

    }
}