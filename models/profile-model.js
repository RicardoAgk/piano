const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: String,
  instruments: [String]
},
{
  timestamps: true
}
)

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;