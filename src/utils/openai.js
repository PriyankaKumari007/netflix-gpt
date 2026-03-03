import OpenAI from 'openai';
console.log("ENV KEY:", process.env.REACT_APP_OPENAI_KEY);

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY ,
  dangerouslyAllowBrowser: true
});

export default openai;