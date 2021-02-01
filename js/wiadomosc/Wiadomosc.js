import MessageAbstract from "./WiadomoscAbstrakcja.js";
//
export default class extends MessageAbstract {
    constructor(...args) {
        super(...args);
        //
        this.MSGElement = null;
        this.init();
    }
    //
    init() {
        this.deleteCurrentMessage();
        this.createMSGWrapper();
        this.createIcon();
        this.createMessageBar();
        //
        const { MSGElement } = this;
        window.MGSElement = MSGElement;
        document.body.appendChild(MSGElement);
    }
}
//
