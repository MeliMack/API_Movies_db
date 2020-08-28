const express=require("express");
const router= express.Router();

//PARA SERIES
const seriesController= require("../controller/seriesController")

router.get("/", seriesController.root);//GET ALL SERIES

router.get("/detail/:id", seriesController.getById);//GET SERIE BY ID

router.post("/create", seriesController.create);//CREATE SERIE

module.exports= router;