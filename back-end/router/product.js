import express from 'express'
import { getAllProducts } from '../controller/product.js'



const router = express.Router();

router.get('/products', getAllProducts);

export default router;