// const express=require("express");
// // const app=express();
// // const cors=require('cors')
// // app.use(express.json())
// // app.use(cors())
// // // app.use(express.urlencoded({ extended: false }))
// // app.get('/getdata',(req,res)=>{
// //     res.json({
// //           name:"ravi"
// //     })  
// // })
// // app.post("/register",(req,res)=>{
// //       console.log(req.body)
// //       console.log("hello")
// //       res.json({
// //             nmae:22
// //       })
// // })
// // app.listen(3000,(req,res)=>{
// //       console.log("sucess")
// // })const express = require('express');
// // const path = require('path');

// // const app = express();

// // // Serve only the static files form the dist directory
// // app.use(express.static('./meanstack ')  );

// // app.get('/*', (req, res) =>
// //   //  res.sendFile(path.join(__dirname,'/dist/meanstack/index.html')),
// //     //  res.send("hhh/hhhhhhhhhhh")
// //     res.sendFile(path.join(__dirname ,'/meanstack/index.html'))
// // );

// // // Start the app by listening on the default Heroku port
// // app.listen(process.env.PORT || 8080);
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/meanstack'));

app.get('/*', function(req,res) {
console.log(__dirname+"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
res.sendFile(path.join(__dirname+'/meanstack/index.html'));
});

// Start the app by listening on the default Heroku 
app.listen(process.env.PORT || 8080);