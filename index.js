const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const homeRoutes = require('./routes/home-routes');
const adminRoutes = require('./routes/admin-routes');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const collection = require("./mongodb");
const admincollection = require("./adminmongodb"); 


app.use(expressLayouts);
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))


app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'views/admin')));
app.use('/',homeRoutes.router);
app.use('/admin',adminRoutes.router);

app.get('/', (req, res) => {
    // MongoDB se data retrieve karke DataTable mein render karne ka code yahan likhein
    res.render('admin/dashbord')
  });

app.get('/newsletter'), (req, res) => {
    res.render('newsletter');
};

app.get('/web3'), (req, res) => {
    res.render('web3');
};

app.get('/web3scam'), (req, res) => {
    res.render('web3scam');
};
app.get('/footer'), (req, res) => {
    res.render('footer');
};

app.post("/layout",async (req,res)=>{
    
    const data = {
        project:req.body.project,
        name:req.body.name,
        email:req.body.email,
        url:req.body.url,
        message:req.body.message
    }

    await collection.insertMany([data])

    res.redirect("/?message=form submitted successfully");
})

app.post("/login",async (req,res)=>{
    
    try {
        const check = await admincollection.findOne({email_id:req.body.email_id})

        if(check.password===req.body.password){
            res.redirect('admin/dashbord')
        }
        else{
            res.send("wrong Email & Password")
        }
    } catch {
        res.redirect("Email & Password Not Valid ")
    }
})



app.listen(3000, () => console.log('App is listening on url http://localhost:3000'));