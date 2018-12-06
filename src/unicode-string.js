const charAt = (string, index) => {
    var first = string.charCodeAt(index);
    var second;
    if (first >= 0xD800 && first <= 0xDBFF && string.length > index + 1) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
            return string.substring(index, index + 2);
        }
    }
    return string[index];
}

const sliceArray = (string, start, end) => {
    var accumulator = [];
    var character;
    var stringIndex = 0;
    var unicodeIndex = 0;
    var length = string.length;

    while (stringIndex < length) {
        character = charAt(string, stringIndex);
        if (unicodeIndex >= start && unicodeIndex < end) {
            accumulator.push(character);
        }
        stringIndex += character.length;
        unicodeIndex += 1;
    }
    return accumulator;
}

const slice = (string, start, end) => sliceArray(string, start, end).join('')

const toNumber = (value, fallback) => value === undefined ? fallback : Number(value)

const substring = (string, start, end) => {
    var realStart = toNumber(start, 0);
    var realEnd = toNumber(end, string.length);
    if (realEnd == realStart) {
        return "";
    } else if (realEnd > realStart) {
        return slice(string, realStart, realEnd);
    } else {
        return slice(string, realEnd, realStart);
    }
}

const substr = (string, start, length) => substring(string, start, start + length)

const toArray = (string) => sliceArray(string, 0, string.length)

const length = (string) => toArray(string).length

module.exports = { substring, substr, toArray, length }