import { getById } from "./helpers.js";
//
export default () => {
    getById("interface-form").addEventListener("submit", (e) => {
        e.preventDefault();
    });
};
