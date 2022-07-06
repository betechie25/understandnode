const express = require('express');
const app = express()

 const {products} = require('./data.js')

app.get('/',(req,res)=>{
   res.send('<h1>Home Page</h1><a href ="/api/products">Products</a>')
})

const newProducts = products.map((product)=>{
    const {id,name,image} = product;
    return {id,name,image}
})

//getting all products
app.get('/api/products',(req,res)=>{
    res.json(newProducts)
})

// getting single product
app.get('/api/products/:productId',(req,res)=>{
    const {productId} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productId))
    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct)
})

//Complex url
app.get('/api/products/:productId/reviews/:reviewId',(req,res)=>{
    res.send('Hello Complex World')
})

//query string
app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter(product=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length <1){
        //res.status(200).send('No Product match your search');
        return res.status(200).json({'success':true,data:[]})
    }
    res.status(200).json(sortedProducts)
})


app.listen(5000,()=>{
    console.log("Listening on port 5000....")
})