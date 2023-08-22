import React from 'react'
import { useNavigate } from 'react-router-dom'

const Themes = () => {
  const navigate = useNavigate()

  const handleClick = (value) => {
    console.log(value)
    navigate(`/Quizz/${value}`)
  }

  return (
    <div className="Container">
        <ul>
          <li onClick={() => handleClick("Films")}>Films</li>
          <li onClick={() =>handleClick("Series")}>Series</li>
          <li onClick={() =>handleClick("Jeux Video")}>Jeux Video</li>
          <li onClick={() =>handleClick("dessins animés")}>dessins animés</li>
          <li onClick={() =>handleClick("Général")}>Général</li>
        </ul>
    </div>
  )
}

export default Themes