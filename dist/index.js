"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var that_is_1 = __importDefault(require("that-is"));
function deep_assign(dest, src) {
    if (dest === src) {
        return dest;
    }
    for (var key in src) {
        if (!src.hasOwnProperty(key)) {
            continue;
        }
        var srcVal = src[key];
        if (dest.hasOwnProperty(key)) {
            var destVal = dest[key];
            if (that_is_1.default.isObject(destVal) && that_is_1.default.isObject(srcVal)) {
                deep_assign(destVal, srcVal);
            }
            else {
                // just assign
                dest[key] = srcVal;
            }
        }
        else {
            // just assign
            dest[key] = srcVal;
        }
    }
    return dest;
}
exports.default = deep_assign;
