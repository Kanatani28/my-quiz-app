import React, { useState } from 'react';
import questions from './data'

function App() {

  const initialCount = getSavedCount()
  const [count, setCount] = useState(initialCount)
  const [visible, setVisible] = useState(false)

  
  const [checkList, setCheckList] = useState<string[]>([])
  const [isCorrect, setCorrect] = useState(false)
  
  function showAnswer() {
    setCorrect(checkList.every(c => questions[count].answer.includes(Number.parseInt(c))) && checkList.length === questions[count].answer.length)
    setVisible(!visible)
  }
  
  function checkboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if(checkList.some(c => c === e.target.value)) {
      setCheckList(checkList.filter(c => value !== c))
    } else {
      setCheckList([...checkList, value])
    }
  }

  function onNext() {
    localStorage.setItem("count", (count+1).toString())
    setCount(count+1)
    setVisible(false)
    setCheckList([])
    setCorrect(false)
  }
  
  function onPrev() {
    localStorage.setItem("count", (count-1).toString())
    setCount(count-1)
    setVisible(false)
    setCheckList([])
    setCorrect(false)
  }
  return (
    <div style={{ padding: "5%"}}>
      <div>問{ count + 1 }</div>
      <button onClick={() => showAnswer()}>解説をみる</button>
      <button disabled={count === 0} onClick={() => onPrev()}>前へ</button>
      <button disabled={count === questions.length - 1} onClick={() => onNext()}>次へ</button>
      <div style={{ whiteSpace: "pre-wrap"}}>{questions[count].sentence}</div>
      <ul>
        {questions[count].choices.map((c, i) => 
          <li style={{margin: "10px"}}><input type="checkbox" checked={checkList.includes(i.toString())} value={i} onChange={(e) =>  checkboxChange(e) } />{c.text}</li>
        )}
      </ul>
      {visible && 
        <>
          {isCorrect ? <div style={{backgroundColor: "greenyellow"}}>正解</div> : <div  style={{backgroundColor: "red"}}>不正解</div> }
          <div style={{ whiteSpace: "pre-wrap"}}>{ questions[count].explanation }</div>
        </>
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
