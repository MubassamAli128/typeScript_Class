function ADD(a, b) {
    return a + b;
}
console.log(ADD(2, 3));
var add = function (a, b) {
    return a + b;
};
var checkDate = function (a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
};
function sum() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return items.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sum(2, 3, 4));
