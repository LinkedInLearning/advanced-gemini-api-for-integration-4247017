const {GoogleGenerativeAI} = require("@google/generative-ai");

const fileURL = process.argv[2];
const mimeType = process.argv[4];

(async () => {

    const generativeAI = new GoogleGenerativeAI("AIzaSyAX1VhBZbCoFED5KoMbfHL5ec1xCbfsL_s");

    const geminiModel = generativeAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })

    const request = await geminiModel.generateContent([
        {
            fileData: {
                mimeType: mimeType,
                fileUri: fileURL
            }
        },
        {
            "text": "Analyze this file"
        }
    ])

    const response = await request.response;

    const result = response.text();

    console.log(result);
})();