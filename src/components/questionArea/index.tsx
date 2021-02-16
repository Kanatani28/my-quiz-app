import React, { useState } from 'react';
import { Question } from '../../@types';
import Presenter from './presenter';

const QuestionArea = React.memo(({ questions, count, setCount }: { questions: Question[], count: number, setCount: Function}) => {
  const [visible, setVisible] = useState(false)

  
  const [checkList, setCheckList] = useState<string[]>([])
  const [isCorrect, setCorrect] = useState(false)
  
  function showAnswer() {
    setCorrect(checkList.every(c => questions[count].answer.includes(Number.parseInt(c))) && checkList.length === questions[count].answer.length)
    setVisible(!visible)
  }
  
  function checkBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
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
      <Presenter { ...{ count, showAnswer, onPrev, onNext, questions, checkList, checkBoxChange, visible, isCorrect } } />
  );
})

export default QuestionArea;
