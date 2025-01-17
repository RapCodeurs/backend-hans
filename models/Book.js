const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    titre: {
        type : String,
        required: [true, 'Book title'],
        trim: true,

    },
    auteur: {
        type : String,
        required: [true, 'Book title'],
        trim: true,

    },
    year:{
        type: Number,
        required: true
    },
    createAt :{
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('Book', BookSchema);