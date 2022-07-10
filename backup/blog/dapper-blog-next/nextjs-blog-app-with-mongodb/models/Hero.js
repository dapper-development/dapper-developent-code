import {mongoose, module } from "mongoose"

const HeroSchema = new mongoose.Schema({
    superHero: {
        type: String,
        required: [true, 'Please name the hero'],
        unique: true, 
        trim: true
    
    },
    realName: {
        type: 'string', 
        required: 'true',
        maxlength: [200, 'Please keep real name short']
    }
})

module.exports = mongoose.model.HeroSchema

