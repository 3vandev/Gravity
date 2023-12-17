import { world } from "@minecraft/server";

const localEvents = [];

export const itemUse = (itemID, callback) => {
    localEvents.push({ itemID: itemID, callback: callback });
    //
}

world.afterEvents.itemUse.subscribe((data) => {
    for(const localEvent of localEvents) {
        if(localEvent.itemID == data.itemStack.typeId) {
            localEvent.callback(data.source);
        }
    }
});