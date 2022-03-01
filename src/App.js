import React, {useState} from "react";
import './style/style.css'

function App() {
  const [count, setCount]= useState(0)
  const [toggleBtn, setToggleBtn] = useState(false)
  const [value, setValue] = useState("Alisher")

  function inc(){
    setCount(count + 1)
  }
  function dec(){
    if(count > 0){
      setCount(count - 1)
    }
    else{
      setCount(count)
    }
  }
  return (
    <>
      <div className="app">
        <p className="fs-3 m-3">Count: {count}</p>
        <button 
        onClick={inc}
        className="btn btn-success m-3"
        >INCR</button>
        <button 
        onClick={dec}
        className="btn btn-danger">DECR</button>
      </div>
      <div className="app">
        <button className="btn btn-success m-3"
        onClick={()=> setToggleBtn(!toggleBtn)}>
          Toggle
        </button>
        {toggleBtn ? <h3 className="m-3">You tube</h3> : null}
        <hr/>
        <p>Value: {value}</p>
        <input type="text" className="form-control" value={value}  onChange={event => setValue(event.target.value)} />
      </div>
    </>
  );
}

export default App;
