import { events } from "./LIB/events/index";
import { utils } from "./LIB/utils/index";
import { UI } from "./LIB/system/index";

events.playerChat((sender, message) => {
}, false, "[SENDER] >> [MESSAGE]");

events.attack((attacker, target) => {
    utils.broadcast(attacker.name)
    UI.sendActionbar("Hello", attacker)
})