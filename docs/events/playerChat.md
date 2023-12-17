```js
events.playerChat((sender, message) => {
    utils.broadcast(sender.name)
}, false, "[SENDER] >> [MESSAGE]");
```

With this there is 3 arguments a callback function which is passed sender, message then a boolean: cancel which cancels the message event and finally a message format changer.