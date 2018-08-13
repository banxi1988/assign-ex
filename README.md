# assign-ex

[![Build Status](https://travis-ci.org/banxi1988/assign-ex.svg?branch=master)](https://travis-ci.org/banxi1988/assign-ex)

Like Object.assign,but assign deeply if needed.

## Installation

1.  `npm i assign-ex -S`
2.  `yarn add assign-ex`

## Usage

### JavaScript

You can check the current tests to see how to use it.

```js
"use strict";
const { assert } = require("chai");
const { deepAssign, copySame, assignSame } = require("../dist/index");

describe("deepAssign", () => {
  it("assign simple", () => {
    const objA = { a: "a" };
    const objB = { b: "b" };
    deepAssign(objA, objB);
    assert.deepEqual(objA, { a: "a", b: "b" });
  });

  it("assign override", () => {
    const objA = { a: "a" };
    const objB = { a: "newA", b: "b" };
    deepAssign(objA, objB);
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
    deepAssign(objA, objB);
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
    deepAssign(objA, objB);
    assert.deepEqual(objA, {
      a: "newA",
      b: { name: "banxi", age: 18, gender: "male" },
      c: { name: "coco" }
    });
  });
});

describe("copySame", () => {
  it("copy simple", () => {
    const objA = {
      a: "a",
      b: "b"
    };
    const objB = {
      a: "A",
      c: "C"
    };
    copySame(objA, objB);
    assert.deepEqual(objA, {
      a: "A",
      b: "b"
    });
  });

  it("copy same deep", () => {
    const objA = { a: "a", b: "b" };
    const objB = { a: "A", b: { age: 18 }, c: "text" };
    copySame(objA, objB);
    assert.deepEqual(objA, { a: "A", b: { age: 18 } });
    objB.b.age = 19;
    assert.deepEqual(objA, { a: "A", b: { age: 18 } });
  });
});

describe("assignSame", () => {
  it("assign same", () => {
    const objA = { a: "a", b: "b" };
    const objB = { a: "A", b: { age: 18 }, c: "text" };
    assignSame(objA, objB);
    assert.deepEqual(objA, { a: "A", b: { age: 18 } });
    objB.b.age = 19;
    assert.deepEqual(objA, { a: "A", b: { age: 19 } });
  });
});
```

### TypeScript

```ts
import { deepCopy, deepAssign, copySame, assignSame } from "assign-ex";
```

### Full check api list

[api list](https://github.com/banxi1988/assign-ex/blob/master/dist/index.d.ts)

## Test

`npm run test`
