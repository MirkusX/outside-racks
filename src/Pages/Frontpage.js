import { useReducer } from "react";
import {
  FlexDiv,
  StyledButton,
  StyledH1,
} from "../Components/StyledComponents";
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
      dispatch({ type: "moneyGain", payload: win });
    } else if (state.money <= 0) {
      alert("you have 0 money");
      return;
    } else {
      dispatch({ type: "moneyLoss", payload: state.moneyBet });
    }
  };
  return (
    <section>
      <div>
        <StyledH1>{state.winner}</StyledH1>
      </div>
      <div>
        {HorseArray.map((item, index) => {
          return (
            <StyledButton key={index} onClick={() => chooseHorse(item)}>
              {item}
            </StyledButton>
          );
        })}
      </div>
      <FlexDiv>
        <FlexDiv column>
          <h2>Bet money:</h2>
          {MoneyArray.map((item, index) => {
            return (
              <StyledButton money key={index} onClick={() => chooseMoney(item)}>
                {item}
              </StyledButton>
            );
          })}
        </FlexDiv>
        <h2>Current money: {state.money}</h2>
        <h2>Current bet: {state.moneyBet}</h2>
        <h2>Current horse: {state.horse}</h2>
      </FlexDiv>

      <div>
        <StyledButton onClick={() => start()}>Start</StyledButton>
      </div>
    </section>
  );
};
