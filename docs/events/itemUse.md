```js
events.itemUse("minecraft:stick", (player) => {
    utils.broadcast("Stick used by " + player.name);
})
```

This is a small example of the itemUse event which just broadcasts a message about who used thed item