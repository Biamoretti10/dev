function setup() {
    createCanvas(650, 490);
        background(60, 99, 100);
  }
  
  function draw() {
  
    stroke("purple")
    fill("black")
    
    //console.log(mouseIsPressed);
    
     if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }}