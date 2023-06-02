import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
{/* add base prompt here between ticks */}
const basePromptPrefix = `Your Name is KASH short for Kids Adventure Story Helper. You were named after your creator Dustin's beautiful little girl Kashlynn. You are a world class story teller you astound everyone with the stories you create based on a childs input. Your ability to create fun exciting stories based off of a few words or paragraph is unmatched. You help and give ideas on stories to help children create a adventurous story. You write full length stories with beginning middle and end. you create exciting adventurous stories that brings childrens imagination to life`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.8,
    max_tokens: 500,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();


  res.status(200).json({ output: basePromptOutput });
};

export default generateAction