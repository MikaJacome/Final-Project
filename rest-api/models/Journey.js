const mongoose = require ("mongoose");

const JourneySchema= new mongoose.Schema(
    {
        userId:{
            type: String,
            required:true,
        },

        desc:{
            type: String,
            max:700,
        },
        
        img: {
            type: String,
        },

        likes:{
            type: Array,
            default: [],
        },
    },
    {timestamps: true}
);
module.exports = mongoose.model("Journey", JourneySchema);