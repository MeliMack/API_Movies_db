//Require Express & cors
const express=require("express");
const app=express();
const cors=require("cors");

const moviesRouter=require("./routes/movies"); //Movies
const seriesRouter=require("./routes/series"); //Series

//Reading JSON & cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use routers
app.use("/movies",moviesRouter);
app.use("/series",seriesRouter);

//Port
app.listen(3000, function(){
    console.log("Servidor Corriendo")
});

module.exports = app;
