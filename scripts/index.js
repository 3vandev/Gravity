import { events } from "./LIB/events/index";
import { utils } from "./LIB/utils/index";
import { UI } from "./LIB/system/index";

events.playerChat((sender, message) => {
}, false, "[SENDER] >> [MESSAGE]");

events.attack((attacker, target) => {
    utils.broadcast(attacker.name)
    UI.sendActionbar("Hello", attacker)

    const form = new UI.ButtonForm("Hello", "This is a test");
    form.addButton("Button #1", "Tooltip", (player) => {
        utils.broadcast("Clicked by " + player.name)
    }, "")

    form.display(attacker);
    
})