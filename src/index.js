import './style.scss';
import MePers from './assets/Male-4-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;

let bottomPressed = false;
let topPressed = false;
let leftPressed = false;
let rightPressed = false;
let fronBack = 0;
let pY = 276;
let pX = 276;

function keyDownHandler(e) {
  switch(e.key) {
    case 'ArrowDown':
      bottomPressed = true;
      break;
    case 'ArrowUp':
      topPressed = true;
      break;
    case 'ArrowLeft':
      leftPressed = true;
      break;
    case 'ArrowRight':
      rightPressed = true;
      break;
  }

}

function keyUpHandler(e) {
  switch(e.key) {
    case 'ArrowDown':
      bottomPressed = false;
      break;
    case 'ArrowUp':
      topPressed = false;
      break;
    case 'ArrowLeft':
      leftPressed = false;
      break;
    case 'ArrowRight':
      rightPressed = false;
      break;
  }

}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = MePers;

img.addEventListener('load', () => {
  setInterval(() => {

    switch(true) {
      case bottomPressed:
        fronBack = 0;
        cycle = (cycle + 1) % shots;
        pY += 10;
        break;
      case topPressed: 
        fronBack = 144;
        cycle = (cycle + 1) % shots;
        pY -= 10;
        break;
      case leftPressed:
        fronBack = 48;
        cycle = (cycle + 1) % shots;
        pX -= 10;
        break;
      case rightPressed:
        fronBack = 96;
        cycle = (cycle + 1) % shots;
        pX += 10;
        break;
    }
    
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, fronBack, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
  
});

