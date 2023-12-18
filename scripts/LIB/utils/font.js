export const colours = {
    dark_red: '4',
    red: 'c',
    gold: '6',
    yellow: 'e',
    dark_green: '2',
    green: 'a',
    aqua: 'b',
    dark_aqua: '3',
    dark_blue: '1',
    blue: '9',
    light_purple: 'd',
    dark_purple: '5',
    white: 'f',
    gray: '7',
    dark_gray: '8',
    black: '0'
}

export const format_codes = {
    obfuscated: 'k',
    bold: 'l',
    strikethrough: 'm',
    underline: 'n',
    italic: 'o',
    reset: 'r'
}

export const colourize = (text, colour) => {
    return `§${colour}${text}§r`;
}

export const font = {
    colours: colours,
    format_codes: format_codes,
    colourize: colourize
}