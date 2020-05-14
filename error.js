var x = 0;
var timer;

let button01;
let button02;


function setup() {
    createCanvas(windowWidth, windowHeight);

    // Animation Line
    timer = createP('timer');

    button01 = createButton('hi');
    button01.position(20, 50);
    // button.mousePressed('Link to another html-site');

    button02 = createButton('by');
    button02.position(50, 50);
    // button.mousePressed('Link to another html-site');

    // Timer Aussehen
    timer.style('text-font', '"Orbitron"', '200px');
    timer.style('font-size', '200px');
    timer.style('color', '#ffffff');
    timer.position(width / 2, height / 2);
}

function draw() {
    background(255, 43, 0);

    // Animation Line
    timer.html(frameCount);

    fill(255);
    textFont("Orbitron");
    textSize(32);
    text('error', 50, 30);

    // Animation Line
    stroke(255);
    line(x, 0, x, height);

    x = x + 50;
    if (x > width) {
        x = 0;
    }


}