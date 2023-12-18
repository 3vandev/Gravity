```js
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
```

This is a simple button-form which edits a database table named 'money'