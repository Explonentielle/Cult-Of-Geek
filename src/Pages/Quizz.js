import React from 'react'
import { useParams } from 'react-router-dom'


const Quizz = () => {
  const { theme } = useParams()

  return (
    <div className="Container">
      <p>mon Quizz {theme}</p>
    </div>
  )
}

export default Quizz