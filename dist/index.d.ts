/**
 * 使用 JSON.parse(JSON.stringify) 实现深度拷贝
 * @param value any
 */
export declare function deepCopy<T>(value: T): T;
/**
 *  深度赋值，原对象中的值会覆盖目标对象已经的属性。
 *  目标对象中没有属性则会添加进去
 * @param dest 赋值目标对象
 * @param src  赋值源对象
 */
export declare function deepAssign<T extends Object, S extends Object>(dest: T, src: S): T & S;
/**
 *
 * 源对象的属性如果在目标对象中也存在，则 copy 然后覆盖目标对象中的属性
 * @param dest 目标对象
 * @param src 源对象
 */
export declare function copySame<T extends Object, S extends Object>(dest: T, src: S): T;
/**
 *
 * 源对象的属性如果在目标对象中也存在，则 直接赋值 然后覆盖目标对象中的属性
 * @param dest 目标对象
 * @param src 源对象
 */
export declare function assignSame<T extends Object, S extends Object>(dest: T, src: S): T;
