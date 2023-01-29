// imports at the top of the file
const cohere = require("cohere-ai")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

// express app declaration after the imports
const app = express()

// middlewares after calling express()
app.use(cors())
// app.use(express.json())

app.listen(8080)
// cohere.init("LHnbq6TlUZ7gpBZf2YPHiW3QvdkZ4UM3gZleKUkI")


// async function generate() {
//   const response = await cohere.generate({
//     model: 'command-xlarge-20221108',
//     prompt: 'I was walking and I saw',
//     max_tokens: 10,
//     temperature: 0.9,
//     k: 0,
//     p: 0.75,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//     stop_sequences: [],
//     return_likelihoods: 'NONE'
//   });
//   return response.body.generations[0].text
// }

app.post("/", async (req, res) => {
  
  // const result = await generate()
  // res.body={alo: "damn"}
  // res="hi"
  console.log(req.body)
  res.json({he :"hoo"})
    
  })
  
  app.get("/", async (req, res) => {
  
    // const result = await generate()
    // res.body={alo: "damn"}
    // res="hi"
    
    res.json({connected : 'baby'})
      
    })



