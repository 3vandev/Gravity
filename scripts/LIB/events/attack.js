import { world } from "@minecraft/server";

const localEvents = [];

export const attack = (callback) => {
    localEvents.push({ callback: callback });
    //
}

world.afterEvents.entityHitEntity.subscribe((data) => {
    const attacker = data.damagingEntity;
    const target = data.hitEntity;

    for(const localEvent of localEvents) {
        localEvent.callback(attacker, target);
    }
});