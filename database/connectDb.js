const mongoose = require("mongoose");
const URL = 'mongodb+srv://MMMMMMMMMMMM:SkEiyFdKut123456987@cluster0.pvfru.mongodb.net/';

const connectDb = async() => {
    try {

        await mongoose.connect(URL);
        console.log('Nous sommes bien connectés a la base de données')
        
    } catch (error) {
        console.log('Erreur de connection', error);
        process.exit(1)
        
    }

}

module.exports = connectDb;
