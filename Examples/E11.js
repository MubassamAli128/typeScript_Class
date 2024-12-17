var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.circleArea = function (redius) {
        return MathUtils.PI * redius * redius;
    };
    MathUtils.PI = 3.1415;
    return MathUtils;
}());
console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));
// Enum
var Status;
(function (Status) {
    Status["pending"] = "PENDING";
    Status["Inprogress"] = "IN_PROGRESS";
    Status["Completed"] = "COMPLETED";
})(Status || (Status = {}));
var currentStatus = Status.Inprogress;
console.log(currentStatus);
