// Create a user schema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    accountCreated: Date,
    userName: {
        type: String,
        unique: true,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema);