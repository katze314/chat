const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name: {type:String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    picture: {type: String, required: true, default:"https://img.freepik.com/premium-vector/avatar-profil-picture-icon-vector-design-template_393879-5783.jpg?semt=ais_hybrid&w=740&q=80"},

},
{timestamps: true}
);

const User = mongoose.model("User", userModel);

module.exports = User;

