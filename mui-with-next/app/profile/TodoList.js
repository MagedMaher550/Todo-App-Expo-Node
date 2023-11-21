"use client";
import { useEffect } from "react";
import { fetchData, update } from "./queries";
import * as Imports from "./profile-imports";

function TodoList({ todoList, setTodoList, updateTodo, deleteTodo }) {
  useEffect(() => {
    fetchData(setTodoList);
  }, [setTodoList]);

  const handleChange = (id) => {
    let temp = todoList.map((item) => {
      if (id === item.id) {
        update({ ...item, isChecked: !item.isChecked });
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setTodoList(temp);
  };

  return (
    <div>
      <Imports.TableContainer component={Imports.Paper}>
        <Imports.Table sx={Imports.tableStyle} aria-label="simple table">
          <Imports.TableHead>
            <Imports.TableRow>
              <Imports.TableCell>Check</Imports.TableCell>
              <Imports.TableCell>Todo</Imports.TableCell>
              <Imports.TableCell align="right">Actions</Imports.TableCell>
            </Imports.TableRow>
          </Imports.TableHead>
          <Imports.TableBody>
            {todoList.map(({ id, name, isChecked }) => (
              <Imports.TableRow key={id} sx={Imports.tableRowStyle}>
                <Imports.TableCell component="th" scope="row">
                  <Imports.Checkbox
                    onClick={() => {
                      handleChange(id);
                    }}
                    checked={isChecked}
                  />
                </Imports.TableCell>
                <Imports.TableCell
                  sx={{
                    ...Imports.tableCellStyle,
                    textDecoration: isChecked ? "line-through" : "none",
                  }}
                >
                  {name}
                </Imports.TableCell>
                <Imports.TableCell align="right">
                  <Imports.IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteTodo(id);
                    }}
                  >
                    <Imports.DeleteIcon color="error" />
                  </Imports.IconButton>
                  <Imports.IconButton
                    aria-label="edit"
                    onClick={() => {
                      updateTodo(id);
                    }}
                  >
                    <Imports.EditIcon color="primary" />
                  </Imports.IconButton>
                </Imports.TableCell>
              </Imports.TableRow>
            ))}
          </Imports.TableBody>
        </Imports.Table>
      </Imports.TableContainer>
    </div>
  );
}

export default TodoList;
