import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Data from "../data/answers";

const Themes = () => {
  const navigate = useNavigate();

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleClick = (value, content) => {
    shuffleArray(content)
    navigate(`/Quizz/${value}`, { state: { content } });
  };

  const cardList = Data.map((theme, index) => {
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
