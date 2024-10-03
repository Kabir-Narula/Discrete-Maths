
/* this function will create a Turtle object.*/
/* do not modify this*/
function Turtle(){

  this.position_=[500,300];
  this.colour_=color(0,0,0);
  this.heading_ = [0,1];
  this.angle_=90;
  this.isInitialized_=false;
  this.curr_=0;
  this.instructions_=[];

  this.oldTurtle_ = []


  this.saveTurtle = function(){
      let saveObject = 
      {
          "position": Array.from(this.position_),
          "colour": this.colour_,
          "heading": Array.from(this.heading_),
          "angle": this.angle_
      };
      this.oldTurtle_.push(saveObject);
  }
  this.restoreTurtle = function(){
      len=this.oldTurtle_.length
      if(len > 0){
          this.position_=Array.from(this.oldTurtle_[len-1].position);
          this.colour_=this.oldTurtle_[len-1].colour;
          this.heading_=Array.from(this.oldTurtle_[len-1].heading);
          this.angle_=this.oldTurtle_[len-1].angle;
          this.oldTurtle_.pop();
      }
  }
  this.forward = function(amount){

      cartesian = [this.position_[0],height-this.position_[1]];
      cartesian =getNewPosition(cartesian, this.heading_, amount)
      oldPosition=this.position_;
      this.position_= [cartesian[0],height-cartesian[1]];
      push();
      stroke(this.colour_);
      fill(this.colour_);
      line(oldPosition[0],oldPosition[1],this.position_[0],this.position_[1]);
      pop();

  }
  this.move = function(direction, amount){
      let v = scaledVector(direction,amount);
      /*note - v[1] below to account for coordinate differences*/
      this.position_ = [this.position_[0] + v[0],this.position_[1] - v[1]]

  }
  this.turnLeft = function(amount){

      this.heading_=turnLeft(this.heading_,-amount);
      this.angle_=this.angle_+amount;
  }
  this.turnRight = function(amount){
      this.heading_=turnRight(this.heading_,-amount);
      this.angle_=this.angle_-amount;
  }

  this.changeColour = function(colour){
      this.colour_=colour;
  }
  this.x = function(){
      return this.position_[0];
  }
  this.y = function(){
      return this.position_[1];
  }
  this.loadTurtleFile=function(instructions){
      this.instructions_=instructions.split(/\r?\n/);
      this.isInitialized_=true;
      if(this.instructions_.length > 100){
          frameRate(60);
      }

      this.curr_=0;
  }
  this.drawTurtle = function(){
      push()
      stroke(this.colour_)
      fill(this.colour_)
      translate(this.position_[0],this.position_[1])
      rotate(-this.angle_)
      triangle(0,10,0,-10,30,0);
      pop()
  }
  this.isInitialized = function(){
      return this.isInitialized_;
  }
  this.reset = function(){
      this.isInitialized_=false;
      this.instructions_=[];
      this.curr_=0;
  }
  this.draw = function(){
      push();
      if(this.isInitialized_){
          let i;
          let original = [this.position_[0],this.position_[1]];
          let originalHeading = [this.heading_[0],this.heading_[1]];
          let originalAngle=this.angle_;
          let originalColour = this.colour_;

          j = 0;
          for (i = 0;i<this.curr_;i++){
              if (this.instructions_[i][0] == 'F'){
                  let amount = int((this.instructions_[i].split(' '))[1])
                  this.forward(amount);

              }
              else if (this.instructions_[i][0]=='L'){
                  let amount = int((this.instructions_[i].split(' '))[1])
                  this.turnLeft(amount);
                  //this.drawTurtle();
              }
              else if (this.instructions_[i][0]=='R'){
                  let amount = int((this.instructions_[i].split(' '))[1])
                  this.turnRight(amount);
                  //this.drawTurtle();
              }
              else if (this.instructions_[i][0]=='S'){
                  this.saveTurtle();
                  //this.drawTurtle();
              }
              else if (this.instructions_[i][0]=='C'){
                  let instr = this.instructions_[i].split(' ');
                  this.colour_=color(instr[1],instr[2],instr[3]);
              }
              else if(this.instructions_[i][0]=='P'){
                  this.restoreTurtle();

              }
              else if(this.instructions_[i][0] == 'M'){
                  let instr = this.instructions_[i].split(' ');
                  let vec = [int(instr[1]),int(instr[2])];
                  let unitVec = normalize(vec);
                  let amt = magnitude(vec);
                  this.move(unitVec, amt);
              }
              else if(this.instructions_[i][0] == 'T'){
                  let instr = this.instructions_[i].split(' ');
                  this.position_ = [int(instr[1]),height-instr[2]];
                  console.log(height);
                  console.log(this.position_);               
              }
          }
          this.drawTurtle();
          this.position_=[original[0],original[1]];
          this.heading_=[originalHeading[0],originalHeading[1]];
          this.angle_=originalAngle;
          this.colour_=originalColour;


          if(this.curr_ <this.instructions_.length){
              if (this.instructions_.length > 10000){
                  let increase = int (this.instructions_.length / 1000)

                  this.curr_+=increase;
                  if (this.curr_ > this.instructions_.length){
                      this.curr_=this.instructions_.length;
                  }
              }
              else{
                  if(this.instructions_.length > 1000){
                      this.curr_+=10;
                      if (this.curr_ > this.instructions_.length){
                          this.curr_=this.instructions_.length;
                      }

                  }
                  this.curr_+=1;
              }
          }
          else{
              noLoop();
          }

          
      }
      else{
          this.drawTurtle();
      }
      pop();
  }
}

let t1;

let turtleFileInput;
let turtleFilePrompt;


function loadTurtleFile(file){
  if(t1.isInitialized()){
      t1.reset();
  }
  t1.loadTurtleFile(file.data);
}
function setup(){
  angleMode(DEGREES)

  turtleFilePrompt = createP("Load Turtle File: ", 10, 40)
  turtleFileInput=createFileInput(loadTurtleFile);
  turtleFileInput.position(150,15);

  theCanvas=createCanvas(1000,800);
  theCanvas.position(50,60);
  frameRate(10);
  t1 = new Turtle();

}

function draw(){
  background(255,255,255);
  t1.draw();

}
