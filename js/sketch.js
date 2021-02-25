let canvas;
let randX;
let randY;
let smallPoint;
let largePoint;
let img;
let x;
let y;

let selectMenu;
let submitButton;

let imageArray = [];
let categoryArray = [];
let interestArray = [];

function preload(){
  table = loadTable('csv/dataSelfPortrait.csv', 'csv', 'header');
  }

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  imageMode(CENTER);
  textAlign(CENTER);
  smallPoint = 4;
  largePoint = 40;
  noStroke();

  for(let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage('images/' + table.getString(i, 'image'));
    categoryArray.push(table.getString(i, "category"));
    interestArray.push(table.getString(i, "facebookInterest"));
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
  submitButton = createButton('Submit');
  submitButton.position(300, 200);
  submitButton.mousePressed(ask);
  submitButton.style('z-index', '2');
  }




function ask(){
background(255);
  let val = selectMenu.value();

    for(let i = 0; i < table.getRowCount(); i++){
        if(val == categoryArray[i]){
      //    randX = random(50, windowWidth - 50);
      //    randY = random(50, windowHeight - 50);
          let img = imageArray[i];
          img.loadPixels();
          let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
          let x = floor(random(imageArray[i].width));
          let y = floor(random(imageArray[i].height));
          let pix = imageArray[i].get(x,y);
          fill(pix, 128);
          ellipse(x, y, pointillize, pointillize);
        //  image(imageArray[i], randX, randY, 100, 100);
        //  text(interestArray[i], randX, randY+70);
  }
  }
}
function draw(){

}
