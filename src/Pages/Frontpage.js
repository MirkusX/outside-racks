import { useReducer, useState } from "react";
import { initialState, reducer } from "../Components/useReducer";
import { HorseArray, MoneyArray } from "./FrontpageFiles.js/HorseArray";

export const Frontpage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const chooseMoney = (item) => {
    if (state.money < item) {
      alert("you do not have enough money");
    } else {
      dispatch({ type: "moneyBet", payload: item });
    }
  };
  const chooseHorse = (item) => {
    dispatch({ type: "horse", payload: item });
  };
  const start = () => {
    dispatch({
      type: "winner",
      payload: HorseArray[Math.floor(Math.random() * HorseArray.length)],
    });

    if (state.horse === state.winner) {
      const win = state.moneyBet * 2;
      console.log(win);
      dispatch({ type: "money", payload: win });
    }
  };
  return (
    <section>
      <div>
        <h1>{state.winner}</h1>
      </div>
      <div>
        {HorseArray.map((item, index) => {
          return (
            <button key={index} onClick={() => chooseHorse(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <div>
        {MoneyArray.map((item, index) => {
          return (
            <button key={index} onClick={() => chooseMoney(item)}>
              {item}
            </button>
          );
        })}
        <h2>Current money: {state.money}</h2>
        <h2>Current bet: {state.moneyBet}</h2>
        <h2>Current horse: {state.horse}</h2>
      </div>
      <div>
        <button onClick={() => start()}>start</button>
      </div>
    </section>
  );
};
