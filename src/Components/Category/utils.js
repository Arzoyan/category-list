export const categoryDataForm = (data) => {
  let categoryId = new Date().getTime();
  return {
    id: categoryId,
    title: data.category,
    sessions: data.sessions.map((item, index) => ({
      id: `${new Date().getTime()}__${index}`,
      title: item,
      categoryId,
      userId: 1,
    })),
    userId: 1,
  };
};

export const sessionDataForm = ({ data, categoryId }) =>
  data.map((item, index) => ({
    id: `${new Date().getTime()}_${index}`,
    title: item,
    categoryId,
  }));
