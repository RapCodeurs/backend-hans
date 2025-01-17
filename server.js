require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDb = require("./database/connectDb.js");
const BookRoutes = require("./routes/book-routes.js") 



//connexion a la base de données
connectDb();

//middleware 
app.use(express.json());

//les routes 
app.use("/les-livres", BookRoutes)

//lancement du serveur
app.listen(PORT, ()=>{
    console.log("Serveur bien lancé")
})