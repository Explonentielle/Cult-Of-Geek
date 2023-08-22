import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Data from '../data/answers'

const Themes = () => {
  const navigate = useNavigate()

  const handleClick = (value) => {
    console.log(value)
    navigate(`/Quizz/${value}`)
  }

  const cardList = Data.map((theme, index) => {
    return (
    <Card
      key={index}
      className={theme.title}
      title={theme.title}
      action={() => handleClick(theme.title)}
    />)
  })

  return (
    <div className="Container">
      {cardList}
    </div>
  )
}

export default Themes