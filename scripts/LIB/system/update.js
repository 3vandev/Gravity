import { system } from "@minecraft/server";

let updates = [];

export function Update(callback) {
    updates.push(callback);
}

system.runInterval(() => {
   updates.forEach(update => {
        update();
   });
}, 1)