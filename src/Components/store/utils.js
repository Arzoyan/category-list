export const addSessions = (state, payload) => {
  let updatedCategory = state.find((item) => item.id === payload.categoryId);
  updatedCategory.sessions = [...updatedCategory.sessions, ...payload.data];
  const categories = state.filter((item) => item.id !== payload.categoryId);
  return [updatedCategory, ...categories];
};
export const editCategory = (state, payload) => {
  let updatedCategory = state.find((item) => item.id === payload.id);
  updatedCategory.title = payload.title;
  const categories = state.filter((item) => item.id !== payload.id);
  return [updatedCategory, ...categories];
};

export const editSessions = (state, payload) => {
  const editableSession = state.find((item) => item.id === payload.categoryId);
  editableSession.sessions = editableSession.sessions.map((item) => {
    if (item.id === payload.id) {
      return {
        ...item,
        title: payload.title,
      };
    }
    return item;
  });
  const categories = state.filter((item) => item.id !== payload.categoryId);

  return [editableSession, ...categories];
};

export const deleteSessions = (state, payload) => {
  const editableSession = state.find((item) => item.id === payload.categoryId);
  editableSession.sessions = editableSession.sessions.filter(
    (item) => item.id !== payload.id
  );

  const categories = state.filter((item) => item.id !== payload.categoryId);

  return [editableSession, ...categories];
};
