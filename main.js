function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(105, 180);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function draw() {
}
function modelLoaded() {
    console.log('Model Loaded!');
  }
function gotPoses(results)
{
    if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
}