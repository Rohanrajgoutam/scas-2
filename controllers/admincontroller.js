// const express = require('express');
const collection = require("../mongodb");
// const adminRoutes = require('../routes/admin-routes');


const loginView = (req, res, next) => {
    res.render('admin/login');
}
const dashbordView = (req, res, next) => {
    collection.find({})
    .then((x)=>{
    res.render('admin/dashbord', { x });
    })
    .catch((y)=>{
        console.log(y)
    })
    
}   

const outputView = (req, res, next) => {
    const id = req.query.id; // Access the id from the query parameters
    collection.findOne({ _id: id }) // Assuming collection is your MongoDB collection
    .then((record)=>{
        res.render('admin/output', { record });
    })
    .catch((err)=>{
        console.log(err);
    });
}


const viewView = (req, res, next) => {
    const id = req.query.id; // Access the id from the query parameters
    collection.findOne({ _id: id }) // Assuming collection is your MongoDB collection
    .then((record)=>{
        res.render('admin/view', { record });
    })
    .catch((err)=>{
        console.log(err);
    });
}







module.exports ={
    loginView,
    viewView,
    outputView,
    dashbordView,
    
}