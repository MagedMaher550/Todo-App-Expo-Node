"use client";
import * as Imports from "./profile-imports";

export default function Todo(props) {
  const [todoList, setTodoList] = Imports.useState([]);
  const [todo, setTodo] = Imports.useState("");
  const [isEdit, setIsEdit] = Imports.useState(false);
  const [editId, setEditId] = Imports.useState(null);

  const addTodoChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const addTodoHandler = async (event) => {
    event.preventDefault();
    if (todo.trim().length > 0) {
      if (!isEdit) {
        let id = await Imports.addToDo(todo);
        setTodoList((prevList) => [
          ...prevList,
          { id: id, name: todo, isChecked: false },
        ]);
      } else {
        setTodoList(
          todoList.map((_todo) => {
            if (_todo.id === editId) {
              Imports.update({ ..._todo, name: todo });
              return { ..._todo, name: todo };
            }
            return _todo;
          })
        );
        setTodo("");
        setEditId(null);
        setIsEdit(false);
      }
    } else {
      return;
    }
  };

  const removeTodo = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
    Imports.deletetodo(id);
  };

  const editTodo = (id) => {
    const specficTodo = todoList.find((item) => item.id === id);
    setIsEdit(true);
    setEditId(id);
    setTodo(specficTodo.name);
  };

  return (
    <Imports.Container sx={Imports.formContainerStyle}>
      <form onSubmit={addTodoHandler}>
        <Imports.FormGroup sx={Imports.formStyle}>
          <Imports.TextField
            required
            className="inputField"
            id="todo"
            type="text"
            label="Add a new Todo"
            variant="outlined"
            sx={Imports.textFieldStyle}
            value={todo}
            onChange={addTodoChangeHandler}
          />
          <Imports.Button variant="contained" type="submit" size="large">
            {isEdit ? "EDIT TODO" : "ADD A NEW TODO"}
          </Imports.Button>
        </Imports.FormGroup>
      </form>
      <Imports.TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        updateTodo={editTodo}
        deleteTodo={removeTodo}
      />
    </Imports.Container>
  );
}
