/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(" ");
    let sorted = new Array(arr.length);
    arr.forEach( item =>
        sorted[parseInt(item[item.length - 1]) - 1] = item.slice(0, item.length - 1)
    )
    return sorted.join(" ")
};
