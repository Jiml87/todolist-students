export const getTodoList = async () => {
  const result = await fetch("http://localhost:3002/api/todolist1/");

  return result.json();
  // if (result.status === 200) {
  // } else {
  //   return new Error(result);
  // }
  // return fetch("http://localhost:3002/api/todolist/")
  //   .then((response) => {
  //     const res = response.json();
  //     return res;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     return error;
  //   });
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
// DZ then
// POST
// http://localhost:3002/api/todolist
export const createTodoItem = () => {};
// DZ async await
// DELETE
// `http://localhost:3002/api/todolist/${id}`
export const deleteTodoItem = () => {};

// javascript promise задачи
