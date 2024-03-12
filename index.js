const functions = require('@google-cloud/functions-framework')
const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

functions.http('openai', async (req, res) => {
  //cloud.google.com/functions/docs/samples/functions-http-cors#functions_http_cors-nodejs
  res.set('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    res.status(204).send('')
  } else {
    try {
      const completion = await openai.chat.completions.create(req.body)
      res.status(200).send(completion.choices[0].message.content)
    } catch (error) {
      res.status(500).send(error)
    }
  }
})
