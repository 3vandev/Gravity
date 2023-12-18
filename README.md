# MCBE Gravity
MCBE Gravity is a wrapper for minecraft bedrock edition tailored towards people who want to create minecraft bedrock realms or servers it allows the average javaScript programmer to create Minecraft servers easier and makes code more readable.

You are allowed to fork this project and make your own versions of it check out the LISCENSE

### Main Features
**Event System**
Gravity Wrappers event system is very clean it helps keep your code look nice and tidy here is a comparison

**Gravity Wrapper**
```js
events.attack((attacker, target) => {
    utils.broadcast(attacker.name)
    UI.sendActionbar("Hello", attacker)
})
```

**Script API**
```js
world.afterEvents.entityHitEntity.subscribe((data) => {
    world.sendMessage(data.damagingEntity.name);
    data.damagingEntity.runCommandAsync("title @s actionbar Hello");
})
```
As you can see Gravity Wrapper really helps to clean up your code and makes it look alot more readable with its custom event system.
