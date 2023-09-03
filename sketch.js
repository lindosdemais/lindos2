function setup() {
    createCanvas(800, 800);
    background ("pink")
  }
  
  function draw() {
    rect(30,30,200,200)
    fill("black")
    stroke("white");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY,10,10) 
    }}