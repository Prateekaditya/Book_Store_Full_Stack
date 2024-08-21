import  express  from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import { Book } from "./models/booksmodel.js";
import bookRoute from "./routes/bookRoutes.js"
import cors from "cors"

dotenv.config();




const app =express();


app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin:'http://localhost:3000',
//     method:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('welcome');
})

app.use('/books' ,bookRoute)
const mongoDbURL = process.env.mongoDbURL;
const PORT = process.env.PORT || 5000;       // Default to port 5000 if not specified


mongoose.connect(mongoDbURL)
.then( ()=>{
    console.log("Databaseconnected")
    app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT} port`)
})

})
.catch( (error)=>{
    console.log(error)
})

