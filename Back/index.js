// imports at the top of the file
const cohere = require("cohere-ai")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

// express app declaration after the imports
const app = express()

// middlewares after calling express()
app.use(cors())
app.use(express.json())

// at the end of the file

// const cohere = require('cohere-ai');
// cohere.init('LHnbq6TlUZ7gpBZf2YPHiW3QvdkZ4UM3gZleKUkI'); // This is your trial API key
// (async () => {
//   const response = await cohere.generate({
//     model: 'command-xlarge-20221108',
//     prompt: 'I was walking and I saw',
//     max_tokens: 300,
//     temperature: 0.9,
//     k: 0,
//     p: 0.75,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//     stop_sequences: [],
//     return_likelihoods: 'NONE'
//   });
//   console.log(`Prediction: ${response.body.generations[0].text}`);
// })();
cohere.init("LHnbq6TlUZ7gpBZf2YPHiW3QvdkZ4UM3gZleKUkI")


async function generate() {
  const response = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: 'I was walking and I saw',
    max_tokens: 10,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  return response.body.generations[0].text
}

app.get("/", async (req, res) => {
  
    const result = await generate()
  
    res.send(`${result}`)
  })
  
  app.listen(8080)



// const cohere = require("cohere-ai")
// const express = require("express")
// const cors = require("cors")
// require("dotenv").config()

// const { writeToJson } = require("./utils")

// const app = express()
// app.use(cors())

// app.use(express.json())

// cohere.init(process.env.API_KEY)

// const POSITIVE_SAMPLES = [
//   "The reception was great. I love how your staff welcomed us and showed us our rooms",
//   "Your staffs took us on a tour round the hotel, and I really enjoyed that",
//   "The The bedroom we stayed in was very conducive. Also loved the paintings on the walls.",
//   "The amenities in the room were great and the rooms were also clean",
//   "I have stayed in many hotels but this one tops it for me. Enjoyed the customer service and the clean rooms.",
// ]

// const NEGATIVE_SAMPLES = [
//   "The room were not neat and conducive. There was no air conditioning system",
//   "The Wi-Fi in the hotel was poor. I couldn't use the internet while I was there",
//   "The lady who showed us our room had a very rude attitude and didn't care about our complains while we were there.",
//   "Poor customer service and the rooms had a weird smell even though they looked clean.",
//   "The air conditioning system was faulty, so the room was so heated. I didn't enjoy my stay",
// ]

// async function classifyReview(input) {
//   const response = await cohere.classify({
//     model: "medium",
//     taskDescription: "",
//     outputIndicator: "",
//     inputs: [input],
//     examples: POSITIVE_SAMPLES.map((sample) => ({
//       text: sample,
//       label: "positive",
//     })).concat(
//       NEGATIVE_SAMPLES.map((sample) => ({ text: sample, label: "negative" }))
//     ),
//   })

//   return response.body.classifications[0]
// }

// app.get("/", async (req, res) => {
//   const { name, number, review } = req.body

//   const classificationResult = await classifyReview(review)

//   const label = classificationResult.prediction

//   const data = { name, number, review, label }

//   writeToJson(data)

//   res.send("Hi" )
// })


// const express = require('express')
// const app = express()
// const port = 8080

// app.get('/',  (req, res) => {
//   res.send('Hello World!')
// })
// app.listen(8080)

// app.listen(port)