import colors from "colors";
import { franc } from "franc";
import langs from "langs";


const parseInput = () => {
    if (process.argv.length <= 2)
        return null;
    return process.argv.splice(2);
}

const detectLanguage = (inputStrings) => {
    let result = [];
    for (let string in inputStrings) {
        result.push(franc(string));
        console.log(result);
    }
    return result;
}

const displayInfo = (input, result) => {
    for (let i = 0; i < input.length; i++) {
        if (result[i] === 'und') {
            console.log(`${input}`);
            console.log(" - - - - - SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT! - - - - -".red)
        } else {
            let language = langs.where("3", result[i]);
            console.log(`${input}`);
            console.log(`- - - - - Our best guess is: ${language.name} - - - - -`.green)
        }
    }
}

function main() {
    let input = parseInput();
    if (input === null) {
        console.log("Please enter with at least one string, separated by spaces");
        console.log("Format: node index.js [sample_text]");
        return;
    }

    let result = detectLanguage(input);
    displayInfo(input, result);
}

main();