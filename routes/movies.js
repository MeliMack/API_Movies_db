const express=require("express");
const router= express.Router();

//PARA MOVIES
const moviesController= require("../controller/moviesController")

router.get("/", moviesController.root);//GET ALL MOVIES

router.get("/detail/:id", moviesController.getById);//GET MOVIE BY ID

router.post("/create", moviesController.create);//CREATE MOVIE


module.exports= router;