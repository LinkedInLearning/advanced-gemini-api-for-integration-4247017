const {GoogleAIFileManager} = require("@google/generative-ai/server")
const mime = require("mime-types");

const filePath = process.argv[2];

(async ()=> {

    const mimeType = mime.lookup(filePath);

    const fileManager = new GoogleAIFileManager("AIzaSyAX1VhBZbCoFED5KoMbfHL5ec1xCbfsL_s")

    const uploadResult = await fileManager.uploadFile(filePath, {
        mimeType: mimeType,
        displayName: "A vase of tulips"
    })

    console.log(`
        File Uri: ${uploadResult.file.uri} \n
        Display Name: ${uploadResult.file.displayName} \n
        Mime Type: ${uploadResult.file.mimeType}
    `)
})();