import './App.css';
import './index.css';
import { useState } from 'react';

/**calcWinner: Helper function that checks for a winner
  * Input: squares - array of values in the squares
  * Returns: "X", "O", or null */
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

/**Square Component: handles all square-related matters 
  * Input: val- item/string/value to be displayed by square; onSquareClick- function to be run updating "val" once Square is clicked
  * Return: Button, rendered as a square that displays  "val"
  *Remember to use the " () => " syntax before the function call */
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

/**Board Component: renders board and handles all matters related to it
  * Input: xNext- bool representing player turn, squares- state of the board as array of squares, onPlay- function that shall handle gameplay. Must take in array
  * Return: Rendering of the board and 'status'- next player or winner, whichever is applicable
  */
function Board({xNext, squares, onPlay}) {

  /**handleCLick: updates squares array holding board's state and calls onPlay() w/ nextSquares, the new state of the board
    * Input: i - index of square to be marked*/
  function handleClick(i) {
    if(squares[i] || calcWinner(squares)){return;}    //make sure the square is empty and there's no winner yet. Return/Do nothing if it isn't
    const nextSquares = squares.slice();  //copy "squares" array
    
    //mark square
    if (xNext){
      nextSquares[i]= "X";
    } else {
      nextSquares[i]= "O";
    }

    onPlay(nextSquares);
  }

  //Calculate winner. If there is one, display who it is. Else, display the next player
  const winner = calcWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner + " ! Refresh the page to play again.";
  }else{
    status = "Next player: " + (xNext ? "X" : "O");
  }

  return (
    <>
      
      <div className='status'>{status}</div>
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

    </>
  );
}

/**
 * Game: function that will hold our entire website and handle game play 
 */
function Game(){
  //setting up turns and array that will hold our move history
  const [xNext, setXNext] = useState(true);
  const [hist, setHist] = useState([Array(9).fill(null)]);
  const currSquares = hist[hist.length - 1]; //square array to be displayed

  /**
   * handlePlay: toggles xNext and updates hist -array of board states representing history of the board- w/ nextSquares
   * Input: nextSquares- new state of the board
   */
  function handlePlay(nextSquares){
    setHist([...hist, nextSquares]);
    setXNext(!xNext);
  }

  /* Everything in the website must be wrapped within an enclosing tag... In this case, the div tag.
   * This is b/c only a single element may be returned  */
  return(
    <div className="game">

      <h1 className='h1'>Hi! Welcome to my version of the React Tic-Tac-Toe Tutorial. Click on the board to start the game!</h1>
      <Board xNext={xNext} squares={currSquares} onPlay={handlePlay} />
      <div className='game-info'>
        <ol>{/**TODO */}</ol>
      </div>

    </div>
  );
}

export default Game;
