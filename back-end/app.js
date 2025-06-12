import express from 'express'
import productsRoute from './router/product.js'
import mongoose from 'mongoose'
import cors from 'cors'

const logging = (req,  res, next) => {
    console.log("Logging: ", req.method)
    next()
}


const server = express()
console.log(productsRoute);
server.use(logging)
server.use(cors())
server.use(express.json())
server.use('/', productsRoute)

// connect to mongodb
mongoose.connect('mongodb+srv://ajay:lokesh@cluster0.4qdcuza.mongodb.net/e-commerce?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB');
    server.listen(5000, () => console.log('Server running on http://localhost:5000'));
})
.catch((err) => console.error('MongoDB connection error:', err));
