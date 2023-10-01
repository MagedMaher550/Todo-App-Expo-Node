const { db } = require("../../utils/db");

const createTodo = (name, isChecked, userId) => {
    return db.Todo.create({
        data: {
            name,
            isChecked,
            user: { connect: { id: userId } },
        },
    });
};

const getAllTodos = (userId) => {
    return db.Todo.findMany({
        where: {
            userId,
        },
    });
};

const updateTodo = (id, name, isChecked) => {
    return db.Todo.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name,
            isChecked,
        },
    });
};

const clearTodos = (userId) => {
    return db.Todo.deleteMany({
        where: {
            userId,
        },
    });
};

const deleteTodo = (id) => {
    return db.Todo.delete({
        where: {
            id: parseInt(id),
        },
    });
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    clearTodos,
    deleteTodo,
};