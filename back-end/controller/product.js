import Product from '../models/Product.js'



export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch(err) {
        console.log("Error fetching products: ", err)
    }
}
