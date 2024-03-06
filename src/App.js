import './App.css';
import './index.css';
import { useState } from 'react';

{/**calcWinner: Helper function that checks for a winner
  * Input: squares - array of values in the squares
  * Returns: "X", "O", or null */}
function calcWinner(squares){
  //array of lines- trupples of square indicies that will indicate a winner if they all match
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  //compare the 3 squares corresponding to indicies from each line in lines array
  for (let i = 0; i < lines.length; i++){
    const [a, b, c]= lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }

  return null;

}

{/**Square Component: handles all square-related matters 
   * Input: val- item/string/value to be displayed by square; onSquareClick- function to be run updating "val" once Square is clicked
   * Return: Button, rendered as a square that displays  "val"
  *Remember to use the " () => " syntax before the function call */}
function Square({val, onSquareClick}) {
  return(
    <button 
      className='square'
      onClick={onSquareClick}
    >
      {val}
    </button>
  );
}

{/**App: Function that contains our website*/}
function App() {
  {/** setting up turns and array that will hold our board data */}
  const [xNext, setXNext] = useState(true);
  const [squares, setSquares]= useState(Array(9).fill(null));

  {/**handleCLick: updates squares array holding board's state 
    * Input: i - index of square to be marked*/}
  function handleClick(i) {
    if(squares[i] || calcWinner(squares)){return;}    //make sure the square is empty and there's no winner yet. Return/Do nothing if it isn't
    const nextSquares = squares.slice();  //copy "squares" array
    
    //mark square
    if (xNext){
      nextSquares[i]= "X";
    } else {
      nextSquares[i]= "O";
    }

    //update state
    setSquares(nextSquares);
    setXNext(!xNext);
  }

  {/*Everything inside return is rendered as the website*/}
  return (
    /* Everything in the website must be wrapped within an enclosing tag... In this case, the div tag.
      * This is b/c only a single element may be returned  */
    <div className="App">
      <header>Welcome to my version of React's Tic-Tac-Toe Tutorial. We're currently under construction 😅</header>
      <h1 className='h1'>Apologies for the delay. Here's a cat meme to compensate...</h1>

      <img src= "./cat-meme.jpg" className="img0"/>

      {/**Divs to contain rows of squares*/}
      <div className='board-row'>
        <Square val={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square val={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square val={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square val={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square val={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square val={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square val={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square val={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square val={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default App;
