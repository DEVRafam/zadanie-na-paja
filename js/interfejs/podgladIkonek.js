import { getById } from "./helpers.js";
//
export default () => {
    getById("select-icon").addEventListener("change", (e) => {
        const el = getById("icon-preview");
        //
        let classNameToRemove = "";
        [...el.classList].forEach((className) => {
            if (className.includes("fa-")) classNameToRemove = className;
        });
        //
        el.classList.remove(classNameToRemove);
        el.classList.add(e.target.value);
    });
};
