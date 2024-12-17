function search(data, item) {
    return data.find(function (value) { return value === item; });
}
var userID = [1, 2, 3, 4, 5];
var userNameList = ["Mubassam", "skills", "career"];
var resIds = search(userID, 5);
var resNames = search(userNameList, "skills");
console.log(resIds);
console.log(resNames);
