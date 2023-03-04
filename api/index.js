var express = require("express");
var app = express();
const port = 3005;
app.use(express.json());

/**
 * data: [{
 *  text: string,
 *  id: string,
 *  priority: 'low' | 'middle' | 'high',
 * }]
 */
let data = [
  {
    text: "Task 1",
    id: "1",
    priority: "low",
  },
];

app
  .route("/api/todolist/:id")
  .delete(function (req, res) {
    const { id } = req.params;
    console.log({idIs: id});
    data = data.filter((item) => item.id !== id);
    res.send(`Item with id: ${id} is removed`);
  })
  .put(function (req, res) {
    const { id } = req.params;
    data = data.map((item) =>
      id === item.id ? { ...item, ...req.body } : item
    );
    const item = data.find((item) => item.id === id);
    res.send(item);
  });

app
  .route("/api/todolist")
  .get(function (req, res) {
    res.send(data);
  })
  .post(function (req, res) {
    data.push(req.body);
    res.send(req.body);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
