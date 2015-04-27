var mongoose = require('mongoose');

var User = {
    name: String
    , email: String
    , password: String
    , phone: Array
};

module.exports = mongoose.model('User', new Schema(User));
