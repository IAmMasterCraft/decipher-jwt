exports.decipherToken = (token) => {
    try {
        const splitted = token.split(rawToString("Lg=="));
        const dataString = splitted[splitted.length - Number(rawToString("Mg=="))];
        const responseString = rawToString(dataString);
        const result = JSON.parse(responseString);
        return {result, token_object: true, status: rawToString("c3VjY2Vzcw==")};
    } catch (error) {
        return {
            result: null,
            token_object: false,
            status: rawToString("ZmFpbGVk"),
        }
    }
    
}

const rawToString = (rawString) => {
    return Buffer.from(rawString, 'base64').toString();
}