
// This is the class that represents the particle.

// A simple Particle class is got three vectors (aceleration, velocity, position)
// and a "lifespan" property.


var Particle = function(position) {
  this.acceleration = createVector(accX, accY);
  this.velocity = createVector(velX, velY);
  this.position = position.copy();
  this.lifespan = initlifespan;

  this.run = function() {
    this.update();
    this.display();
  };

  // Method to update position
  // As with a moving object, an Update method adds vectors together,
  // and so the particle moves. Here we also set the decreasing rate of "lifespan".
  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };
  // Method to display
  // Every frame "lifespan" will decrease, and so the particle goes off screen.
  // To animate this visually, we set "lifespan" as the second argument of stroke()
  // and fill () functions in the method below.
  this.display = function() {
    stroke((this.lifespan*-1)+255, (this.lifespan*-1)+255, (this.lifespan*-1)+255);
    strokeWeight(2);
    fill((this.lifespan*-1)+255, (this.lifespan*-1)+255,(this.lifespan*-1)+255);
    ellipse(this.position.x, this.position.y, 12, 12);
  };
  


  // Is the particle still useful?
  // A boolean method which returns true or false.
  this.isDead = function() {
    if (this.lifespan < 0.0) {
        return true;
    } else {
      return false;
    }
  };
};
