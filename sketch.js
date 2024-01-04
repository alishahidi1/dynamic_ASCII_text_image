const density = 'N@#W$9876543210?!abc;:+=-,._.     ';

let video;
let asciiDiv;

// function preload() {
//   video = loadImage("video48.jpg")
// }

function setup() {
  // createCanvas(400, 400);
  noCanvas();
  video = createCapture(VIDEO);
  video.size(60, 48);
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
      let asciiImage = '';
  for (let j = 0; j < video.height; j++){
    for (let i = 0; i < video.width; i++){
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      // noStroke();
      // // fill(avg);
      // fill(255)
      // // square(i*w, j*h, w)
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      
      // textSize(w);
      // textAlign(CENTER, CENTER)
      // // text('G', i * w + w * 0.5, j * h + h * 0.5)
      // text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5)
      
      const c = density.charAt(charIndex);
      if (c == ' ') asciiImage += '&nbsp;'
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}