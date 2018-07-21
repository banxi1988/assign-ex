"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var that_is_1 = __importDefault(require("that-is"));
/**
 * 使用 JSON.parse(JSON.stringify) 实现深度拷贝
 * @param value any
 */
function deepCopy(value) {
    return JSON.parse(JSON.stringify(value));
}
exports.deepCopy = deepCopy;
/**
 *  深度赋值，原对象中的值会覆盖目标对象已经的属性。
 *  目标对象中没有属性则会添加进去
 * @param dest 赋值目标对象
 * @param src  赋值源对象
 */
function deepAssign(dest, src) {
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
                deepAssign(destVal, srcVal);
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
exports.deepAssign = deepAssign;
/**
 *
 * 源对象的属性如果在目标对象中也存在，则 copy 然后覆盖目标对象中的属性
 * @param dest 目标对象
 * @param src 源对象
 */
function copySame(dest, src) {
    if (dest === src) {
        return dest;
    }
    for (var key in dest) {
        if (dest.hasOwnProperty(key) && src.hasOwnProperty(key)) {
            var srcVal = src[key];
            if (that_is_1.default.isObject(srcVal)) {
                dest[key] = deepCopy(srcVal);
            }
            else {
                dest[key] = srcVal;
            }
        }
    }
    return dest;
}
exports.copySame = copySame;
/**
 *
 * 源对象的属性如果在目标对象中也存在，则 直接赋值 然后覆盖目标对象中的属性
 * @param dest 目标对象
 * @param src 源对象
 */
function assignSame(dest, src) {
    if (dest === src) {
        return dest;
    }
    for (var key in dest) {
        if (dest.hasOwnProperty(key) && src.hasOwnProperty(key)) {
            var srcVal = src[key];
            dest[key] = srcVal;
        }
    }
    return dest;
}
exports.assignSame = assignSame;
