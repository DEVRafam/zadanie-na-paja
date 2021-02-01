import { getById } from "./helpers.js";
//
export default () =>
    getById("generate-lorem").addEventListener("click", () => {
        getById("text").value = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu`;
    });
