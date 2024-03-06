import './App.css';
import './index.css';
import { useState } from 'react';

{/**Square Component: handles all square-related matters 
   * Input: val - item/string/value to be displayed by square*/}
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

{/*Function that contains our website*/}
function App() {
  {/** setting up array that will hold our board data */}
  const [squares, setSquares]= useState(Array(9).fill(null));

  {/**handleCLick: updates squares array holding board's state 
    * Input: i - index of square to be marked*/}
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  {/*Everything inside return is rendered as the website*/}
  return (
    /* Everything in the website must be wrapped within an enclosing tag... In this case, the div tag.
      * This is b/c only a single element may be returned  */
    <div className="App">
      <header>Welcome to my version of React's Tic-Tac-Toe Tutorial. We're currently under construction 😅</header>
      <h1 className='h1'>Apologies for the delay. Here's a cat meme to compensate...</h1>

      <img src= "./cat-meme.jpg" className="img0"/>

      {/**We're gonna make divs to contain rows of squares now*/}
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
