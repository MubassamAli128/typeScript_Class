var username;
username = 123;
console.log(username);
username = "ABC";
console.log(username);
var Username;
Username = {
    batchID: 123,
    name: "ABC"
};
console.log(Username);
function printId(id) {
    if (typeof id === "string") {
        console.log("ID is a string: ".concat(id.toLocaleLowerCase()));
    }
    else {
        console.log("ID is a number: ".concat(id));
    }
}
printId(101);
printId("abc");
