const NOF_SQUARES = 16;
const TOTAL_PIXELS = 512;

createSquares(NOF_SQUARES);

const nofSquaresInputEl = document.getElementById('number-of-squares');
// nofSquaresInputEL.placeholder = NOF_SQUARES;

const nofSquaresBtn = document.querySelector('form button');
nofSquaresBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createSquares(Number(nofSquaresInputEl.value))
})

function createSquares(nofSquares) {
  const squareContainerEl = document.querySelector('container');
  console.log('foo')
  
  if (!((typeof nofSquares) === "number") || nofSquares === 0) {
    nofSquares = NOF_SQUARES;
  }
  else if (nofSquares < 2) {
    nofSquares = 2;
  } else if (nofSquares > 100) {
    nofSquares = 100;
  }
  
  let squareLength = TOTAL_PIXELS / nofSquares;

  let squares = [];
  let lineEls = [];

  squareContainerEl.replaceChildren();

  for (let i = 0; i < nofSquares; i++) {

    squares[i] = [];
    
    lineEls[i] = document.createElement('div');
    lineEls[i].style.display = 'flex';

    for (let j = 0; j < nofSquares; j++) {
      squares[i][j] = document.createElement('div');

      squares[i][j].style.backgroundColor = 'lightgray';
      squares[i][j].style.width = squareLength + 'px';
      squares[i][j].style.height = squareLength + 'px';

      squares[i][j].addEventListener('mouseenter', () => {
        squares[i][j].style.backgroundColor = 'black';
      })


      lineEls[i].appendChild(squares[i][j]);
    }

    squareContainerEl.appendChild(lineEls[i]);
  }
}





