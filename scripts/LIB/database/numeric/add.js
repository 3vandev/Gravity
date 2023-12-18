export const add = (id, table, value) => {
    id.setDynamicProperty(table, value + id.getDynamicProperty(table));
}