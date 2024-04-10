import express from "express";
import  expressLayouts from "express-ejs-layouts";
import router from "./routers/router.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
app.disable('x-powered-by');

app.use(express.static("public"));


// templating engine
app.use(expressLayouts)
app.set("layout", "./layouts/main")
app.set("view engine", "ejs");


// app.get("/", (req, res)=>{
//     res.render("index")
// })

app.use("/", router);

app.listen(PORT, ()=>{
    console.log(`Sever is listening on port ${PORT}`)
});