import That from "that-is";
export default function deep_assign<T extends Object, S extends Object>(
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
        deep_assign(destVal, srcVal);
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
