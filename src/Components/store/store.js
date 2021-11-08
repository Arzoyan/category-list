import {
  addSessions,
  deleteSessions,
  editCategory,
  editSessions,
} from "./utils";

export const reducer = (state, { action, payload }) => {
  switch (action) {
    case "add":
      return payload;
    case "ADD_CATEGORY": {
      return [...state, payload];
    }
    case "EDIT_CATEGORY": {
      return editCategory(state, payload);
    }
    case "DELETE_CATEGORY": {
      return state.filter((item) => item.id !== payload);
    }
    case "ADD_SESSIONS": {
      return addSessions(state, payload);
    }
    case "EDIT_SESSIONS": {
      return editSessions(state, payload);
    }
    case "DELETE_SESSIONS": {
      return deleteSessions(state, payload);
    }
    default:
      throw state;
  }
};
