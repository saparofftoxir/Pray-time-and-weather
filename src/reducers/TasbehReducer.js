import { tasbeh } from "../data/rosaryy";

export const InitialState = {
  mentions: tasbeh,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS_NUM": {
      const filterMentionss = state.mentions.map((item) => {
        return item.id === action.payload
          ? {
              ...item,
              number: item.number + 1,
            }
          : item;
      });
      return (state = {
        mentions: filterMentionss,
      });
    }
    case "CLEAR_MENTIONS": {
      const filterMention = state.mentions.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              number: "",
            }
          : item;
      });
      return (state = {
        mentions: filterMention,
      });
    }
  }
};
