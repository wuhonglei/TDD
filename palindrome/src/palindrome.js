module.exports = function(phrase) {
    if (undefined === phrase) {
        throw new Error('Invalid argument');
    }

    if (0 === phrase.trim().length) {
        return false;
    }

    return phrase.split('').reverse().join('') === phrase;
};