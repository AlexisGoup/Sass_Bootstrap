import CoopDom from "../CoopDom.js";

export default class Credits extends CoopDom {
    constructor(){
        super();

        this.render();
    }

    render = () => {
        const footer = document.querySelector("#Credits");
        footer.parentElement.style.backgroundColor = "lightgrey";

        this.createAddDomElt(
            "a",
            "Crédits",
            footer, 
            {
                "href" : "#",
                "style": "color: black; text-align: center; padding: 10px",
                "class": "col align-self-center"
            }
        );
    }
}