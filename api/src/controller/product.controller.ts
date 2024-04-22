//import modules
import { ProductServices } from '../services/product.service'
import { Request, Response } from 'express'
import { ProductsSchema} from '../model/products';


class productController {
    //add product controller
    addproduct = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            name: req.body.name,
            description: req.body.description,
            qtdAvailable: req.body.qtdAvailable,

        }
        //validating the request
        const {error, value} = ProductsSchema.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create product function in the service and pass the data from the request
            const product = await ProductServices.createProduct(value)
            res.status(201).send(product)
        }

    }

    //get all products
    getProducts = async (req: Request, res: Response) => {
        const products = await ProductServices.getProducts()
        res.send(products)
    }


    //get a single product
    getAProduct = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const product = await ProductServices.getProduct(id)
        res.send(product)
    }

    //update product
    updateProduct = async (req: Request, res: Response) => {
        const id = req.params.id
        const product = await ProductServices.updateProduct(id, req.body)
        res.send(product)
    }


    //delete a product
    deleteProduct = async (req: Request, res: Response) => {
        const id = req.params.id
        await ProductServices.deleteProduct(id)
        res.send('product deleted')
    }

}

//export class
export const ProductController = new productController()