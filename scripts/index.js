import { events } from "./LIB/events/index";
import { utils } from "./LIB/utils/index";
import { UI } from "./LIB/system/index";
import { database } from "./LIB/database/index";

events.playerChat((sender, message) => {
}, false, "[SENDER] >> [MESSAGE]");

events.attack((attacker, target) => {
    utils.broadcast(attacker.name)
    UI.sendActionbar("Hello", attacker)
})

events.itemUse("minecraft:stick", (player) => {
    utils.broadcast("Stick used by " + player.name);

    const playerMoney = database.get(player, 'money');
    const form = new UI.ButtonForm("Hello",`Hello ${player.name} you have ${playerMoney}`);
    form.addButton("Database", "test" , (player) => {
        database.set(player, 'money', 10);
    }, "")

    form.display(player);
})

