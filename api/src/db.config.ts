//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

//details from the env
const MONGO_USERNAME = process.env.MONGO_USERNAME || 'root'
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'example'
const MONGO_URL = process.env.MONGO_URL || '127.0.0.1:27017'
const MONGO_DB = 'product'



const connectionString = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}`


console.log(connectionString)
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

//db connection
export const db = mongoose.connect(connectionString, options)
    .then(res => {
        if(res){
            console.log(`Database connection succeffully to ${MONGO_DB}`)
        }

    }).catch(err => {
        console.log(err)
    })