// Project Title
// Your Name
// Date
//
// Modules used:
// - https://github.com/bmoren/p5.collide2D
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Character {
  #collisionCircle;
  #position;
  #rotation;

  constructor(spawnX, spawnY, rotationAngle, collisionSize) {
    this.#position = createVector(spawnX, spawnY);
    this.#rotation = 0;

    this.#collisionCircle = {
      diameter: collisionSize,
      position: this.#position,
    };
  }

  move(directionX, directionY, speed) {
    
  }
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  circle(mouseX, mouseY, 25);
}
