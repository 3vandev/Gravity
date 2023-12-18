/* 

###    #    #   ###   ##     #     ####    ####  ##    #
####   #    #  ##  #  ###    #     ##  #   #     ##    #
   #   #    #  ##  #  ####   #     ##   #  #     ##    #
####   ##  ##  #####  #####  #     ##   #  ####  ##    #
   #   ##  ##  ##  #  ## ### #     ##   #  #      ##  #
####    #  #   #   #  ##   ###     ##  #   #      ## #
###      ##    #   #  ##     #     ####    ####    ##

*/
import { sendActionbar, sendTitle } from "./UI/hudScreenText";
import { ButtonForm } from "./UI/buttonForm";
import { Update } from "./update";
import { broadcast } from "./broadcast";

export const UI = {
    sendActionbar: sendActionbar,
    sendTitle: sendTitle,
    ButtonForm: ButtonForm,
}

export const system = {
   Update: Update,
   broadcast: broadcast
}