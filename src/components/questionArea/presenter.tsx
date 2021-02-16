import React from 'react';
import { Question } from '../../@types';

type Props = {
  count: number
  questions: Question[]
  onPrev: Function
  onNext: Function
  checkList: string[]
  checkBoxChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  visible: boolean
  isCorrect: boolean
  showAnswer: Function
}

const Presenter = React.memo((
  {
    count, 
    showAnswer, 
    onPrev, 
    questions, 
    onNext, 
    checkList, 
    checkBoxChange, 
    visible, 
    isCorrect
  }: Props) => (
  <>
    <div>問{ count + 1 }</div>
    <button onClick={() => showAnswer()}>解説をみる</button>
    <button disabled={count === 0} onClick={() => onPrev()}>前へ</button>
    <button disabled={count === questions.length - 1} onClick={() => onNext()}>次へ</button>
    <div style={{ whiteSpace: "pre-wrap"}}>{questions[count].sentence}</div>
    <ul>
    {questions[count].choices.map((c, i) => 
      <li style={{margin: "10px"}}><input type="checkbox" checked={checkList.includes(i.toString())} value={i} onChange={(e) =>  checkBoxChange(e) } />{c.text}</li>
    )}
    </ul>
    {visible && 
    <>
      {isCorrect ? <div style={{backgroundColor: "greenyellow"}}>正解</div> : <div  style={{backgroundColor: "red"}}>不正解</div> }
      <div style={{ whiteSpace: "pre-wrap"}}>{ questions[count].explanation }</div>
    </>
    }
  </>
))

export default Presenter;