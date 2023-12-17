import { world } from "@minecraft/server";

const localEvents = [];

export const playerChat = (callback, cancel = false, format = undefined) => {
    localEvents.push({ callback: callback, cancel: cancel, format });
    //
}

world.beforeEvents.chatSend.subscribe((data) => {
    const { message, sender: player } = data;
    data.cancel = true;

    for(const localEvent of localEvents) {
        // Call the wrapped function
        localEvent.callback(player, message)
        
        let format = localEvent.format; 
        if(!localEvent.cancel && format) {
            const formattedMessage = format.replace(/\[SENDER\]|\[MESSAGE\]/g, match => {
                switch (match) {
                  case '[SENDER]':
                    return player.name;
                  case '[MESSAGE]':
                    return message;
                  // Add more cases for additional placeholders if needed
                  default:
                    return match;
                }
            });
            world.sendMessage(formattedMessage);
        }
    }
});