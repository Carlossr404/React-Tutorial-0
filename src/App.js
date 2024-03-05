import './App.css';
import './index.css';

{/*Function that contains our website*/}
function App() {

  {/*Everything inside return is rendered as the website*/}
  return (
    /* Everything in the website must be wrapped within an enclosing tag... In this case, the div tag.
      * This is b/c only a single element may be returned  */
    <div className="App">
      <header>Welcome to my version of React's Tic-Tac-Toe Tutorial. We're currently under construction 😅</header>
      <header className='h1'>Apologies for the delay. Here's a cat meme to compensate...</header>

      <img src= "./cat-meme.jpg" className="img0"/>

      {/**We're gonna make divs to contain rows of squares now*/}
      <div className='board-row'>
        <button className='square'>1</button>
        <button className='square'>2</button>
        <button className='square'>3</button>
      </div>
      <div className='board-row'>
        <button className='square'>4</button>
        <button className='square'>5</button>
        <button className='square'>6</button>
      </div>
      <div className='board-row'>
        <button className='square'>7</button>
        <button className='square'>8</button>
        <button className='square'>9</button>
      </div>
    </div>
  );
}

export default App;
