//importing modules
import  {Schema, model,} from 'mongoose'
import Joi from 'joi'

//validation schema
export const ProductsSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    qtdAvailable: Joi.number().required(),
})

//creating an interface
interface IProduct{
    name: string,
    description: string,
    qtdAvailable: number,
}

//Postschema
const postSchema = new Schema<IProduct>({
    name: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    qtdAvailable: {
        type: Number,
        required: true,
        default: 0,
    },


})

//creating a model
export const Product = model<IProduct>('Product', postSchema )