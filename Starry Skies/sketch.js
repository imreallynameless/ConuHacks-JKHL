let response;
let start = 0;
let TSXData;
let aequitasData;
let alphaData;

function preload() {
  TSXData = loadJSON("data/TSXData.json");
  aequitasData = loadJSON("data/AequitasData.json");
  alphaData = loadJSON("data/AlphaData.json");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
}

function draw() {

  var dots = [];

  // add new data every second
  if (frameCount % 60 == 0) {
    let curData = fakeStream(TSXData, 0, 0);
    

    for (let i = 0; i < curData.length; i++) {
      dots.push(dotMaker(data));
    }

    // check overlap of dots
    for (let i = 0; i < dots.length; i++) {
      for (let j = 0; j < dots.length; j++) {
        if (i != j) {
          let safety = 0;
          while (dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y) < 10 && safety < 100) {
            dots[i].x = random(width);
            dots[i].y = random(height);
            safety++;
          }
        }
      }
    }
  }
  
  // update the drawn data
  for (let i = 0; i < dots.length; i++) {
    dots[i].timer--;
    // console.log(dots[i].x + " " + dots[i].y + " " + dots[i].timer + " " + dots[i].stroke);
    stroke(dots[i].stroke);
    point(dots[i].x, dots[i].y);
    if (dots[i].timer <= 0) {
      dots.splice(i, 1);
    }
  }

}

function dotMaker(data) {
  var dot = {
    x: random(width),
    y: random(height),
    timer: data["OrderPrice"] / 50,
    stroke: (data["OrderPrice"] * 2) / 100
  }
  console.log(data["OrderPrice"]);
  return dot;
}

function fakeStream(TSXData) {
  let fakeReturn = [];
  let randIndex = Math.floor(Math.random() * 1000);
  for (let i = randIndex; i < randIndex + 10; i++) {
    fakeReturn.push(TSXData[i]);
  }
  return fakeReturn;
}