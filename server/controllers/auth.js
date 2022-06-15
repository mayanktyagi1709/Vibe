const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = (req, res) => {
  try {
    const { fullName, username, password, phoneNumber } = req.body();
    const userId = crypto.randomBytes(16).toString('hex');
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const login = (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { login, signup };
