difference=0;
leftWristX=0;
rightWristX=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 130);

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
   
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    }

    
}


function draw()
{
    background('#82ebed');

    document.getElementById("textsize").innerHTML = "Width And Height of a Text will be = " + difference +"px"
    fill('#F90093');
    stroke('#f90093');
     textSize(difference);
     text("Pranathi",100,275);

}
