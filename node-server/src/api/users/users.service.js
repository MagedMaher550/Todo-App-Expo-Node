const bcrypt = require("bcrypt");
const { db } = require("../../utils/db");

const findUserByEmail = (email) => {
  return db.user.findUnique({
    where: {
      email,
    },
  });
};
const createUserByEmailAndPassword = (user) => {
  user.password = bcrypt.hashSync(user.password + "", 12);
  return db.user.create({
    data: user,
  });
};

const findUserById = (id) => {
  return db.user.findUnique({
    where: {
      id,
    },
  });
};

module.exports = {
  findUserByEmail,
  findUserById,
  createUserByEmailAndPassword,
};
