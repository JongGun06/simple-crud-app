let express = require('express')
let mongoose = require('mongoose')
let Product = require('./models/product.model.js')
let productRoute = require('./routes/product.route.js')
let app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", productRoute)



app.get('/',(req,res) => {
    res.send('hello from node api')
})





mongoose.connect("mongodb+srv://tursunarsen20:BQZDMeXzwKBLgKK6@backenddb.bdwuf.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('connect mongodb');
    app.listen(3000, () => {
        console.log('server run 3000');
        
    
    })
    
}) 
.catch(() => {
    console.log('error connect')
})