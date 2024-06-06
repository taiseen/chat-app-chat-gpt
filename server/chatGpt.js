const openAiUrl = 'https://api.openai.com/v1/chat/completions';
const apiKey = 'DATA';

const chatGpt = async (req, res) => {


    const postOptions = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message }],
            max_tokens: 100,
        })
    }

    try {
        const response = await fetch(openAiUrl, postOptions); // send request to open ai...
        const data = await response.json();

        res.send(data); // data sent to frontend...

    } catch (error) {
        console.log(error);
    }
}

export default chatGpt;