import { getById } from "./helpers.js";
//
export default () => {
    getById("select-msg-type").addEventListener("change", (e) => {
        const el = getById("type-preview");
        //
        el.classList = [e.target.value];
    });
};
