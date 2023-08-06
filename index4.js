import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 8080;
var bandName = ''

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
  res.sendFile(__dirname+'/public/index.html')
})

function bandNameGenerator(req,res,next){
  console.log(req.body)
  bandName = `${req.body.firstName + req.body.lastName}`
  console.log(bandName)
  next()
}
app.use(bandNameGenerator)

app.use('/submit' , (req,res,next) =>{
  res.send(`<h2>Your Combined name is<br><hr>${bandName}</H2>`)
})

app.listen(port, (err) => {
  if(err) {
    console.log("Hey Richiee, something error occured",err)
  }else { 
  console.log(`Listening on port ${port}`);}
});
