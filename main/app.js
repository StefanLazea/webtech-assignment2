function addTokens(input, tokens) {
    if (!(typeof input === 'string')) {
        console.log(input)
        throw new Error('Invalid input');
    }

    if (input.length < 6) {
        throw new Error('Input should have at least 6 characters');
    }

    tokens.forEach(token => {
        if (typeof token.tokenName !== "string") {
            throw new Error("Invalid array format");
        }
    });

    if (!input.includes('...')) {
        return input;
    } else {
        tokens.forEach(element => {
            input = input.replace('...', "${" + `${element.tokenName}` + "}");

        });
        return input;
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;