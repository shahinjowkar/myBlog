// imports at the top of the file
const cohere = require("cohere-ai")
const express = require("express")
const cors = require("cors")
require("dotenv").config()
const sanityClient = require('@sanity/client')
const config = {
  dataset: "production",
  projectId: "0ure9ap4",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV == 'production',
  token:"skCL27f6mk9VUGsNggsXQSMWBFje4YtR0ZKCQGUqoWe8KGQ4AnXXa8rEnllsCvNkwmUIXFXVYed9evBQ3Mx0TmwyM5dlQeXRR3JWRLSjOAidsToizRYTbL5IE1wIcQ9XhOiacUy1ityDF4kBxhH5tYYVivbFHes49tKfXilWWATSsjOMPvOi",
}

const client = sanityClient(config)

// express app declaration after the imports
const app = express()

// middlewares after calling express()
app.use(cors())
//this pars your req to json by default
app.use(express.json())

app.listen(8080)

cohere.init("LHnbq6TlUZ7gpBZf2YPHiW3QvdkZ4UM3gZleKUkI")
async function generate(title) {
  const response = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: `Generate two paragraph for a blog post for \"${title}\" tittle. The post should be cover challenges, creative ideas about the tittle and possetive approaches.`,
    max_tokens: 996,
    temperature: 2,
    k: 0,
    p: 0.76,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  return response.body.generations[0].text
}

async function summary(sum) {
  prompt1 = `Passage: Is Wordle getting tougher to solve? Players seem to be convinced that the game has gotten harder in recent weeks ever since The New York Times bought it from developer Josh Wardle in late January. The Times has come forward and shared that this likely isn't the case. That said, the NYT did mess with the back end code a bit, removing some offensive and sexual language, as well as some obscure words There is a viral thread claiming that a confirmation bias was at play. One Twitter user went so far as to claim the game has gone to \"the dusty section of the dictionary\" to find its latest words. \n

TLDR: Wordle has not gotten more difficult to solve.\n
--\n
Passage: ArtificialIvan, a seven-year-old, London-based payment and expense management software company, has raised $190 million in Series C funding led by ARG Global, with participation from D9 Capital Group and Boulder Capital. Earlier backers also joined the round, including Hilton Group, Roxanne Capital, Paved Roads Ventures, Brook Partners, and Plato Capital.\n

TLDR: ArtificialIvan has raised $190 million in Series C funding.\n
--\n
Passage:${prompt}
TLDR:`

  const response = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: prompt1,
    max_tokens: 20,
    temperature: 2,
    k: 0,
    p: 0.76,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  return response.body.generations[0].text
}


async function postToSanity(title,body,description){
  await client.create({
    _type: 'post',
    _createdAt : "2023-01-20T02:23:11Z",
    _id: "12312423152345645745673568152345234",
    description: description,
    plainBody : body,
    title: title,
    slug: {
      _type: "slug",
      current: "auto-gen"

    },
  })
}



app.post("/", async (req, res) => {
  console.log("I'm alive")
  const response = await generate(req.body.m1)
  console.log("I'm alive")
  const response2 = await generate(response)
  console.log("I'm alive")
  await postToSanity(req.body.m1, response2,response2 )
  console.log("I'm alive")

  res.json(req.body.m1)
    
  })




// app.post("sd", async (req, res) => {
  
//   // const result = await generate()
//   // res.body={alo: "damn"}
//   // res="hi"
//   // console.log(req.body)
//   res.json(req.body)
    
//   })
  
  // app.get("/", async (req, res) => {
  
  //   // const result = await generate()
  //   // res.body={alo: "damn"}
  //   // res="hi"
  //   console.log(req.body)
  //   res.json({connected : 'baby'})
      
  //   })



