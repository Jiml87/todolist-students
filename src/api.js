export const getTodoList = () => {
  return fetch("http://localhost:3002/api/todolist/")
    .then((response) => {
      const res = response.json();
      return res;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const editTodoItem = (id, data) => {
  return fetch(`http://localhost:3002/api/todolist/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      const res = response.json();
      return res;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
