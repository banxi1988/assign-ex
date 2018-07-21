import That from "that-is";

/**
 * 使用 JSON.parse(JSON.stringify) 实现深度拷贝
 * @param value any
 */
export function deepCopy<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

/**
 *  深度赋值，原对象中的值会覆盖目标对象已经的属性。
 *  目标对象中没有属性则会添加进去
 * @param dest 赋值目标对象
 * @param src  赋值源对象
 */
export function deepAssign<T extends Object, S extends Object>(
  dest: T,
  src: S
): T & S {
  if ((dest as any) === src) {
    return dest as any;
  }
  for (const key in src) {
    if (!src.hasOwnProperty(key)) {
      continue;
    }
    const srcVal = src[key];
    if (dest.hasOwnProperty(key)) {
      const destVal = (dest as any)[key];
      if (That.isObject(destVal) && That.isObject(srcVal)) {
        deepAssign(destVal, srcVal);
      } else {
        // just assign
        (dest as any)[key] = srcVal;
      }
    } else {
      // just assign
      (dest as any)[key] = srcVal;
    }
  }
  return dest as any;
}

/**
 *
 * 源对象的属性如果在目标对象中也存在，则 copy 然后覆盖目标对象中的属性
 * @param dest 目标对象
 * @param src 源对象
 */
export function copySame<T extends Object, S extends Object>(
  dest: T,
  src: S
): T {
  if ((dest as any) === src) {
    return dest as any;
  }
  for (const key in dest) {
    if (dest.hasOwnProperty(key) && src.hasOwnProperty(key)) {
      const srcVal = (src as any)[key];
      if (That.isObject(srcVal)) {
        dest[key] = deepCopy(srcVal);
      } else {
        dest[key] = srcVal;
      }
    }
  }
  return dest;
}

/**
 *
 * 源对象的属性如果在目标对象中也存在，则 直接赋值 然后覆盖目标对象中的属性
 * @param dest 目标对象
 * @param src 源对象
 */
export function assignSame<T extends Object, S extends Object>(
  dest: T,
  src: S
): T {
  if ((dest as any) === src) {
    return dest as any;
  }
  for (const key in dest) {
    if (dest.hasOwnProperty(key) && src.hasOwnProperty(key)) {
      const srcVal = (src as any)[key];
      dest[key] = srcVal;
    }
  }
  return dest;
}
