let canvas;
let randX;
let randY;
let smallPoint;
let largePoint;
let img;
let x;
let y;
let inconsolata;

let offset = 0;
let easing = 5;

let selectMenu;
let submitButton;

let imageArray = [];
let categoryArray = [];
let interestArray = [];
;
  let val;

function preload(){
  table = loadTable('csv/dataSelfPortrait.csv', 'csv', 'header');
  inconsolata = loadFont('assets/Inconsolata_Expanded-ExtraBold.ttf');
  }

function setup(){
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  imageMode(CENTER);
  textAlign(CENTER);
  textFont(inconsolata);
  textSize(40);
//  smallPoint = 4;
//  largePoint = 40;
  noStroke();

  for(let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage('images/' + table.getString(i, 'image'));
    categoryArray.push(table.getString(i, "category"));
    interestArray.push(table.getString(i, "facebookInterest"));
    imageArray[i].loadPixels();
  }
  selectMenu = createSelect();
  selectMenu.option('Animals');
  selectMenu.option('Art');
  selectMenu.option('Career');
  selectMenu.option('Celebrities');
  selectMenu.option('Events');
  selectMenu.option('Food');
  selectMenu.option('Movies');
  selectMenu.option('Music');
  selectMenu.option('News');
  selectMenu.option('Online shopping');
  selectMenu.option('Politicians');
  selectMenu.option('Social justice');
  selectMenu.option('Sports');
  selectMenu.option('Travel');
  selectMenu.option('TV Shows');
  selectMenu.option('Wellness');
  selectMenu.position(20, 40);
  selectMenu.style('z-index', '2');
  selectMenu.style('font-size', '30px');
  selectMenu.position((windowWidth/2 - 120), (windowHeight/2 - 100));
  submitButton = createButton('Submit');
  submitButton.position(windowWidth/2 - 50, windowHeight/2 - 2);
  submitButton.mousePressed(ask);
  submitButton.style('z-index', '2');
  submitButton.style('font-size', '30px');
  submitButton.style('background-color', 55);
  }




function ask(){
background(255);
  val = selectMenu.value();

    for(let i = 0; i < table.getRowCount(); i++){
        if(val == categoryArray[i]){
        randX = random(50, windowWidth - 50);
        randY = random(50, windowHeight - 50);
        image(imageArray[i], randX, randY);
        text(interestArray[i], randX, randY+70);
        draw(categoryArray[i]);

  }
  }
}
function draw(){
for(let i = 0; i < table.getRowCount(); i++){
//  if(val == categoryArray[i]){
//  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
//  let x = floor(random(imageArray[i].width));
//  let y = floor(random(imageArray[i].height));
//  let pix = imageArray[i].get(x, y);
//  fill(pix, 128);
//  ellipse(x, y, pointillize, pointillize);
//}
//}
//   for(let i = 0; i < table.getRowCount(); i++){
//   // let img = imageArray[i];
//   // img.loadPixels();
//   // let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
//   // let x = floor(random(imageArray[i].width));
//   // let y = floor(random(imageArray[i].height));
//   // let pix = imageArray[i].get(x,y);
//   // fill(pix, 500);
//   // ellipse(x, y, pointillize, pointillize);
 if(selectMenu.value() == categoryArray[i]){
    image(imageArray[i], 0, 0);
    let dx = mouseX - imageArray[i].width/2 - offset;
    offset += dx * easing;
    tint(255,127);
    image(imageArray[i], offset, 0);
}
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1230);
  text(interestArray[i], 0, 0);
}
}
