const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            require: true,
            min:3,
            max:20,
            unique:true,
        },

        email:{
            type: String,
            required: true,
            max:50,
            unique: true,
        },

        password:{
            type: String,
            required: true,
            min: 6,
        },

        profilePicture:{
            type:String,
            default:"",
        },

        coverPicture:{
            type: String,
            default:"",
        },

        followers:{
            type: Array,
            default:[],
        },

        following:{
            type:Array,
            default:[],
        },

        isAdmin:{
            type: Boolean,
            default: false,
        },
        desc:{
            type: String,
            max:50
        },
        travel:{
            type: String,
            max: 250,
        },
        from:{
            type: String,
            max: 50,
        },
        arrives:{
            type: Date,
            require: true,
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("User", UserSchema);