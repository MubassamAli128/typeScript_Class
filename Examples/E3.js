var user = {
    name: "Mubassam",
    age: 19,
    welcome: function () {
        return "Welcom, ".concat(this.name, ".");
    }
};
console.log(user.welcome());
