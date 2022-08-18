const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcryptjs');
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, {
    versionKey: false,
    timestamps: true
})

UserSchema.pre('save', function (next) {
    console.log('---------Antes----------');
    console.log(this.email, this.password);
    console.log('-------------------------');
    const hashedpassword= bcrypt.hashSync(this.password,12);
    console.log('---------Después-----------');
    console.log(this.email, hashedpassword);
    console.log('-------------------------');
    this.password= hashedpassword;
    next()
})
const UserModel = model('users', UserSchema)

module.exports = UserModel;