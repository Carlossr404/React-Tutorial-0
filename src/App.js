import './App.css';

{/*Function that contains our website*/}
function App() {

  {/*Everything inside return is rendered as the website*/}
  return (
    /* Everything in the website must be wrapped within an enclosing tag... In this case, the div tag.
      * This is b/c only a single element may be returned  */
    <div className="App">
      
      <button className='square'>x</button>
      <button className='square'>x</button>

    </div>
  );
}

export default App;
