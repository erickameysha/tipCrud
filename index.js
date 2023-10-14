import express from 'express'
import mongoose from "mongoose";
import Post from './Post.js'
import fileUpload from 'express-fileupload'
import router from "./router.js";
const PORT = 5000;
const DB_URL=`mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api',router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))

    } catch (e) {
        console.log(e)
    }
}


startApp()
// app.listen(PORT, () => console.log('SERVER STARTED ON ' + PORT))