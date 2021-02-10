let img;


function preload() {
  const imgUrl ="taco4.png";
  img= loadImage(imgUrl);
}

function setup() {
  imageMode(CENTER);
  createCanvas(500, 500);
}

function draw() {
  background(9000);
    translate(150, 150);
    frameRate(100);
    rotate(radians(frameCount));
  image(img, 0, 0, 150, 150)

}