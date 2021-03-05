module.exports = function reverse(n) {

    let x = Math.abs(n);

    return x.toFixed(0).split('').reverse().join('') - 0;
}
