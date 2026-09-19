const NOF_SQUARES = 16;
const TOTAL_PIXELS = 512;

// createSquare(NOF_SQUARES);

function createSquares(nofSquares) {
  let squareLength = TOTAL_PIXELS / nofSquares;

  let squares = [];
  let lineEls = [];

  let containerEl = document.querySelector('container');

  containerEl.replaceChildren();

  for (let i = 0; i < NOF_SQUARES; i++) {

    squares[i] = [];
    
    lineEls[i] = document.createElement('div');
    lineEls[i].style.display = 'flex';

    for (let j = 0; j < NOF_SQUARES; j++) {
      squares[i][j] = document.createElement('div');

      squares[i][j].style.backgroundColor = 'lightgray';
      squares[i][j].style.width = squareLength + 'px';
      squares[i][j].style.height = squareLength + 'px';
      squares[i][j].style.border = '1px solid red';

      squares[i][j].addEventListener('mouseenter', () => {
        squares[i][j].style.backgroundColor = 'black';
      })


      lineEls[i].appendChild(squares[i][j]);
    }

    containerEl.appendChild(lineEls[i]);
  }
}





