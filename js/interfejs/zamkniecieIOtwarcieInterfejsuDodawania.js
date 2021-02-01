export default () =>
    [...document.querySelectorAll(".interfaceToggler")].forEach((el) => {
        el.addEventListener("click", () => {
            document.body.classList.toggle("show-interface");
        });
    });
