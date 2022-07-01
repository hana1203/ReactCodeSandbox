import "./styles.css";
import { useState } from "react";

function Modal() {
  return (
    <div className="modal">
      <h3>탑노트</h3>
      <h3>미들노트</h3>
      <h3>베이스노트</h3>
    </div>
  );
}

export default function App() {
  const [title, setTitle] = useState(["화이트머스크", "프리지아", "로즈"]);
  const [like, setLike] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  function changeTitle() {
    const newPerfume = [...title];
    newPerfume[2] = "발레리나딥디크";
    setTitle(newPerfume);
  }
  return (
    <div className="App">
      <h1>향수</h1>
      {/* button누르면 title 변경되게 하기 */}
      <button onClick={changeTitle}>click to change perfume</button>
      <div className="list" onClick={openModalHandler}>
        {isOpen ? (
          <Modal onClick={openModalHandler} />
        ) : (
          <div className="each" onClick>
            <h3>{title[0]}</h3>
            <p>더바디샵</p>
          </div>
        )}
        <span onClick={() => setLike(like + 1)}>❤️</span> {like}
        <hr />
      </div>
      <div className="list">
        <div className="each">
          <h3>{title[1]}</h3>
          <p>산타마리아노벨라</p>
        </div>
        <hr />
      </div>
      <div className="list">
        <div className="each">
          <h3>
            {title[2]}
            <span></span>
          </h3>
          <p>러쉬</p>
        </div>
        <hr />
      </div>
    </div>
  );
}
