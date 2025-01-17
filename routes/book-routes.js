const express = require('express')
const router = express.Router();
const {getAllBook, getOneBook, addbook, deleteBook, updateBook} = require("../controller/book-controller")


//Tous les livres
router.get("/tous-les-livres", getAllBook);

//Un livre
router.get("/lis-un-livre/:id", getOneBook);

//ajout d'un livre
router.post("/ajout-un-livre", addbook)

//modification

router.put("/modifier-un-livre/:id", updateBook);

//supprimer
router.delete("/supprimer-un-livre/:id", deleteBook);

module.exports = router;