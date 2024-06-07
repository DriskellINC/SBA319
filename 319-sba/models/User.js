const { Schema, model } = require('../config/db-connection');

//built out schema for users

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
  skills: {

  }

});

module.exports = model('User', userSchema);
