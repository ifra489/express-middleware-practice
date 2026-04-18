const express=require('express');
const morgan=require('morgan');
//! Express instance
const app=express();
const port=3000;
//! In-memory data store
const users=[
    {
        id:1,
        name:'John Doe',
        role:'user'
    },
    {
        id:2,
        name:'Jane Smith',
        role:'admin'
    }
]

//! Build-in middleware
app.use(express.json()); // Parse JSON bodies
//! Third-party middleware
app.use(morgan('dev')); // Log HTTP requests

//! custom middleware
app.use((req,res,next)=>{
    const time=new Date().toLocaleDateString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

//! Routes
app.get('/users',(req,res)=>{
    res.json(users);
});

//Application-level middleware for authentication

const authenticate=(req,res,next)=>{
   const isAdmin=true;// Simulate authentication logic
   if(!isAdmin){
    return res.status(403).json({message:'Access denied.Administrators only'});
   }
    next(); //Allow access if  admin
   };
//admin route

app.get('/admin',authenticate,(req,res)=>{
    res.json({message:'Welcome to the admin panel'});
});
//! Start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});