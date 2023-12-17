/* 

###    #    #   ###   ##     #     ####    ####  ##    #
####   #    #  ##  #  ###    #     ##  #   #     ##    #
   #   #    #  ##  #  ####   #     ##   #  #     ##    #
####   ##  ##  #####  #####  #     ##   #  ####  ##    #
   #   ##  ##  ##  #  ## ### #     ##   #  #      ##  #
####    #  #   #   #  ##   ###     ##  #   #      ## #
###      ##    #   #  ##     #     ####    ####    ##

*/
import { world } from "@minecraft/server";

export const sendTitle = (text, target) => {
    target.runCommand(`title @s title ${text}`);
}

export const sendActionbar = (text, target) => {
    target.runCommand(`title @s actionbar ${text}`);
}