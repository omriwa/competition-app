"use strict";
var initState = {
    timerOn: 0,
    timeToCount: 0,
    timer: 0,
    second: 0,
    minute: 0
};
exports["default"] = function (state, action) {
    if (state === void 0) { state = initState; }
    switch (action) {
        default:
            return state;
    }
};
