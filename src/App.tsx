import React, { useState } from 'react';
import { Question } from './@types';
import QuestionArea from './components/questionArea'
import q1 from './data/data'
import q2 from './data/data2'

function App() {
  const [q, initialCount] = getSavedCount()
  const [count, setCount] = useState(initialCount)
  const [questions, setQuestions] = useState(q)
  return (
    <div style={{ padding: "5%"}}>
      <button onClick={() => { localStorage.setItem("qstr", "1"); setCount(0); setQuestions(q1)}}>1</button>
      <button onClick={() => { localStorage.setItem("qstr", "2"); setCount(0); setQuestions(q2)}}>2</button>
      <QuestionArea { ...{ questions, count, setCount }} />
    </div>
  );
}

function getSavedCount(): [Question[], number] {
  const qstr = localStorage.getItem("qstr")
  const count = localStorage.getItem("count")
  if(count === null || qstr === null) {
    return [q1, 0]
  }

  let q : Question[] = []
  if(qstr === "1") {
    q = q1
  } else if(qstr === "2") {
    q = q2
  } 

  return [q, Number.parseInt(count)]
}

export default App;
