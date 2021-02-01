const MESSAGE_ELEMENT_ID = "message";
import { getById } from "../interfejs/helpers.js";
//
export default class {
    constructor(type, x, y, width, height, text, icon) {
        this.__position = { x, y };
        this.__sizes = { width, height };
        this.__content = { type, text, icon };
    }
    //
    createMSGWrapper() {
        const el = document.createElement("div");
        //
        [
            ["class", this.__content.type],
            ["id", MESSAGE_ELEMENT_ID],
        ].forEach((atr) => el.setAttribute(atr[0], atr[1]));
        //
        const { height, width } = this.__sizes;
        const { x, y } = this.__position;
        el.style.cssText = `
            width: ${width};
            height: ${height};
            top: ${y};
            left: ${x}
        `;
        this.MSGElement = el;
    }
    //
    createMessageBar() {
        const elType = this.__content.text.length < 100 ? "h2" : "p";
        const mess = document.createElement(elType);
        mess.textContent = this.__content.text;
        this.MSGElement.appendChild(mess);
    }
    //
    createIcon() {
        const icon = document.createElement("i");
        ["fa", this.__content.icon].forEach((className) => {
            icon.classList.add(className);
        });
        this.MSGElement.appendChild(icon);
    }
    //
    deleteCurrentMessage() {
        try {
            getById(MESSAGE_ELEMENT_ID).remove();
        } catch (e) {}
    }
}
