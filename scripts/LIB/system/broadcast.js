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

export const broadcast = (message) => {
    world.sendMessage(message);
}