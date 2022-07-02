import "./styles.css";
import { useState } from "react";

function Modal() {
  return (
    <div className="modal">
      <h4>탑노트</h4>
      <h4>미들노트</h4>
      <h4>베이스노트</h4>
    </div>
  );
}

export default function App() {
  // const [title, setTitle] = useState(["화이트머스크", "프리지아", "로즈"]);
  // const [isOpen, setIsOpen] = useState(false);

  const [like, setLike] = useState([0, 0, 0, 0]);
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const [current, setCurrent] = useState(0);

  const perfumeList = [
    { name: "화이트머스크", brand: "더바디샵" },
    { name: "프리지아", brand: "산타마리아노벨라" },
    { name: "로즈", brand: "딥디크" },
    { name: "모하비고스트", brand: "바이레도" }
  ];

  // const openModalHandler = () => {
  //   setIsOpen(!isOpen);
  // };

  // function changeTitle() {
  //   const newPerfume = [...title];
  //   newPerfume[2] = "발레리나딥디크";
  //   setTitle(newPerfume);
  // }

  function checkCurrent(index) {
    setCurrent(index);
    // console.log(index);
  }

  function hitLike(index) {
    const likeList = [...like];
    // likeList[index]=+1; //hmm 각 하트가 1까지밖에 안늘어나는군?
    likeList[index]++;
    setLike(likeList);
  }

  //3개 모달창 isOpen 상태 따로 관리
  const openModalHandler = (index) => {
    const openList = [...isOpen];
    openList[index] = !openList[index];
    setIsOpen(openList);
    // console.log(openList);
  };

  return (
    <div className="App">
      <h1>🌷 가장 좋아하는 향을 고르세요 🌷</h1>
      {/* button누르면 title 변경되게 하기 */}
      {/* <button onClick={changeTitle}>click to change perfume</button> */}

      {perfumeList.map(function (perfume, idx) {
        return (
          <>
            <div className="list" onClick={() => openModalHandler(idx)}>
              {isOpen[idx] ? (
                <Modal onClick={() => openModalHandler(idx)} />
              ) : (
                <div className="each">
                  <h3>{perfume.name}</h3>
                  <p>{perfume.brand}</p>
                </div>
              )}
            </div>
            <span
              role="img"
              aria-label="heart"
              onClick={() => checkCurrent(idx) & hitLike(idx)}
            >
              ❤️
            </span>{" "}
            {like[idx]}
          </>
        );
      })}

      {/* 한개 list로 모달창 만든것 */}
      {/* <div className="list" onClick={openModalHandler}>
        {isOpen ? (
          <Modal onClick={openModalHandler} />
        ) : (
          <div className="each">
            <h3>{title[0]}</h3>
            <p>더바디샵</p>
          </div>
        )}
          <span role="img" aria-label="heart" onClick={() => setLike(like + 1)}>
          ❤️
        </span>{" "}
        {like}
        <hr />
      </div> */}

      {/* <div className="list">
        <div className="each" onClick={openModalHandler}>
          <h3>{title[0]}</h3>
          <p>더바디샵</p>
        </div>
        {isOpen ? (
          <Modal onClick={openModalHandler}/> //왜안됨? 모달 누르면 안닫힘
        ) : null}
        <span role="img" aria-label="heart" onClick={() => setLike(like + 1)}>
          ❤️
        </span>{" "}
        <hr />
      </div> */}
    </div>
  );
}
