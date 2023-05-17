/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://img.freepik.com/free-icon/user_318-804790.jpg"
  },

  gpa: {
    type: Sequelize.DECIMAL(2,1),
  }
});

// Export the student model
module.exports = Student;