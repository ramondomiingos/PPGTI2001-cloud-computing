//importing modules
import express from "express";
import { ProductController } from '../controller/product.controller'

//initiating the router
export const router = express.Router()

//add post route
router.post('/',ProductController.addproduct)

//get posts
router.get('/', ProductController.getProducts)

//get single post
router.get('/:id', ProductController.getAProduct)

//update a post
router.put('/:id', ProductController.updateProduct)

//delete a post
router.delete('/:id', ProductController.deleteProduct)