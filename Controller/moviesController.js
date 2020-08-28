const db= require("../database/models");

//GET ALL MOVIES
const controller={
    root: (req,res) => {
        db.movies.findAll()
        .then(function(result){
            return res.status(200).json(result);
        })
    },
    //GET MOVIE BY ID
    getById: (req,res) => {
        db.movies.findByPk(req.params.id)
        .then(function(result){
            return res.status(200).json(result);
        })
    },
    //CREATE MOVIE
    create: (req,res) => {
        db.movies.create({
          title: req.body.title,
          rating: req.body.rating,
          awards: req.body.awards,
          release_date: req.body.release_date,
          length: req.body.length,
        })
        .then(function(result){
            return res.status(201).json(result);
        })
    }
}



module.exports=controller;
