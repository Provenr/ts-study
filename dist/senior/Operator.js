"use strict";
// ==========================================
// keyof
var a;
function getValue(p, k) {
    return p[k];
}
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Bike"] = 0] = "Bike";
    Vehicles[Vehicles["Plane"] = 1] = "Plane";
})(Vehicles || (Vehicles = {}));
