import { getById } from "./helpers.js";
//
export default () =>
    getById("clear-tekst").addEventListener("click", () => {
        getById("text").value = ``;
    });
