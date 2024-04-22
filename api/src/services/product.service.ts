//import module
import { Product } from '../model/products';
export class ProductService {
    //create a Product
    async createProduct(data: any) {
        try {
            return await Product.create(data)
        } catch (error) {
            console.log(error)
        }
    }

    //get all Products
    async getProducts() {
        try {
            const Products = await Product.find({})
            return Products

        } catch (error) {
            console.log(error)
        }
    }

    //get a single Product
    async getProduct(id: string) {

        try {
            const product = await Product.findById({_id:id})
            if (!product) {
                return 'Product not available'
            }
            return product

        } catch (error) {
            console.log(error)
        }
    }

    //update a Product
    async updateProduct(id: string, data: any) {
        try {
            //pass the id of the object you want to update
            //data is for the new body you are updating the old one with
            //new:true, so the dats being returned, is the update one
            const productz = await Product.findByIdAndUpdate({_id:id}, data, {new: true})
            if(!productz){
                return "Product not available"
            }
            return productz
        } catch (error) {
            console.log(error)
        }
    }

    //delete a Product by using the find by id and delete 
    async deleteProduct(id: string) {
        try {
            const product = await Product.findByIdAndDelete(id)
            if (!product) {
                return 'Product not available'
            }
        } catch (error) {
            console.log(error)
        }
    }
}

//export the class
export const ProductServices = new ProductService()