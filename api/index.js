// 3rd Party Libraries Import
const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()

// Router Imports
const authRouter=require('./routers/auth')
const blogRouter=require('./routers/blog')
const petRouter=require('./routers/pet')
const serviceRouter=require('./routers/service')

// Utility Imports
const protectRoute=require('./middlewares/routeProtect')
const asyncWrapper=require('./utils/asyncWrapper')
const errorHandler = require('./middlewares/errorHandler')

// express app initialisation
const app=express()

// Middle wares
app.use(cors())
app.use(bodyParser.urlencoded({extended:true,limit:'5mb'}))
app.use(bodyParser.json({limit:'5mb'}))

// API routes
app.use('/auth',authRouter)

app.use('/pet',protectRoute,petRouter)

app.use('/service',protectRoute,serviceRouter)

app.use('/blog',blogRouter)

app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
  
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
  
    try {
      const response = await razorpay.orders.create(options);
      console.log(response);
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
    }
  });
  

// Route Not Found Middleware
app.use(asyncWrapper(async (req,res,next)=>{
    res.status(404).json({error:"Route Not Found"})
}))

// Express-Error-Handler Midlleware
app.use(errorHandler);

// connecting to DB than Starting the Server
mongoose.connect(process.env.MONGODB_URI).then(()=>app.listen(3000,()=>{
    console.info("Server Online!");
})).catch((err)=>{
    console.error(err)
})
