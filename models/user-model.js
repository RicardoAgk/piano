const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  googleId: String,
  instruments: [String]
},
{
  timestamps: true
}
)

const User = mongoose.model('User', userSchema);
module.exports = User;