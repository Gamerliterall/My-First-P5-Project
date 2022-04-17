function setup()
{
    canvas = createCanvas(3, 180);
    canvas.position(570, 180);
    video = createCapture(VIDEO);
    video.size(350, 180);
    video.position(510, 180);
}

function draw()
{
    camera(10, 10, 150, 120);
    fill(0, 128, 0);
    stroke(0, 120, 0);
}

function take_snapshot()
{
    save("image.png");
}