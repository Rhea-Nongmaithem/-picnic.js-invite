let bubbles = []
let x;
let y;
let r;
let num = 400;
let ch;
ch = 0;
let speed;
speed = [1.5,2,2.5,3,3.5,4];
let bgcolour = [' #fff9c8dc'];
let textcolour = [' #e37979ff',' #6339d5ff','#c63bd0ff']
let colours = [' #e7feadf1',' #bffbff64',' #e3bbffd8', ' #54197070', ' #ff85c0af','#9f93ffaf'];
//function preLoad(){
  //myFont = loadFont('assets/fonts/Retro Gaming.ttf');}
function setup(){
  scale(0.5);
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('c');
  frameRate(20)
  textSize(16);
  for (let i = 0;i<num;i++){
    let x = random(windowWidth);
    let y = random(windowHeight);
    let r = random(50,80);
    b = new Bubble(x,y,r);
    bubbles.push(b);
  }
}
//function mousePressed(){
  //for (let i = 0;i<bubbles.length;i++){
    //bubbles[i].clicked();
  //let r = random(10,50);
  //let b = new Bubble(mouseX,mouseY, r);
  //bubbles.push(b);
  //}
//}

function draw(){
    background('#1c0210ff');
    //bubble.move()
    //bubble.show()
    for (let i = 0;i<bubbles.length;i++){
        bubbles[i].hover();
        bubbles[i].move();
        bubbles[i].show();
    }

    textFont('Courier New');

    fill(random(textcolour));
    textAlign(LEFT);
    text('Hello!',windowWidth/8,windowWidth/8);

    fill(random(textcolour));
    textAlign(LEFT);
    text('The first picnic.js is here',windowWidth/16,windowHeight*(2/16));
    textAlign(LEFT);
    text('and you are invited.',windowWidth/16,windowHeight*(3/16));
  
    fill(random(textcolour));
    textAlign(CENTER, CENTER)
    text('Come over to learn,',windowWidth/2,windowHeight*(6/16));

    fill(random(textcolour));
    textAlign(CENTER, CENTER);
    text('Come over to create,',(windowWidth/2),windowHeight*(7/16));

    fill(random(textcolour));
    textAlign(CENTER, CENTER)
    text('Come over to share some fun ideas',(windowWidth/2),windowHeight*(8/16));
    text('with p5.js',(windowWidth/2),windowHeight*(9/16));

    fill(random(textcolour));
    text('This Friday, November the 14th',windowWidth/2, windowHeight*(6/8));
    textAlign(CENTER, CENTER);
    text('Juno (and beyond) at 5.30 pm',windowWidth/2, windowHeight*(13/16));}

class Bubble {
    constructor(x,y,r){
        this.x = x; //x here temporarily receives value and passes onto this.
        this.y = y;
        this.r = r;
        //this.brightness =random('#ff5de4ff','#00000000');
        this.brightness = random(bgcolour);
    }

    move() {
        //for ( let i=1;i <bubbles.length;i++){
            //this.x = this.x + random(-10,10)
            //this.y = this.y + random(-10,10)
            this.y = this.y + random(random(speed))
            //this.x = this.x + random()
        //}
    }

    show(){
        noStroke();
        fill(this.brightness);
        ellipse(this.x,this.y,this.r*2);
    }

  hover(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if (d<this.r){
      this.brightness = random(colours);
      ellipse(this.x,this.y,this.r);
      }
    }
  }
