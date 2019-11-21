<template>
  <div class="hello">
    <div class="container border">
      <div class="d-flex justify-content-center" id="p5Canvas"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      currentProjects: Array
    };
  },

  beforeMount() {
    
    let starCountRef = firebase.database().ref("projects");
    starCountRef.on('value', function(snapshot) {
      let data = snapshot.val();
      this.currentProjects = data
      console.log("las listen",this.currentProjects);
    });
  },

  mounted() {
    const script = function(p5) {
      let circleX;
      let circleY;
      let xSpeed = Math.floor(Math.random() * 5);
      let ySpeed = Math.floor(Math.random() * 5);
      console.log();

      p5.setup = () => {
        p5.createCanvas(600, 600);
        circleX = p5.random(p5.height);
        circleY = p5.random(p5.width);
      };

      p5.draw = () => {
        p5.background(255);
        p5.fill(0);
        p5.stroke(150);
        p5.ellipse(circleX, circleY, 32, 32);

        circleX = circleX + xSpeed;
        circleY = circleY + ySpeed;

        if (circleX > p5.width || circleX < 0) {
          xSpeed = xSpeed * -1;
        }
        if (circleY > p5.height || circleY < 0) {
          ySpeed = ySpeed * -1;
        }
      };
    };
    // NOTE: Use p5 as an instance mode
    const P5 = require("p5");
    new P5(script);
  }
};
</script>

<style></style>
