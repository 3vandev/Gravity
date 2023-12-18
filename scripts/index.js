import { events } from "./LIB/events/index";
import { utils } from "./LIB/utils/index";
import { UI } from "./LIB/system/index";
import { database } from "./LIB/database/index";
import { font } from "./LIB/utils/font";

events.playerChat((sender, message) => {
}, false, "[SENDER] >> [MESSAGE]");

events.attack((attacker, target) => {
    utils.broadcast(attacker.name)
    UI.sendActionbar("Hello", attacker)
})

events.itemUse("minecraft:stick", (player) => {
    utils.broadcast("Stick used by " + player.name);

    const playerMoney = database.get(player, 'money');

    const form = new UI.ButtonForm(
        "Hello",
        `Hello ${player.name} you have ${playerMoney}`
    );
    form.addButton(
        `Database\n${font.colourize('Reset', font.colours.dark_gray)}`,
        (player) => {
            database.set(player, 'money', 0);
        }
    )

    form.addButton(
        `Database\n${font.colourize('Add', font.colours.green)}`,
        (player) => {
            database.add(player, 'money', 10);
        }
    )

    form.addButton(
        `Database\n${font.colourize('Remove', font.colours.red)}`,
        (player) => {
            database.remove(player, 'money', 10);
        }
    )

    form.display(player);
})

