export const initialState = {
  horse: "",
  money: 100,
  moneyBet: 100,
  winner: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "horse":
      return { ...state, horse: (state.horse = action.payload) };
    case "moneyBet":
      return { ...state, moneyBet: (state.moneyBet = action.payload) };
    case "winner":
      return { ...state, winner: (state.winner = action.payload) };
    case "moneyGain":
      return { ...state, money: state.money + action.payload };
    case "moneyLoss":
      return { ...state, money: state.money - action.payload };
  }
};
