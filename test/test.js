"use strict";
const { assert } = require("chai");
const deep_assign = require("../dist/index").default;

describe("deep-assign", () => {
  it("assign simple", () => {
    const objA = { a: "a" };
    const objB = { b: "b" };
    deep_assign(objA, objB);
    assert.deepEqual(objA, { a: "a", b: "b" });
  });

  it("assign override", () => {
    const objA = { a: "a" };
    const objB = { a: "newA", b: "b" };
    deep_assign(objA, objB);
    assert.deepEqual(objA, { a: "newA", b: "b" });
  });

  it("deep assign override", () => {
    const objA = {
      a: "a",
      b: "b",
      c: { name: "coco" },
      d: { willLost: "anyvalue" }
    };
    const objB = { a: "newA", b: { name: "banxi", age: 18 }, d: "replace" };
    deep_assign(objA, objB);
    assert.deepEqual(objA, {
      a: "newA",
      b: { name: "banxi", age: 18 },
      c: { name: "coco" },
      d: "replace"
    });
  });
  it("deep assign merge", () => {
    const objA = { a: "a", b: { gender: "male" }, c: { name: "coco" } };
    const objB = { a: "newA", b: { name: "banxi", age: 18 } };
    deep_assign(objA, objB);
    assert.deepEqual(objA, {
      a: "newA",
      b: { name: "banxi", age: 18, gender: "male" },
      c: { name: "coco" }
    });
  });
});
