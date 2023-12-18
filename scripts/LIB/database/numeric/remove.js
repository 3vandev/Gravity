export const remove = (id, table, value) => {
    id.setDynamicProperty(table, value - id.getDynamicProperty(table));
}