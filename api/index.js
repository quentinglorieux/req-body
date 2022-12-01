export default async function handler(req, res) {
    const { body } = req;
    res.send('Test Page')
    return res.send(`Hello ${body.name}, you just parsed the request body!`);
  }
  