const mongoose = require("mongoose");

const TravelerSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true
        },
        profilePicture:{
            type:String,
            required:true,
        },
        
        from:{
            type:String,
            max:500,
            required:true,
        },
        dest:{
            type:String,
            max: 500,
            required:true,
        },
        
        desc:{
            type: String,
            max: 500,
        },
        
        heys:{
            type: Array,
            default:[],
        },
        tags:{
            type: String,
            enum:[
                'Spain',
                'France',
                'UK',
                'Portugal',
                'Greece',
                'Italy',
                'Germany',
                'Netherlands',
                'USA',
                'Canada',
                'Puerto Rico',
                'Cuba',
                'Honduras',
                'Mexico',
                'Argentina',
                'Ecuador',
                'Vevnezuela',
                'Colombia',
                'Perú',
                'Uruguay',
                'China',
                'Japan',
                'Taiwan',
                'India',
                'Morrocco',
                'Other',
            ],
        },
    },
    {timestamps:true}
);

//Model from schema

const Traveler= mongoose.model('Traveler',TravelerSchema);

module.exports = mongoose.model("Traveler", TravelerSchema);