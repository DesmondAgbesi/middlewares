
const getUsers = (req, res) => {
  res.status(200).send("All users")
};

const getUser = (req, res) => {
  res.status(200).send("One user")
};

const createUser = (req, res) => {
  res.status(200).send("create user")
};

const updateUser = (req, res) => {
  res.status(200).send("Update user")
};

const deleteUser = (req, res) => {
  res.status(200).send("Delete user")
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};