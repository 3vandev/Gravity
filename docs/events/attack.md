```js
events.attack((attacker, target) => {
    utils.broadcast(attacker.name)
})
```

Attack takes in a callback function which is passed in attacker and target