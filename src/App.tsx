import React, { useState } from 'react';
import { Question } from './@types';
import questions from './data'

function App() {

  const initialCount = getSavedCount()
  const [count, setCount] = useState(initialCount)
  const [visible, setVisible] = useState(false)

  function onNext() {
    localStorage.setItem("count", (count+1).toString())
    setCount(count+1)
    setVisible(false)
  }
  
  function onPrev() {
    localStorage.setItem("count", (count-1).toString())
    setCount(count-1)
    setVisible(false) 
  }
  return (
    <div style={{ padding: "5%"}}>
      <button onClick={() => setVisible(!visible)}>解説をみる</button>
      <button disabled={count === 0} onClick={() => onPrev()}>前へ</button>
      <button disabled={count === questions.length - 1} onClick={() => onNext()}>次へ</button>
      <div style={{ whiteSpace: "pre-wrap"}}>{questions[count].sentence}</div>
      <ul>
        {questions[count].choices.map(c => 
          <li style={{margin: "10px"}}>{c.text}</li>
        )}
      </ul>
      {visible &&
        <div style={{ whiteSpace: "pre-wrap"}}>{ questions[count].explanation }</div>
      }
      
    </div>
  );
}

function getSavedCount() {
  const count = localStorage.getItem("count")
  if(count === null) {
    return 0
  }
  return Number.parseInt(count)
}

export default App;
