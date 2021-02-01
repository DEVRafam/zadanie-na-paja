import { getValue, getById, MSG_LOCALSTORAGE_KEY, generateDegree } from "./helpers.js";
import tempFunctions from "../temperatury.js";
import Message from "../wiadomosc/Wiadomosc.js";
//
const generateText = () => {
    // use textarea value
    const textareaValue = getValue("text");
    if (textareaValue.length > 10) return textareaValue;
    // compute temperature
    else {
        const fn = getValue("temp-fn");
        const val = getValue("temp-val");
        const unitStart = generateDegree(fn);
        const unitEnd = generateDegree(fn.split("To")[1]);
        const result = tempFunctions[fn](val);
        //
        return `${val}${unitStart} to ${result}${unitEnd}`;
    }
};
//
export default () => {
    getById("create-message").addEventListener("click", () => {
        const type = getValue("select-msg-type");
        const x = getValue("pos-x");
        const y = getValue("pos-y");
        const width = getValue("width");
        const height = getValue("height");
        const text = generateText();
        const icon = getValue("select-icon");
        //
        localStorage.setItem(
            MSG_LOCALSTORAGE_KEY,
            JSON.stringify({
                type,
                x,
                y,
                width,
                width,
                height,
                text,
                icon,
            })
        );
        new Message(type, x, y, width, height, text, icon);
        document.body.classList.remove("show-interface");
    });
};
