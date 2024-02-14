const sequelize = require('./db');
const DataTypes = require('sequelize');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deadline:{
    type: DataTypes.DATEONLY,
  },
  completed: {
    type: DataTypes.BOOLEAN,
  }
});

//This creates the table if it doesn't exist (and does nothing if it already exists)
Task.sync();

module.exports = Task;