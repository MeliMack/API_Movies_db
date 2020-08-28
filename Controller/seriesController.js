const db= require("../database/models");

//GET ALL SERIES
const controller={
    root: (req,res) => {
        db.series.findAll()
        .then(function(result){
            return res.status(200).json(result);
        })
    },
    //GET SERIE BY ID
    getById: (req,res) => {
        db.series.findByPk(req.params.id)
        .then(function(result){
            return res.status(200).json(result);
        })
    },
    //CREATE SERIE
    create: (req,res) => {
        db.series.create({
          title: req.body.title,
          release_date: req.body.release_date,
          end_date: req.body.end_date,
          genre_id:  req.body.genre_id
        })
        .then(function(result){
            return res.status(201).json(result);
        })
    }
}



module.exports=controller;
