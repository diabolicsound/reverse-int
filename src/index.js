module.exports = function reverse (n) {
 if (n < 0) {
     let arr = String(n).split('').reverse();
    let str = arr.slice(0, arr.length - 1).join('')
    return Number(str);
 }
 else {
     let str = String(n).split('').reverse().join('');
 return Number(str);
}
}
