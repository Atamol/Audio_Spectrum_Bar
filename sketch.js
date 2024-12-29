let mic;
let fft;
let numBars = 64;

function setup() {
  createCanvas(800, 400);
  noFill();
  
  mic = new p5.AudioIn();
  mic.start();
  
  fft = new p5.FFT(0.75, numBars);
  fft.setInput(mic);
  
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);
  
  let spectrum = fft.analyze();
  
  for (let i = 0; i < numBars; i++) {
    let x = map(i, 0, numBars, 0, width);
    let y = map(pow(spectrum[i], 1.5), 0, pow(255, 1.5), height, 0);
    stroke(map(i, 0, numBars, 0, 360), 100, 100);
    line(x, height, x, y);
  }
}
