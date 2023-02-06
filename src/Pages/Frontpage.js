import { useState } from "react";
import { HorseArray } from "./FrontpageFiles.js/HorseArray";

export const Frontpage = () => {
  const [winner, setWinner] = useState();
  const [bet, setBet] = useState([]);
  const choose = (item) => {
    setBet([{ horse: item }]);
    console.log(bet);
  };
  const start = () => {
    setWinner(HorseArray[Math.floor(Math.random() * HorseArray.length)]);
    bet.map((item, index) => {
      if (item.horse === winner) {
        console.log("winner");
      }
    });
  };
  return (
    <section>
      <div>
        <h1>{winner}</h1>
      </div>
      <div>
        {HorseArray.map((item, index) => {
          return (
            <button key={index} onClick={() => choose(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <button onClick={() => start()}>start</button>
      </div>
    </section>
  );
};
