export const getById = (id) => document.getElementById(id);
export const getValue = (id) => getById(id).value;
export const MSG_LOCALSTORAGE_KEY = "message";
export const generateDegree = (val) => {
    return `°${val.slice(0, 1).toUpperCase()}`;
};
