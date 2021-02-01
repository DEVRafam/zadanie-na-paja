import { MSG_LOCALSTORAGE_KEY } from "./interfejs/helpers.js";
import Message from "./wiadomosc/Wiadomosc.js";
//
const localStorageMessage = localStorage.getItem(MSG_LOCALSTORAGE_KEY);
if (localStorageMessage) {
    const { type, x, y, width, height, text, icon } = JSON.parse(localStorageMessage);
    new Message(type, x, y, width, height, text, icon);
    document.body.classList.remove("show-interface");
} else document.body.classList.add("show-interface");
