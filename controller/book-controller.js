const Book = require("../models/Book")

const getAllBook = async (req, res) => {
    try {

        const allbook = await Book.find({});

        if(allbook?.length > 0){
            res.status(201).json({
                sucess : true,
                datalength : allbook.length,
                data : allbook
            })
        }
     
        
    } catch (error) {
        console.log("les livres n'ont pas été trouvé");
        res.status(400).json({
            succes : false,
            message: 'erreur veuillez verifier vos donnés'
        })
    }
}

const getOneBook = async (req, res) => {
    try {
        const idBook = req.params.id;
        const bookCurrent = await Book.findById(idBook);

        if(bookCurrent){
            res.status(200).json({
                succes: true,
                data: bookCurrent
            })
        }
        
    } catch (error) {
        console.log("les livres n'ont pas été trouvé");
        res.status(400).json({
            succes : false,
            message: 'erreur veuillez verifier vos donnés'
        })
        
    }

}

const addbook = async (req, res) => {
    try {
        
        const newFormatBook = req.body;
        const book = await Book.create(newFormatBook);

        if(!book){
            res.status(401).json({
                succes : false,
                message: "Vous n'avez pas pu creer le livre"
            })
        }

        res.status(200).json({
            succes: true,
            data: book
        })

    } catch (error) {
        console.log("les livres n'ont pas été trouvé", error);
        res.status(400).json({
            succes : false,
            message: 'erreur veuillez verifier vos donnés'
        })
    }

}

const updateBook = async (req, res) => {
    try {
        const idBookUpdate = req.params.id;
        const bookUpdate = req.body;

        const newBookUp = await Book.findByIdAndUpdate(idBookUpdate, bookUpdate, {new : true});

        if(newBookUp){
            res.status(200).json({
                succes: true,
                data: newBookUp
            })
        } else {
            res.status(400).json({
                succes: false,
                message: "Modification échouée"
            })
        }
            
            
        
    } catch (error) {
        console.log("les livres n'ont pas été trouvé", error);
        res.status(400).json({
            succes : false,
            message: 'erreur veuillez verifier vos donnés'
        })
        
    }

}

const deleteBook = async (req, res) => {
    try {

        const bookCurrent = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(bookCurrent);

        if(deleteBook){
            res.status(200).json({
                suycces: true,
                message : 'Le livre a été supprimé',
                data : deleteBook
            })
        }
        

    } catch (error) {
        console.log("les livres n'ont pas été trouvé", error);
        res.status(400).json({
            succes : false,
            message: 'erreur veuillez verifier vos donnés'
        })
    }

}

module.exports = {
    getAllBook, getOneBook, addbook, updateBook, deleteBook
}