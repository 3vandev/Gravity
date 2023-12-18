import { get } from "./get";
import { set } from "./set";
import { remove } from "./numeric/remove";
import { add } from "./numeric/add";

export const database = {
    get: get,
    set: set,
    remove: remove,
    add: add
}