import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Themes = () => {
  const navigate = useNavigate();
  const [quizzList, setQuizzList] = useState([])

  const getQuizz = async () => {
    const response = await fetch('http://localhost:5500/api/quizz')
      .then(res => res.json());
      setQuizzList(response);
  }

  useEffect(() => {
    getQuizz();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleClick = (value, content) => {
    shuffleArray(content)
    console.log(content)
    navigate(`/Quizz/${value}`, { state: { content } });
  };

  const cardList = quizzList.map((theme, index) => {
    return (
      <Card
        key={index}
        className={`${theme.title} card`}
        title={theme.title}
        action={() => handleClick(theme.title, theme.content)}
      />
    );
  });

  return (
    <div className="Container">
      <div className="themeContainer">
        {cardList}
      </div>
    </div>
  );
};

export default Themes;
