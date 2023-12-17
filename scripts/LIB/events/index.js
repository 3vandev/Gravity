import { playerChat } from "./chatSend"; 
import { attack } from "./attack";
import { itemUse } from "./itemUse";

export const events = {
    playerChat: playerChat,
    attack: attack,
    itemUse: itemUse
};