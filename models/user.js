const UserSchema = new Schema ({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;

