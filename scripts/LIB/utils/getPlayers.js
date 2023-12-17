import { world } from "@minecraft/server";

export const players = () => {
    return world.getPlayers();
}