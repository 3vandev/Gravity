import { ActionFormData } from "@minecraft/server-ui"

export class ButtonForm {
    heading;
    description;
    buttons = [];
    form = new ActionFormData();

    constructor(heading, description = '') {
        this.form.title(heading);
        this.form.body(description);
    }
    
    addButton(text, tooltip = undefined, click = (player) => {}, image = undefined) {
        this.buttons.push({text: text, tooltip: tooltip, image: image, click: click})
    }

    display(player) {
        for(const button of this.buttons) {
            let buttonText = button.text;
            if(button.tooltip) buttonText = `${buttonText}\n${button.tooltip}`
            this.form.button(button.text);
        }

        this.form.show(player).then(result => {
            const selection = result.selection;
            this.buttons[selection].click(player);
        })
    }
}