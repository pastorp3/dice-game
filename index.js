let num1 = Math.floor(Math.random()*6);
let num2 = Math.floor(Math.random()*6);

const chooise = (input) => {
    if (input === 0) {
      return 'images/dice1.png';
    } else if ( input === 1) {
      return 'images/dice2.png';
    } else if ( input === 2) {
      return 'images/dice3.png';
    }else if ( input === 3) {
      return 'images/dice4.png';
    } else if ( input === 4) {
      return 'images/dice5.png';
    } else if ( input === 5) {
      return 'images/dice6.png';
    }
}

let player1 = chooise(num1);
let player2 = chooise(num2);

const img1 = document.getElementsByClassName('img1')[0];
const img2 = document.getElementsByClassName('img2')[0];

img1.setAttribute('src', player1);
img2.setAttribute('src', player2);
