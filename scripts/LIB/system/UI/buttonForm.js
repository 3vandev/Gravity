/* 

###    #    #   ###   ##     #     ####    ####  ##    #
####   #    #  ##  #  ###    #     ##  #   #     ##    #
   #   #    #  ##  #  ####   #     ##   #  #     ##    #
####   ##  ##  #####  #####  #     ##   #  ####  ##    #
   #   ##  ##  ##  #  ## ### #     ##   #  #      ##  #
####    #  #   #   #  ##   ###     ##  #   #      ## #
###      ##    #   #  ##     #     ####    ####    ##

*/
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
    
    addButton(text, click = (player) => {}, image = '') {
        this.buttons.push({text: text, image: image, click: click})
    }

    display(player) {
        for(const button of this.buttons) {
            let buttonText = button.text;

            this.form.button(button.text);
        }

        this.form.show(player).then(result => {
            const selection = result.selection;
            this.buttons[selection].click(player);
        })
    }
}