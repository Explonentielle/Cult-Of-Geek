import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Data from '../data/answers'

const Themes = () => {
  const navigate = useNavigate()

  const handleClick = (value, content) => {
    console.log(value)
    navigate(`/Quizz/${value}`, { state: { content } });
  };

  const cardList = Data.map((theme, index) => {
    return (
    <Card
      key={index}
      className={`${theme.title} card`}
      title={theme.title}
      action={() => handleClick(theme.title, theme.content )}
    />)
  })

  return (
    <div className="Container">
      {cardList}
    </div>
  )
}

export default Themes