"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollecttion = /** @class */ (function () {
    function NumbersCollecttion(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollecttion.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollecttion.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollecttion.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollecttion;
}());
exports.NumbersCollecttion = NumbersCollecttion;
